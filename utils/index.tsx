// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': '6ae9e1d53amshdc25252b8ccf875p1de2e3jsn4928b2522627',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '6ae9e1d53amshdc25252b8ccf875p1de2e3jsn4928b2522627',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers
    });

    const result = await response.json();

    return result;
}

export async function calculateCarRent(city_mpg:number, year:number){
    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year)* ageFactor;

    const rentalRatePerDay = basePricePerDay+mileageRate+ageRate;

    return rentalRatePerDay.toFixed(0);


}