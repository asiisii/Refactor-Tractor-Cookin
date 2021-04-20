import { expect } from 'chai';

import {sampleRecipeData, sampleIngredientsData} from '../src/data/sampledata.js'
import RecipeRepository from '../src/recipe-repo.js'

describe('Recipe Repository', () => {
  let recipeRepository, filteredRecipe

  beforeEach(() => {
    recipeRepository = new RecipeRepository(sampleRecipeData)
  })

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('Should have an array of all recipes', () => {
    expect(recipeRepository.recipes).to.be.an('array');
  });

  it('should be an instance of Recipe Repository', () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository)
  })

  describe('findRecipe', () => {
    it('should filter by a tag and return recipe', () => {
      filteredRecipe = recipeRepository.getRecipe("antipasti")
      expect(filteredRecipe[0].id).to.be.equal(595736)
      filteredRecipe = recipeRepository.getRecipe("lunch")
      expect(filteredRecipe[0].id).to.be.equal(678353)
    })
  
    it('should filter by multiple tags and return recipe', () => {
      filteredRecipe = recipeRepository.getRecipe("antipasti snack")
      expect(filteredRecipe[0].id).to.be.equal(595736)
      filteredRecipe = recipeRepository.getRecipe("lunch dinner")
      expect(filteredRecipe[0].id).to.be.equal(678353)
    })
  
    it('should filter by a name and return recipe', () => {
      filteredRecipe = recipeRepository.getRecipe("loaded chocolate chip pudding cookie cups")
      expect(filteredRecipe[0].id).to.be.equal(595736)
      filteredRecipe = recipeRepository.getRecipe("maple dijon apple cider grilled pork chops")
      expect(filteredRecipe[0].id).to.be.equal(678353)
    })
  
    it('should filter by an ingredient and return recipe', () => {
      filteredRecipe = recipeRepository.getRecipe("all purpose flour")
      expect(filteredRecipe[0].id).to.be.equal(595736)
      filteredRecipe = recipeRepository.getRecipe("apples")
      expect(filteredRecipe[0].id).to.be.equal(678353)
    })

    it('should be able to see all recipe if NO SEARCH VALUE is given', () => {
      filteredRecipe = recipeRepository.getRecipe(' ')
      expect(filteredRecipe).to.be.deep.equal(sampleRecipeData)
    })

  });

  

})