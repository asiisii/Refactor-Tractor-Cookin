// import users from "./users";
export const apiData = () => {
  const displayErrorMessage = (err) => {
    const errorField = document.querySelector('.js-error');
    const message = err.message === 'Failed to fetch' ?
      'Something went wrong. Please check your internet connection' : err.message;
    errorField.innerText = message;
  }
  
  const users = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 

  const ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 

  const recipeData = fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .catch(err => displayErrorMessage(err)); 


  return Promise.all([recipeData, ingredientsData, users])
    .then(data => {
        let apiInfo = {};
        apiInfo.recipeData = data[0];
        apiInfo.ingredientsData = data[1];
        apiInfo.users = data[2];
        
        return apiInfo;
    })
    .catch(err => displayErrorMessage(err));

};

