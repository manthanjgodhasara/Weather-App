
window.addEventListener("load", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            let city = document.querySelector(".city");
            let country = document.querySelector(".country-name");
            let latitude = document.querySelector(".latitude");
            let longitude = document.querySelector(".longitude");
            let temperature = document.querySelector(".temperature");
            let description = document.querySelector(".description");
            let feel = document.querySelector(".feel");
            let humidity = document.querySelector(".humidity");
            let pressure = document.querySelector(".pressure");
            let visibility = document.querySelector(".visibility");
            let wind_speed = document.querySelector(".wind-speed");

            
            let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=8efcba7df82ca82925aa702f4def9c2c`;

            fetch(api)
                .then(function(response){
                    return response.json();
                })
                .then(function(data) {
                    console.log(data);

                    city.textContent = data.name;
                    country.textContent = data.sys.country;
                    longitude.textContent = "Longitude: " + data.coord.lon;
                    latitude.textContent = "Latitude: " + data.coord.lat;
                    temperature.textContent = data.main.temp +" °C";
                    description.textContent = data.weather[0].main; 
                    feel.textContent = "Feels like: " + data.main.feels_like + " °C";
                    humidity.textContent = "Humidity: " + data.main.humidity + " %";
                    pressure.textContent = "Pressure: " + data.main.pressure + " hPa";
                    visibility.textContent = "Visibility: " + data.visibility + " m";
                    wind_speed.textContent = "Wind speed: " + data.wind.speed + " kmph";
                });
        });
    }
});

let search = document.querySelector(".search");
let city_name = document.querySelector(".city-name");

search.addEventListener("click", function(){

    let api = `http://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&units=metric&APPID=8efcba7df82ca82925aa702f4def9c2c`;

    if(city_name.value!=""){
        let city = document.querySelector(".city");
        let country = document.querySelector(".country-name");
        let latitude = document.querySelector(".latitude");
        let longitude = document.querySelector(".longitude");
        let temperature = document.querySelector(".temperature");
        let description = document.querySelector(".description");
        let feel = document.querySelector(".feel");
        let humidity = document.querySelector(".humidity");
        let pressure = document.querySelector(".pressure");
        let visibility = document.querySelector(".visibility");
        let wind_speed = document.querySelector(".wind-speed");

        let close = document.querySelector("#close");
        let alert = document.querySelector("#alert-box");
        let container = document.querySelector(".container");
        

        fetch(api)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                
                if(data.message != "city not found"){
                    console.log(data);

                    city.textContent = data.name;
                    country.textContent = data.sys.country;
                    longitude.textContent = "Longitude: " + data.coord.lon;
                    latitude.textContent = "Latitude: " + data.coord.lat;
                    temperature.textContent = data.main.temp + " °C";
                    description.textContent = data.weather[0].main;
                    feel.textContent = "Feels like: " + data.main.feels_like + " °C";
                    humidity.textContent = "Humidity: " + data.main.humidity + " %";
                    pressure.textContent = "Pressure: " + data.main.pressure + " hPa";
                    visibility.textContent = "Visibility: " + data.visibility + " m";
                    wind_speed.textContent = "Wind speed: " + data.wind.speed + " kmph";
                }

                else{
                    alert.style.visibility = "visible";
                    container.style.visibility = "hidden";
                    

                    close.addEventListener("click", function () {
                        alert.style.visibility = "hidden";
                        container.style.visibility = "visible";
                    });
                }
            })
    }
    
});