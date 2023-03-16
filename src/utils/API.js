import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
// eslint-disable-next-line import/no-anonymous-default-export
const API = {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};

export default API