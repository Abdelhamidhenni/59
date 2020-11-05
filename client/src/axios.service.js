import axios from "axios";

export const fetchMunicipalities = async () => {
  try {
    const municipalities = await axios.get(
      `http://localhost/api/municipalities`
    );
    return municipalities.data;
  } catch (error) {
    throw Error("Error during getting municipalities");
  }
};

export default {
  fetchMunicipalities
};
