class Pantry {
  constructor(userData) {
    this.contents = userData.pantry;
    this.ingredientIds = this.getPantryIngredientIds();
    this.needIngredients = [];
  }

  getPantryIngredientIds() {
    return this.contents.map(item => item.ingredient)
  }
  //determine user's pantry has enough ingredients to cook meal
  // determine amount missing ingredients needed to cook recipe
  // remove ingredients used to cook recipe from user's pantry 
}

export default Pantry;
