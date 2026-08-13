import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputRef = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Value: ${inputRef.current.value}`);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // Value will be a "YYYY-MM-DD" string
  };


  return (
    <>
      <section id="center">
        {/* <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div> */}
        <div>
          <h1>Form Voucher Seat Management</h1>
          <p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="crewName">Crew Name: </label>
              <input id="crewName" type="text" ref={inputRef} placeholder="Input Crew Name" />
              <br/>
              <label htmlFor="crewId">Crew ID: </label>
              <input id="crewId" type="text" ref={inputRef} placeholder="Input Crew Id" />
              <br/>
              <label htmlFor="flightNumber">Flight Number: </label>
              <input id="flightNumber" type="text" ref={inputRef} placeholder="Input Flight Number" />
              <br/>

              <label htmlFor="flightDate">Select Flight Date: </label>
              <input type="date" id="flightDate"
                name="flightDate"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <br/>

              <label htmlFor="aircraftType">Aircraft Type: </label>
              <select id="aircraftType" value={selectedValue} onChange={handleChange}>
                <option value="" disabled>-- Please select Aircraft Type--</option>
                <option value="atr">ATR</option>
                <option value="airBus320">Air Bus 320</option>
                <option value="boeing737Max">Boeing 737 Max</option>
              </select>
              <br/><br/>
              <button type="submit" className="counter">Submit</button>
            </form>

          
          </p>
        </div>
        
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
