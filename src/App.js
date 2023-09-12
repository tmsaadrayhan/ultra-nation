import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [countries, setCountries]= useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(data=>data.json())
    .then(data=>setCountries(data))
    .catch(error => console.log(error))
  },[])
  const countryHandler = (country) => {
    setCart([...cart, country]);
  }
  return (
    <div className="App">
      <h1>Countries:{countries.length}</h1>
      <h4>Countries added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
        countries.map(country =>  <Country countryHandler= {countryHandler} country= {country} key= {country.cca3}></Country>)

        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
