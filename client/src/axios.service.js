import axios from "axios";

export const fetchMunicipalities = async () => {
  try {
    const municipalities = await axios.get(`/api/municipalities`, {
      baseURL: window.location.origin
    });
    return municipalities.data;
  } catch (error) {
    throw Error("Error during getting municipalities");
  }
};

export const fetchMunicipalitiesByName = async name => {
  try {
    const municipalities = await axios.get(
      `/api/municipalities/search/${name}`,
      {
        baseURL: window.location.origin
      }
    );
    return municipalities.data;
  } catch (error) {
    throw Error("Error during getting municipalities");
  }
};

export const fetchMunicipalityScore = async id => {
  try {
    const municipality = await axios.get(`/api/municipalities/${id}`, {
      baseURL: window.location.origin
    });
    return municipality.data;
  } catch (error) {
    throw Error("Error during getting municipality score");
  }
};

export default {
  fetchMunicipalities,
  fetchMunicipalityScore
};
