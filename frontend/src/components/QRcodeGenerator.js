import React, { useState } from "react";
import qrcode from "qrcode";

const QRcodeGenerator = () => {
  const [text, setText] = useState("");
  const [imageQR, setImageQR] = useState();

  const generateQRCode = async () => {
    const image = await qrcode.toDataURL(text);
    setImageQR(image);
  };

  const handleDownloadQRCode = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageQR;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container mx-auto mt-2 text-center">
      <div className="row">
        <h2 className="col-sm-12 badges bg-danger text-center text-white"style={{ fontSize: "22px" }}>
          QR Code Generator
        </h2>
      </div>
      <div className="row">
     

      </div>
      <div className="row">
        <input
          type="text"
          className="col-sm-5 m-2"
          value={text}
          placeholder="Enter text for generating QR code"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="col-sm-2 btn btn-success m-1" onClick={generateQRCode}>
          Generate QR Code
        </button>
        {imageQR && (
          <div className="col-sm-12">
            <div className="card mx-auto my-3" style={{ maxWidth: "500px" }}>
              <div className="card-header m-1 rounded text-center">
                <h3>QR Code Image</h3>
              </div>
              <div className="card-body text-center">
                <img src={imageQR} width="42%" alt="qr code pic is here" />
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success"
                  onClick={handleDownloadQRCode}
                >
                  Download QR Code
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRcodeGenerator;
