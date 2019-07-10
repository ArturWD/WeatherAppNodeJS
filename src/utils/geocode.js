const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXJ0dXJ3ZCIsImEiOiJjanhzeGs2b3UwNWUyM2NwZGc2NXE0N2V6In0.yRT7OdcIL3tXJ3koQ03bNA&limit=1';

    request({url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect');
        } else if(response.body.features.length === 0){
            callback('Unable to find location');
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;