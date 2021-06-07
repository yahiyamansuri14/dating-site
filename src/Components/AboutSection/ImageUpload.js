import React from 'react'
import ImageUploader from 'react-images-upload'
import { useHistory } from 'react-router-dom'
export default function ImageUpload() {
    const history = useHistory()
    var btnStyle = {
        'background-color':'rgba(117, 1, 194, 0.753)',
        'color':'white'
    }
    return (
        <>
            <div className="row m-0">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className="get-otp mt-5">Photos</p>
                    <p className="mt-3">coz It's all about<br></br>Presentation</p>
                <ImageUploader  
                       labelStyles={{'color':'#7501c2'}}
                       buttonStyles={btnStyle}
                       withIcon={true}
                       /* onChange={onDrop} */
                       imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                       maxFileSize={5242880000}
                       withPreview={true}
                   />
                <button
                    className="mt-3"
                    style={btnStyle}
                    onClick={()=>{history.push("/intro-height")}}
                >Continue</button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}
