import './css/base.scss';
import './css/styles.scss';

import Pantry from './pantry';
import RecipeRepository from './recipe-repo';
import User from './user';

import { apiData } from './data/fetchedData';
import domUpdate from './domUpdates';

let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home');
let searchInput = document.getElementById('search-input');
let cardArea = document.querySelector('.all-cards');

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

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    domUpdate.favoriteCard(event, reciperepo, user);
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
