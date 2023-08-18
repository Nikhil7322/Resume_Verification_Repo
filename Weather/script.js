const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bf513814a8mshd5795af03a193e9p1bd65fjsn0bedab158cb9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// try {
// 	const response =  fetch(url, options);
// 	const result =  response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(url + city, options)
        .then(res => res.json()) // parse response as JSON
        .then((Response) => {

            console.log(Response)

            cloud_pct.innerHTML = Response.cloud_pct
            temp.innerHTML = Response.temp
            //feels_like.innerHTML = Response.feels_like
            humidity.innerHTML = Response.humidity
            min_temp.innerHTML = Response.min_temp
            max_temp.innerHTML = Response.max_temp
            wind_speed.innerHTML = Response.wind_speed
            wind_degrees.innerHTML = Response.wind_degrees
            sunrise.innerHTML = Response.sunrise
            sunset.innerHTML = Response.sunset

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)

}
)

getWeather("Delhi")
