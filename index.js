const cities = [
  {
    id: 301,
    name: "New York",
    population: 8398748,
    country: "United States",
  },
  {
    id: 302,
    name: "Paris",
    population: 2140526,
    country: "France",
  },
  {
    id: 303,
    name: "Tokyo",
    population: 13960000,
    country: "Japan",
  },
  {
    id: 304,
    name: "Sydney",
    population: 5230330,
    country: "Australia",
  },
  {
    id: 305,
    name: "Cairo",
    population: 9121515,
    country: "Egypt",
  },
];
//q1

function getCityPopulation(city, key) {
  return cities[0].population;
}
console.log(getCityPopulation(cities["0"]));

//q2

function isPopulationAboveThreshold(city, threshold) {
  if (city.population >= threshold) {
    return true;
  } else {
    return false;
  }
}
console.log(isPopulationAboveThreshold(cities[1], 2000000));

//Question 3:
//addCity(cities, city):
/// receives an array of city objects
//- receives a new city object (with id, population, and country)
//- adds the new city to the array
// returns the updated array

function addCity(cities, City) {
  cities.push(City);
  return cities;
}

const newCity = {
  id: 306,
  population: 1200000,
  country: "Canada",
};
console.log(addCity(cities, newCity));

//q4

//function countCitiesInCountry(cities, country) {
//let contry = cities.filter((contry)=>{

//})}
//console.log(countCitiesInCountry(cities, "France"));
