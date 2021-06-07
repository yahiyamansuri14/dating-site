import React, { useState } from 'react'
import './phoneotp.style.css'
import OtpInput from 'react-otp-input'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useHistory } from 'react-router-dom'
export default function PhoneOtp() {
    const history = useHistory();
    const [otp, setOtp] = useState(0)
    const [number, setNumber] = useState()
    var style = {
        'width': '50px',
        'height': '50px',
        'border': '2px solid black',
        'border-radius': '10px'
    }
    return (
        <>
            <div className="row m-0">
                <div className="col-md-3"></div>
                <div className="col-md-6 main-container">
                    <p className="get-otp">Get Otp</p>
                    <p>Enter Your<br></br>Phone Number</p>
                    <div className="d-flex justify-content-start mt-5">
                        <PhoneInput
                            placeholder="Enter phone number"
                            defaultCountry="IN"
                            value={number}
                            onChange={setNumber} 
                            className="btn-num"
                        />
                        {/* <input
                        type="text"
                        className="form-control btn-ext"
                        placeholder="IND (+91)"
                        onClick={()=>{setClick(true)}}
                    ></input>   
                    
                    <input
                        type="text"
                        className="form-control btn-num"
                        placeholder="000-000-0000"
                    ></input>  */}
                        <br></br>

                    </div>
                    <p className="mt-5">Enter OTP</p>
                    <OtpInput
                        className="mt-2"
                        inputStyle={style}
                        numInputs={6}
                        separator={<span className="seprator"> - </span>}
                        value={otp}
                        onChange={() => {
                            setOtp(otp)
                            console.log(otp)
                        }}
                    />
                    <button
                        className="btn btn-default mt-5"
                        onClick={()=>history.push("/intro")}
                    >Continue</button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}
