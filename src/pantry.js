class Pantry {
  constructor(userData) {
    this.contents = userData.pantry;
    this.ingredientIds;
    this.needIngredients = [];
  }

  getPantryIngredientIds() {
    const idArray = []
    this.contents.forEach(item => {
      idArray.push(item.ingredient);
    });
  }
  //determine user's pantry has enough ingredients to cook meal
  // determine amount missing ingredients needed to cook recipe
  // remove ingredients used to cook recipe from user's pantry 
}

export default Pantry;
