import React from 'react';
import './Country.css';

const Country = (props) => {
    const countryHandler= props.countryHandler;
    return (
        <div className="country">
            <h1>This is {props.country.name.common}</h1> 
            <img className="flag" src={props.country.flags.svg} alt="" />
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p>
            <button onClick={()=> countryHandler(props.country)}>Add country</button> 
        </div>
    );
};

export default Country;