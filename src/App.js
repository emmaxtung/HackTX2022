import logo from './logo.svg';
import { DateRange } from "react-date-range";
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './App.css';


function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);
  
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
            Input city name:
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <Button variant="contained">Submit</Button>
            <br/>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
