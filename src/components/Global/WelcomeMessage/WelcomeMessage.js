import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";


const WelcomeMessage = (props) => {
    const [weather, setWeather] = useState({
        emoji: null,
        overcast: null
    });

    const getWeather = (props) => {
        let url = `http://api.openweathermap.org/data/2.5/weather?id=3979770&?units=metric&APPID=${env.OW_KEY}`;
        axios
            .get(url)
            .then(response => {
                setWeather({ overcast: response.data.weather[0].description });
            })
            .catch(error => {
                console.log(error);
            })

            switch (weather.overcast) {
                case 'clear sky': {
                    setWeather({emoji: '☀️'});
                    break;
                }
                case 'scattered clouds': {
                    setWeather({emoji: '🌤'});
                    break;
                }
                case 'overcast clouds': {
                    setWeather({emoji: '🌥'});
                    break;
                }
                case 'light rain': {
                    setWeather({emoji: '🌦'});
                    break;
                }
                case 'broken clouds': {
                    setWeather({emoji: '☁️'})
                    break;
                }
                case 'moderate rain': {
                    setWeather({emoji: '🌧'});
                    break;
                }
                case 'rain': {
                    setWeather({emoji: '⛈'});
                    break;
                }
                default: {
                    setWeather({emoji: '🌤'});
                    break;
                }
            }
        }

    useEffect(() => {
        getWeather();
    }, [weather.emoji]);

    return (<div><h1>{weather.emoji}</h1></div>);
}

export default WelcomeMessage;