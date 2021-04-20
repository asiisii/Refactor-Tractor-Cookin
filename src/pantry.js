class Pantry {
  constructor(userData) {
    this.contents = userData.pantry;
    this.pantryIngredientIds = this.getPantryIngredientIds();
    this.neededIngredients = [];
    console.log(this.contents)
  }

  getPantryIngredientIds() {
    return this.contents.map(item => item.ingredient);
  }

  compareIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      if (this.pantryIngredientIds.indexOf(ingredient.id) === -1) {
        this.neededIngredients.push(ingredient);
      } else {
        let index = this.pantryIngredientIds.indexOf(ingredient.id);
        if (this.contents[index].amount < ingredient.quantity.amount) {
          this.neededIngredients.push(ingredient);
        }
      }
    })
  }

  subtractIngredients(recipe) {
    if (this.neededIngredients.length === 0) {
      recipe.ingredients.forEach(ingredient => {
        let index = this.pantryIngredientIds.indexOf(ingredient.id);
        let ingredientQuantity = ingredient.quantity.amount;
        let pantryQuantity = this.contents[index].amount;
        this.contents[index].amount = pantryQuantity - ingredientQuantity;
      })
    }
  }
}


export default Pantry;
