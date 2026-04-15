import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countriess.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    // console.log(countries.countries);
    const countriesName = countries.countries;

    const [visitedCountry, setVisitedCountry]=useState([]);
    const [visitedFlags,setViditedFlags]=useState([])

    const handleClickBtn=(name)=>{
        console.log(name);
        const newVisitedCountries=[...visitedCountry,name];
        setVisitedCountry(newVisitedCountries);
    }
    const handleVisitedFlags=(flag)=>{
        // console.log("Flag need to be added",flag);
        const newVisitedFlags=[...visitedFlags,flag];
        setViditedFlags(newVisitedFlags);
    }
    return (
        <div >
            <h2>All Countries: {countriesName.length}</h2>
            <h3>Total Visit Countries = {visitedCountry.length}</h3>
            <h3>Visited Flags = {visitedFlags.length}</h3>
            <div className='flags-container'>
                {visitedFlags.map((flags, index) => <img key={index} src={flags}></img>)}
            </div>
            <ol>
                {visitedCountry.map(visit => <li key={visit.ccn3.ccn3}>{visit.name.common}</li>)}

            </ol>
            <div className='countriess'>
                {
                    countriesName.map(name => <Country 
                        key={name.ccn3.ccn3} 
                        name={name}
                        handleVisitedFlags={handleVisitedFlags}
                        handleClickBtn={handleClickBtn}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;