import { DateRange } from "react-date-range";
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './App.css';

function App() {

  const apiKey = '';

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);

  const [city, setCity] = useState('');

  function getCoords() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',&appid=' + apiKey)
    .then(response => {
      return response.json();
    })
  };

  function getWeather() {
    const lat = response.lat;
    const long = response.lon;
    fetch('https://history.openweathermap.org/data/2.5/history/city?lat=' + lat + '&lon=' + lon + '&type=hour&start={start}&end={end}&appid=' + apiKey)
    .then(response => {
      console.log(response.json());
      return response.json();
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>
            Weather to Pack or Not?
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
