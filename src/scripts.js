import './css/base.scss';
import './css/styles.scss';
import recipeData from './data/recipes';

// import ingredientsData from './data/ingredients';
// import users from './data/users';
import Pantry from './pantry';
// import Recipe from './recipe';
import RecipeRepository from './recipe-repo';
import User from './user';

import { apiData } from './data/fetchedData';
import domUpdate from './domUpdates';
// import Cookbook from './cookbook';


let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home');
let searchInput = document.getElementById('search-input');
let cardArea = document.querySelector('.all-cards');
// let cookbook = new Cookbook(recipeData);
// let reciperepo = new RecipeRepository(recipeData);
let user, pantry, reciperepo;

window.onload = onStartup();
searchInput.addEventListener('keyup', searchRecipe);

homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', function () {
  domUpdate.viewFavorites(user)
});



function onStartup() {
  apiData()
  .then(data => {
    reciperepo = new RecipeRepository(data.recipeData);
    let userId = (Math.floor(Math.random() * 49) + 1)
    let newUser = data.users.find(user => {
      return user.id === Number(userId);
    });
    user = new User(userId, newUser.name, newUser.pantry);
    pantry = new Pantry(newUser.pantry);
    domUpdate.populateCards(reciperepo.recipes, user);
    domUpdate.greetUser(user);
  });
}

function favoriteCard(event) {
  let specificRecipe = reciperepo.recipes.find(recipe => {
    if (recipe.id  === Number(event.target.id)) {
      return recipe;
    }
  })
  if (!event.target.classList.contains('favorite-active')) {
    event.target.classList.add('favorite-active');
    favButton.innerHTML = 'View Favorites';
    user.addToFavorites(specificRecipe);
  } else if (event.target.classList.contains('favorite-active')) {
    event.target.classList.remove('favorite-active');
    user.removeFromFavorites(specificRecipe)
  }
}

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('card-picture')) {
    domUpdate.displayDirections(event);
  } else if (event.target.classList.contains('home')) {
    favButton.innerHTML = 'View Favorites';
    domUpdate.populateCards(reciperepo.recipes, user);
  }
}

function searchRecipe(event) {
  event.preventDefault();
  cardArea.innerHTML = '';
  let searchValue = searchInput.value.toLowerCase();
  let getSearchResults = reciperepo.getRecipe(searchValue);
  domUpdate.populateCards(getSearchResults);
}
