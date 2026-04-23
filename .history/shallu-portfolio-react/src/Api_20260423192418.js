import axios from "axios";

const API_URL = "https://shallu-fullstack-portfolio.onrender.com/api/portfolio";


export const getPortfolio = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};