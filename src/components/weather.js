import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';
import "./weather.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
    //const APIKEY="7435de3c9894777f354984adb5671424";
    const [form, setForm] = useState({
        city: ''
    })
    const [weather, setWeather] = useState([]);

    async function weatherData(e) {
        e.preventDefault();
        if (form.city === '') {
            alert('Please Eneter City Name');
        }
        else {
            const data = await fetch('http://api.weatherapi.com/v1/forecast.json?key=95d83eeffcf64b0ba4370557210501&q=Guntur&days=1')
                //const data = await fetch('http://api.openweathermap.org/data/2.5/weayther?q=${form.city}&APPID=${APIKEY}')
                .then(res => res.json())
                .then(data => data);
            setWeather({ data: data });
        }
    }
    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "city") {
            setForm({ ...form, city: value })
        }
    };
    return (
        <div className="weather">
            <span className="title"> Weather App</span><br />
            <form>
                <input type="text" onChange={e => handlechange(e)} name="city" id="city" placeholder="Enter Your City" required />&nbsp;
                <button onClick={(e) => weatherData(e)} className="btn btn-primary">Check Weather</button>
            </form>
            {/* <div>{console.log(weather.data)}</div> */}
            {
                weather.data !== undefined ?
                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>
                    : null
            }
        </div>
    )
}

export default Weather;