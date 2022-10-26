import { DateRange } from "react-date-range";
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './App.css';

function App() {

  const apiKey = 'df59aef67a6c142dcc8842c4570bee14';

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);

  const [city, setCity] = useState('');


  async function getCoords() {
    let response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',&appid=' + apiKey)
    let coordinateData = await response.json()
    .then(coordinateData => {
      //console.log(coordinateData);
      //alert(coordinateData[0].name + " " + coordinateData[0].lat + " " + coordinateData[0].lon);
      getWeather(coordinateData[0].lat, coordinateData[0].lon);
    })
  };

  async function getWeather(latValue, lonValue) {
    const lat = latValue;
    const long = lonValue;
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + apiKey)
    let weatherData = await response.json()
    .then(weatherData => {
      console.log(weatherData);
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>
            .
          </h2>
          <h4>
            Choose your trip date range:
          </h4>
          <DateRange
            onChange={item => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          <form>
            <TextField 
            id="standard-basic" 
            label="City Name" 
            variant="standard" 
            value={city}
            onChange={(a) => {setCity(a.target.value)}}
            />
            <Button variant="contained" onClick={getCoords}>Submit</Button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
