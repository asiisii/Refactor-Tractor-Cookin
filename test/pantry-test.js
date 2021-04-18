import { expect } from 'chai';
import {sampleRecipeData, sampleIngredientsData, sampleUserData} from '../src/data/sampledata.js';
import User from '../src/user.js';
import RecipeRepository from '../src/recipe-repo.js';

describe('Pantry', () => {
  let user;
  let userPantry;
  let recipeRepository;
  let recipe1;

  beforeEach(function() {
    user = new User(sampleUserData);
    userPantry = new Pantry(user);
    recipeRepository = new RecipeRepository(sampleRecipeData);
    recipe1 = recipeRepository[2];
  })
  it.skip('should be an instance of Pantry', ()  => {
    expect(userPantry).to.be.an.instanceOf(Pantry);
  })
  it.skip('should have items in the user parnty', () => {
    expect(userPantry.content).to.be.equal(sampleUserData[0]);
  })
  it.skip('should start off with no needed ingredients', () => {
    expect(userPantry.neededIngredients).to.be.equal([]);  
  })
  it.skip('should put items into need ingredients array when pantry doesn\'t have enough', () {
    userPantry.compareIngredients(recipe1)
    expect(userPantry.neededIngredients).to.be.equal([
      {"id": 9040, "quantity": {"amount": 4, "unit": ""}},
      {"id": 1001, "quantity": {"amount": 1.25, "unit": "sticks"}},
      {"id": 9354, "quantity": {"amount": 1, "unit": "large can"}},
      {"id": 9070, "quantity": {"amount": 15, "unit": "servings"}}
    ])
  })
  // check ingredients when given a different recipe
  // remove ingredients from pantry when recipe is cooked 

})