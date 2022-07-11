import Airports from '../assets/AirportList/Airports.json'


export const AirportToFlagConvert = (airportId) => {


    let countryName = []
    //TAKES AN AIRPORTS 3 digit code and returns the country
    //OF origin

    Airports.forEach(findCountry)

    function findCountry(item, index, array) {

        if (item.code === airportId) {

            countryName.push(item.country)
        }
    }

    return countryName
}
