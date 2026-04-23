import axios from "axios";

const API_URL = "https://shallu-fullstack-portfolio.onrender.com/admin";

export const getPortfolioData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};