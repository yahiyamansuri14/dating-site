import React from 'react'
import './landingpage.style.css'
import { useHistory } from 'react-router-dom'
export default function LandingPage() {
    let history = useHistory()
    return (
        <>
            <div className="main-container">
                <div className="row m-0">
                <div className="col-md-3"></div>
                <div className="col-md-6">
        <p className="heading-text"><span>M</span>atch <span>B</span>y <span>P</span>rofession...
                    </p>
                    <button
                        className="btn btn-default first-button"
                    >Signin with Linkedin</button>
                    <button
                        className="btn btn-default"
                    >Signin with Google</button>
                    <button
                        className="btn btn-default"
                        onClick={()=>{history.push('/otp')}}
                    >Continue with Phone</button>
                    <p className="footer-text">By signin you agree with our terms & conditions...</p>
                </div>
                <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}
