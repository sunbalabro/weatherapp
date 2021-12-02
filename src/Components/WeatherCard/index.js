import React from 'react'
import Box from '@mui/material/Box';
import Loader from '../Loader';
import CountUp from "react-countup"
export default function WeatherCard({ cityData, name }) {
    const date = new Date();
    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const celsiusConverter = (value) => {
        const result = Math.round(value - 273.15);
        return result
    }

    if (!cityData) {
        return <Loader />
    }
    const dataIcon0 = cityData.daily[0].weather[0].icon;
    const icon0 = `https://openweathermap.org/img/wn/${dataIcon0}@2x.png`;

    const dataIcon1 = cityData.daily[1].weather[0].icon;
    const icon1 = `https://openweathermap.org/img/wn/${dataIcon1}@2x.png`;

    const dataIcon2 = cityData.daily[2].weather[0].icon;
    const icon2 = `https://openweathermap.org/img/wn/${dataIcon2}@2x.png`;

    const dataIcon3 = cityData.daily[3].weather[0].icon;
    const icon3 = `https://openweathermap.org/img/wn/${dataIcon3}@2x.png`;

    const dataIcon4 = cityData.daily[4].weather[0].icon;
    const icon4 = `https://openweathermap.org/img/wn/${dataIcon4}@2x.png`;

    const dataIcon5 = cityData.daily[5].weather[0].icon;
    const icon5 = `https://openweathermap.org/img/wn/${dataIcon5}@2x.png`;
    return (
        <div className="WeatherCard">
            <h1>{name}</h1>
            <Box className="wcard">
                <h1>{date.getDate() + " " + month[date.getMonth()]}</h1>
               <div style={{display:'flex',jstifyContent:'center',margin:'0 auto',alignItems:'center',width:'300px'}}>
                <img src={icon0} alt="weather1" width="200px" />
               <h1 style={{fontSize:'50px'}}><CountUp end={celsiusConverter(cityData.current.temp)} duration={1} /><sup>°c</sup></h1>
               </div>
                <h1>{cityData.current.weather[0].description}</h1>
            </Box>
                <h1>Daily</h1>
            <div className="nextdays">
                <Box className="wcard">
                    <h3>{date.getDate() + 1 + " " + month[date.getMonth()]}</h3>
                    <h3><CountUp end={celsiusConverter(cityData.daily[1].temp.day)} duration={1} /><sup>°c</sup></h3>
                    <img src={icon1} alt="weather2" />
                    <h3>{cityData.daily[1].weather[0].description}</h3>
                </Box>
                <Box className="wcard">
                    <h3>{date.getDate() + 2 + " " + month[date.getMonth()]}</h3>
                    <h3><CountUp end={celsiusConverter(cityData.daily[2].temp.day)} duration={1} /><sup>°c</sup></h3>
                    <img src={icon2} alt="weather3" />
                    <h3>{cityData.daily[2].weather[0].description}</h3>
                </Box>
                <Box className="wcard">
                    <h3>{date.getDate() + 3 + " " + month[date.getMonth()]}</h3>
                    <h3><CountUp end={celsiusConverter(cityData.daily[3].temp.day)} duration={1} /><sup>°c</sup></h3>
                    <img src={icon3} alt="weather4" />
                    <h3>{cityData.daily[3].weather[0].description}</h3>
                </Box>
                <Box className="wcard">
                    <h3>{date.getDate() + 4 + " " + month[date.getMonth()]}</h3>
                    <h3><CountUp end={celsiusConverter(cityData.daily[4].temp.day)} duration={1} /><sup>°c</sup></h3>
                    <img src={icon4} alt="weather5" />
                    <h3>{cityData.daily[4].weather[0].description}</h3>
                </Box>
                <Box className="wcard">
                    <h3>{date.getDate() + 5 + " " + month[date.getMonth()]}</h3>
                    <h3><CountUp end={celsiusConverter(cityData.daily[5].temp.day)} duration={1} /><sup>°c</sup></h3>
                    <img src={icon5} alt="weather6" />
                    <h3>{cityData.daily[5].weather[0].description}</h3>
                </Box>
            </div>

        </div>
    )
}
