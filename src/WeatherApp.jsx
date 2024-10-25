import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        temp: 25.6,
        tempMax: 24.5,
        tempMin: 23.8,
        humidity: 50,
        feelsLike: 24.9,
        city: "New York",
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
      }
    return(
        <div>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}