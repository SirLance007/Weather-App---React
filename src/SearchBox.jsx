import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import InfoBox from './InfoBox.jsx';

export default function SearchBox({updateInfo}) {

  const API_KEY = "108dc1ddf509a6bba09baef8e2394653";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getweatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    let result = {
      city : city,
      temp : jsonResponse.main.temp - 273,
      tempMin : jsonResponse.main.temp_min - 273,
      tempMax : jsonResponse.main.temp_max - 273,
      humidity : jsonResponse.main.humidity,
      feelsLike : jsonResponse.main.feels_like,
    }
    console.log(result);
    return result;
  };

  let [city,setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  }
  let handleSumbit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getweatherInfo();
    updateInfo(newInfo);
  }

  return (
    <div>
      <h1>Search for the weather</h1>
      <form onClick={handleSumbit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange= {handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Search
        </Button>
      </form>
    </div>
  );
}
