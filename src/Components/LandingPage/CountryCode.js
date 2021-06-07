import React from 'react'
import './contrycode.style.css'
import code from './Code'
export default function CountryCode() {
    return (
        <>
            {/* {console.log(code.countries.forEach(country=>{console.log(country.code,country.name)}))} */}
            <div className="header-container">
                <p className="text-center d-flex justify-content-around">C O  U  N  T  R  Y<br></br>C  O  D  E  </p>
            </div>
            <div className="extension-container">
                {code.countries.map(country=>{
                    return(
                    <p className="text-center">{country.code} {country.name}<hr></hr></p>
                    )
                })}
            </div>
        </>
    )
}
