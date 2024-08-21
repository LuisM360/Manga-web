import axios from "axios";

const BASE_URL = "https://api.mangadex.org";

export const searchManga = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/manga`, {
      params: {
        title: query,
        limit: 10,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching manga:", error);
    return [];
  }
};
