import { expect } from 'chai';
import {sampleRecipeData, sampleIngredientsData, sampleUserData} from '../src/data/sampledata.js';
import User from '../src/user.js';
import RecipeRepository from '../src/recipe-repo.js';

describe('Pantry', () => {
  let user;
  let pantry;
  let recipeRepository;
  let recipe1;

  beforeEach(function() {
    user = new User(sampleUserData);
    pantry = new Pantry(user);
    recipeRepository = new RecipeRepository(sampleRecipeData);
    recipe1 = recipeRepository[0];
  })
})