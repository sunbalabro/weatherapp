import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Search from '../../Components/Search'
import WeatherCard from '../../Components/WeatherCard'
import axios from "axios"
export default function Home() {
    const [defaultCity, setDefaultCity] = useState("Karachi")
    const [cityData, setCityData] = useState()
    useEffect(() => {
        async function getData() {
           try{
            
            const fetchLocation = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`)
             const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${fetchLocation.data.coord.lat}&lon=${fetchLocation.data.coord.lon}&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2`)
            const data = await weatherData
            console.log(data.data)
            setCityData(data.data)
           } 
           catch{
               alert("Invalid City Name")
           }
        }
        getData()
    }, [defaultCity])

    return (
        <div>
            <Header />
            <Search setDefaultCity={setDefaultCity} />
            <WeatherCard cityData={cityData} name={defaultCity} />
        </div>
    )
}
