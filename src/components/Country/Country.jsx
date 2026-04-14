import React, { useState } from 'react';
import './country.css'



const Country = ({ name, handleClickBtn }) => {
    

    const [visited, setVisited] = useState(false);

    const handleClick = () => {
        setVisited(!visited);
        handleClickBtn(name);
    }
    
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{name.name.official}</h3>
            <img src={name.flags.flags.png} alt={name.flags.flags.alt} />
            <p>Population : {name.population.population}</p>
            <p>Capital : {name.capital.capital}</p>
            <p>Language : {name.languages.languages.eng} and {name.languages.languages.jam}</p>
            <button onClick={handleClick}>
                {visited ? "Visited" : "Not Visited"};
            </button>
        </div>
    );
};

export default Country;