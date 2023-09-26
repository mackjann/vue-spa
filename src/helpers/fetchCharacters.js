import axios from "axios";

export default async function fetchCharacters(url) {
  try {
    const response = await axios.get(url);

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
