class Pantry {
  constructor(userData) {
    this.contents = userData.id.pantry;
    this.pantryIngredientIds = this.getPantryIngredientIds();
    this.neededIngredients = [];
  }

  getPantryIngredientIds() {
    return this.contents.map(item => item.ingredient)
  }

  compareIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      if (this.pantryIngredientIds.indexOf(ingredient.id) === -1) {
        this.neededIngredients.push(ingredient);
      } else {
        let index = this.pantryIngredientIds.indexOf(ingredient.id);
        if (this.party[index].amount < ingredient.quantity.amount) {
          this.neededIngredients.push(ingredient);
        }
      }
    })
  }
  // determine amount missing ingredients needed to cook recipe
  // remove ingredients used to cook recipe from user's pantry 
}

export default Pantry;
