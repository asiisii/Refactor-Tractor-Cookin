const chai = require('chai')
const expect = chai.expect

import sampleRecipeData from '../src/data/sampledata.js'
import RecipeRepository from '../src/recipe-repo.js'

describe('Recipe Repository', () => {
  let recipeRepository, filteredRecipe

  beforeEach(() => {
    recipeRepository = new RecipeRepository(sampleRecipeData)
  })

  it.only('should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it.only('should be an instance of Recipe Repository', () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository)
  })

  it.only('should filter by a tag and return recipe', () => {
    filteredRecipe = recipeRepository.filterByTag(["antipasti"])
    expect(filteredRecipe[0].id).to.be.equal(595736)
    filteredRecipe = recipeRepository.filterByTag(["lunch"])
    expect(filteredRecipe[0].id).to.be.equal(678353)
  })

  it.only('should filter by multiple tags and return recipe', () => {
    filteredRecipe = recipeRepository.filterByTag(["antipasti", "snack"])
    expect(filteredRecipe[0].id).to.be.equal(595736)
    filteredRecipe = recipeRepository.filterByTag(["lunch", "dinner"])
    expect(filteredRecipe[0].id).to.be.equal(678353)
  })



})