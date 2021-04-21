let pantrySection = document.getElementById('viewPantryButton');

const checkForError = response => {
  if (!response.ok) {
    throw new Error('Please make sure that you\'re proving all the ingredient info.');
  } else {
    return response.json();
  }
}

const displayErrorMessage = (err) => {
  const errorField = document.querySelector('.js-error');
  const message = err.message === 'Failed to fetch' ?
    'Something went wrong. Please check your internet connection' : err.message;
  errorField.innerText = message;
}

const addIngredientToPage = ingredient => {
  pantrySection.innerHTML += ``;
}

const addToQueue = (users, ingredientsData, recipeData) => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: users.id,
      ingredientId: ingredientsData.id,
      ingredientModification: pantry.subtractIngredients(recipeData)
    })
  })
  .then(response => checkForError(response))
  .then(ingredient => addIngredientToPage(ingredient))
  .catch(err => console.log(displayErrorMessage(err)))
}