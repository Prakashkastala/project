import React, { useEffect } from 'react';
import axios from 'axios';
 function App() {
  let[search,setSearch]=React.useState('');
  let[city,setCity]=React.useState(''); 
  let[temperature,setTemperature]=React.useState('');
  let[humidity,setHumidity]=React.useState('');
let[wind,setWind]=React.useState('');
  
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const api_key = 'f00c38e0279b7bc85480c3fe775d518c';

  useEffect(() => {
    axios.get(url, {
      params: {
        q: search,
        appid: api_key,
        units: 'metric'
      }
    })
      .then(response => {
        setCity(response.data.name);
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
      })
      .catch(error => {
        console.log(error);
        setCity('City not found');
      });
  }, [search]);

  return (
  <>
  <div className='wheather'>
    <div className='wheatherBox'>
  <h1>Wheather App</h1>
  <div>
  <input type='text' placeholder='Search a city' className='input' value={search} onChange={(e) => setSearch(e.target.value)}></input>
  </div>
  <img src="https://cdn2.iconfinder.com/data/icons/weather-682/1024/sun_sunny-512.png" className='sun' alt=' ' ></img>
  <div>
{
  temperature && city && (
    <div>
      <p className='temp'>Temp:{search ? temperature : ''}°c</p>
      <p className='city'>City:{search ? city : ''}</p>
      <div className='details'> 
      <p className='humidity'>Humidity:{search ? humidity : ''}</p>
      <p className='wind'>Wind:{search ? wind : ''}</p>
      </div>
    </div>
  )
}
  </div>
  </div>
   </div>
  </>
  
    )}
 
export default  App;



