// import users from "./users";
export const apiData = () => {
    const users = fetch('http://localhost:3001/api/v1/users')
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log('rejected:', err.message)); 
    
    const ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log('rejected:', err.message)); 
    
    const recipeData = fetch('http://localhost:3001/api/v1/recipes')
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log('rejected:', err.message)); 

    return Promise.all([recipeData, ingredientsData, users])
    .then(data => {
        let apiInfo = {};
        apiInfo.recipeData = data[0];
        apiInfo.ingredientsData = data[1];
        apiInfo.users = data[2];
        
        return apiInfo;
    });

};


