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

homeButton.addEventListener('click', cardButtonConditionals);
cardArea.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', function () {
  domUpdate.viewFavorites(reciperepo, user)
});

searchInput.addEventListener('keyup', function() {
  domUpdate.searchRecipe(reciperepo, user)
});

function onStartup() {
  apiData()
  .then(data => {
    console.log(data.recipeData);
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



