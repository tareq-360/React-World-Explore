import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countriess.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    // console.log(countries.countries);
    const countriesName = countries.countries;

    const [visitedCountry, setVisitedCountry]=useState([]);

    const handleClickBtn=(name)=>{
        console.log(name);
        const newVisitedCountries=[...visitedCountry,name];
        setVisitedCountry(newVisitedCountries);
    }
    return (
        <div >
            <h2>All Countries: {countriesName.length}</h2>
            <h3>Total Visit Countries = {visitedCountry.length}</h3>
            <ol>
                {visitedCountry.map(visit => <li key={visit.ccn3.ccn3}>{visit.name.common}</li>)}
            </ol>
            <div className='countriess'>
                {
                    countriesName.map(name => <Country 
                        key={name.ccn3.ccn3} 
                        name={name}
                        handleClickBtn={handleClickBtn}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;