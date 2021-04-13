const chai = require('chai')
const expect = chai.expect

const RecipeRepository = require('../src/recipe-repo.js')

describe('Recipe Repository', () => {
  let recipeRepository

  beforeEach(() => {
    recipeRepository = new RecipeRepository()
  })

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })

  it('should be an instance of Recipe Repository', () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository)
  })

  

})