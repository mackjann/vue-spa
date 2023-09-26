import axios from "axios";

const cache = {};

export default async function fetchCharacters(url) {
  try {
    if (cache[url]) {
      return cache[url];
    }
    const response = await axios.get(url);
    cache[url] = response.data;
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("No characters found");
    } else {
      throw new Error(
        "An error occurred while fetching data. Please try again later."
      );
    }
  }
}
