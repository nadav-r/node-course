const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


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





