import React, { useState } from 'react'
import './introduction.style.css'
import DatePicker from 'react-date-picker'
import Select from 'react-select'
import { useHistory } from 'react-router-dom'
export default function Introduction() {
    const history = useHistory()
    const [date, setDate ] = useState(new Date())
    const [gender, setGender ] = useState([])
    const options= [
        { value:'Male', label:'Male'},
        { value:'FeMale', label:'FeMale'}
    ]
    return (
        <>
        <div className="container">
            <div className="row m-0">
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-3">
                    <p className="get-otp mt-5">Basics</p>
                    <p>Introduce<br></br>Yourself</p>
                    <input
                        placeholder="First Name"
                        className="input-box"
                        type="text"
                    ></input><br></br>
                    <input
                        placeholder="Email"
                        className="input-box"
                        type="text"
                    ></input><br></br>
                    <Select
                        placeholder="Select"
                        className="input-box"
                        value={gender}
                        onChange={()=>setGender()}
                        options={options}
                    ></Select>
                    <br></br>
                    <div className="col-md-2">
                    <DatePicker
                        className=""
                        value={date}
                        onChange={()=>setDate(date)}
                    /><br></br>
                    </div>
                    <input
                        placeholder="Location"
                        className="input-box"
                        type="text"
                    ></input><br></br>
                    <button
                        className="btn btn-default mt-3"
                        onClick={()=>history.push("/intro-image")}
                    >Continue</button>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>
        </>
    )
}
