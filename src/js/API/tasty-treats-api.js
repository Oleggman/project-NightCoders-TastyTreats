import axios from 'axios';

export default class TastyTreatsAPI {
  constructor() {
    this.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
  }

  async fetchEvents() {
    return await axios.get(`${this.baseURL}/events`);
  }

  async fetchRecipes() {
    return await axios.get(`${this.baseURL}/recipes?limit=9`);
  }

  async fetchAllRecipes(currentPage = 1, perPage = 9) {
    const filters = JSON.parse(sessionStorage.getItem('filters'));
    const { title, category, area, ingredients, time } = filters;
    const params = new URLSearchParams({
      page: currentPage,
      limit: perPage,
      title,
      category,
      area,
      ingredient: ingredients,
      time,
    });
    return await axios.get(`${this.baseURL}/recipes?${params}`);
  }

  async fetchOneRecipe(id) {
    return await axios.get(`${this.baseURL}/recipes/${id}`);
  }

  async fetchCategories() {
    return await axios.get(`${this.baseURL}/categories`);
  }

  async fetchPopularRecipes() {
    return await axios.get(`${this.baseURL}/recipes/popular`);
  }

  async fetchAreas() {
    return await axios.get(`${this.baseURL}/areas`);
  }

  async fetchIngrediens() {
    return await axios.get(`${this.baseURL}/ingredients`);
  }

  async fetchRecipe(id) {
    return await axios.get(`${this.baseURL}/recipes/${id}`);
  }

  async updateRating(id, rating, email) {
    return await axios.patch(`${this.baseURL}/recipes/${id}/rating`, {
      rate: rating,
      email,
    });
  }

  async addOrder(order) {
    return await axios.post(`${this.baseURL}/orders/add`, order);
  }
}
