// import users from "./users";

const users = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log('rejected:', err.message)); 

const ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(err => console.log('rejected:', err.message)); 

const recipeData = fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log('rejected:', err.message)); 


// getData()
//     .then(data => console.log('resolved:', data))
//     .catch(err => console.log('rejected:', err.message));




export default users

