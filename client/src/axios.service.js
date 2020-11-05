import axios from "axios";
import wrapper from "axios-cache-plugin";

let http = wrapper(axios, {
  maxCacheSize: 15
});
http.__addFilter(/municipalities/);

export const fetchMunicipalitiesByName = async name => {
  try {
    const municipalities = await http.get(
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
    const municipality = await http.get(`/api/municipalities/${id}`, {
      baseURL: window.location.origin
    });
    return municipality.data;
  } catch (error) {
    throw Error("Error during getting municipality score");
  }
};
