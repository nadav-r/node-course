const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const secretKeyDarkSky = 'd5ce81066d903c4020d272c3856845f1';
const tokenMapBox = 'pk.eyJ1IjoibmFkMjIiLCJhIjoiY2p4b3BpM2U2MDg1cTNicGY4dmUwMmozdCJ9.9f9O9xMvX9rcbth_4DR5og';

let address = process.argv[2];
if(!address){
    console.log('Error! Please provide an address.');
 
} else {
    console.log('One moment please...')
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location)
            console.log(forecastData)
        });
    });
}





