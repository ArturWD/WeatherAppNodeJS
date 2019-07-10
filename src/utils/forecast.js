const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/2d622dbabd389f47f283ca5fff8d8c12/${longitude},${latitude}`;

    request({url, json: true}, (error, response) => {
        if(error){
            callback('No internet connection');
        }else if(response.body.error){
            callback('Unable to find location');
        }else{
            callback(undefined, `${response.body.daily.data[0].summary} temp ${response.body.currently.temperature} precip ${response.body.currently.precipProbability}`);
        }   
    });
}

module.exports = forecast;