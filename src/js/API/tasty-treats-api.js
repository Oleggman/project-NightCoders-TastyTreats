import axios from 'axios';

export default class TastyTreatsAPI {
  constructor() {
    this.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
  }

  async fetchAllRecipes() {
    return await axios.get(`${this.baseURL}/recipes?limit=9`);
  }

  async fetchPopularRecipes() {
    return await axios.get(`${this.baseURL}/recipes/popular`);
  }

  async fetchCategories() {
    return await axios.get(`${this.baseURL}/categories`);
  }
}