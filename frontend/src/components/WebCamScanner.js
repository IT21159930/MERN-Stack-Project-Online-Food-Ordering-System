import React, { useState } from "react";
import qrcode from "qrcode";
import QrReader from "react-qr-reader";

const WebCamScanner = () => {
    const [webcamResult,setwebcamResult]= useState();

    const webcamError = (error) => {
        if (error){
            console.log(error);
        }
    };
    
    const webcamScan = (result) => {
        if(result){
            setwebcamResult(result);
            const regex = new RegExp('^(http|https)://');
            if (regex.test(result)) {
              window.open(result, '_blank');
            }
        }
    }
    



return(
    <div className="card col-sm-4 m-2 mx-auto">
                    <div className="card-header m-1 rounded text-center">
                        <h3>Webcam Image</h3>
                    </div>
                    <div className="card-body text-center">
                        <QrReader
                            
                            delay={300}
                            onError={webcamError}
                            onScan={webcamScan}
                            legacyMode={false}
                            facingMode={"user"}
                            />
                    </div>
                    <div className="card-footer rounded mb-1">
                        <h6>WebCam Result: {webcamResult}</h6>
                    </div>
                </div>

)
};

export default WebCamScanner;