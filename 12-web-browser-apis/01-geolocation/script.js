// getCurrentPosition()
function curSuccess(pos) {
    const coords = pos.coords;
    
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Withing: ${coords.accuracy} meters`);

    console.log(pos);
}

function curError(error) {
    console.log(`Error is: ${error.code} - ${error.message}`);
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


// navigator.geolocation.getCurrentPosition(curSuccess, curError, options);




// watchPosition()

const target = {
    latitude: 44.4203008,
    longitude: 26.1029888
}



function watchSuccess(pos) {
    const coords = pos.coords;
    if(target.latitude === coords.latitude && target.longitude === coords.latitude) {
        console.log('You Have Reached your destination');

        navigator.geolocation.clearWatch(id);
    }
}

function watchError(error) {
    console.log(`Error is: ${error.code} - ${error.message}`);
}

const watchOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);


