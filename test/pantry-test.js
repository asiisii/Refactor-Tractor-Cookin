import { expect } from 'chai';
import {sampleRecipeData, sampleIngredientsData, sampleUserData} from '../src/data/sampledata.js';
import User from '../src/user.js';
import RecipeRepository from '../src/recipe-repo.js';
import Pantry from '../src/pantry.js';

describe('Pantry', () => {
  let user;
  let userPantry;
  let recipeRepository;
  let recipe1;
  let recipe2;

  beforeEach(() => {
    user = new User(sampleUserData[0]);
    userPantry = new Pantry(user);
    // recipeRepository = new RecipeRepository(sampleRecipeData);
    recipe1 = sampleRecipeData[2];
    recipe2 = sampleRecipeData[3];
  })
  it('should be an instance of Pantry', ()  => {
    expect(userPantry).to.be.an.instanceof(Pantry);
  })
  it('should have items in the user parnty', () => {
    expect(userPantry.contents).to.deep.equal([
      {"ingredient": 11477, "amount": 1},
      {"ingredient": 93820, "amount": 1},
      {"ingredient": 11297, "amount": 3},
      {"ingredient": 11547, "amount": 5},
      {"ingredient": 1082047, "amount": 5}
    ]);
  })
  it('should start off with no needed ingredients', () => {
    expect(userPantry.neededIngredients).to.deep.equal([]);  
  })
  it('should put items into need ingredients array when pantry doesn\'t have enough', () => {
    userPantry.compareIngredients(recipe1);
    expect(userPantry.neededIngredients).to.deep.equal([
      {"name": "bananas", "id": 9040, "quantity": {"amount": 4, "unit": ""}},
      {"name": "butter", "id": 1001, "quantity": {"amount": 1.25, "unit": "sticks"}},
      {"name": "canned pineapple", "id": 9354, "quantity": {"amount": 1, "unit": "large can"}},
      {"name": "cherries", "id": 9070, "quantity": {"amount": 15, "unit": "servings"}}
    ])
  })
  it.only('check ingredients when given a different recipe', () => {
    userPantry.compareIngredients(recipe2);
    expect(userPantry.neededIngredients).to.deep.equal([
      {"name": "peaches", "id": 9236, "quantity": {"amount": 20, "unit": "ounces"}},
      {"name": "unsalted butter", "id": 1145, "quantity": {"amount": 0.25, "unit": "cup"}}
    ])
  })
  // remove ingredients from pantry when recipe is cooked 

})