import axios from "axios";

const getData = (countryName) => {
 return axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`)
}

export {getData}