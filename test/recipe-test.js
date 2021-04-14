import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from '../src/data/recipes.js';
import ingredientsData from '../src/data/ingredients.js';

let recipe;

describe('Recipe', () => {
  beforeEach(() => {
    recipe = new Recipe(recipeData[47], ingredientsData);
  })

  it.only('Should hold its own ingredient data', () => {
    expect(recipe.ingredients).to.equal(recipeData[47].ingredients);
  })

  it.only('Should hold its own instruction data', () => {
    expect(recipe.instructions).to.equal(recipeData[47].instructions);
  })

  it.only('Should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(4166);
  })

  it.only('should return recipe\'s instructions', () => {
    recipe = new Recipe(recipeData[0], ingredientsData);
    expect(recipe.getInstructions()).to.deep.equal([
      {
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      },
      {
        "number": 2,
        "instruction": "Add egg and vanilla and mix until combined."
      },
      {
        "number": 3,
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees."
      },
      {
        "number": 4,
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt."
      },
      {
        "number": 5,
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown."
      },
      {
        "number": 6,
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce."
      }
    ])
    recipe = new Recipe(recipeData[1], ingredientsData);
    expect(recipe.getInstructions()).to.deep.equal([
      {
        "number": 1,
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!"
      }
    ])
  })

  it.only('Should return name of ingredients needed', () => {
    recipe = new Recipe(recipeData[0], ingredientsData);
    expect(recipe.getIngredientsName()).to.deep.equal([
      "all purpose flour", 
      "baking soda",
      "egg",
      "granulated sugar",
      "instant vanilla pudding mix",
      "light brown sugar",
      "salt",
      "sea salt",
      "semisweet chocolate chips",
      "unsalted butter",
      "vanilla extract"
    ]);
    recipe = new Recipe(recipeData[1], ingredientsData);
    expect(recipe.getIngredientsName()).to.deep.equal([
      "apple cider",
      "apples",
      "cornstarch",
      "dijon mustard",
      "garlic",
      "grainy mustard",
      "maple syrup",
      "Miso Soybean Paste",
      "pork chops",
      "salt and pepper",
      "soy sauce",
      "sriracha"
    ]);
  })

});
