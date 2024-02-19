import React, { useState } from "react";
import axios from "axios";

export default function AddEmployee() {
  const [ename, setEname] = useState("");
  const [elname, setElname] = useState("");
  const [basic, setBasic] = useState("");
  const [bonus, setBonus] = useState("");
  const [ded, setDed] = useState("");
  const [net, setNet] = useState("");
  const [enameError, setEnameError] = useState("");
  const [elnameError, setElnameError] = useState("");
  const [basicError, setBasicError] = useState("");
  const [bonusError, setBonusError] = useState("");
  const [dedError, setDedError] = useState("");
  const [netError, setNetError] = useState("");

  function validateForm() {
    let isValid = true;
    if (ename.trim() === "") {
      setEnameError("First Name is required");
      isValid = false;
    }
    if (elname.trim() === "") {
      setElnameError("Last Name is required");
      isValid = false;
    }
    if (basic.trim() === "") {
      setBasicError("Basic Salary is required");
      isValid = false;
    } else if (isNaN(basic)) {
      setBasicError("Must be a number");
      isValid = false;
    }
    if (bonus.trim() === "") {
      setBonusError("");
    } else if (isNaN(bonus)) {
      setBonusError("Must be a number");
      isValid = false;
    }
    if (ded.trim() === "") {
      setDedError("");
    } else if (isNaN(ded)) {
      setDedError("Must be a number");
      isValid = false;
    }
    if (net.trim() === "") {
      setNetError("");
    } else if (isNaN(net)) {
      setNetError("Must be a number");
      isValid = false;
    }
    return isValid;
  }

  function sendData(e) {
    e.preventDefault();
    if (validateForm()) {
      const newEmployee = {
        ename,
        elname,
        basic,
        bonus: bonus || "0",
        ded: ded || "0",
        net: net || "0",
      };
      axios
        .post("http://localhost:8070/employee/addsalary", newEmployee)
        .then(() => {
          alert("Salary Added");
          window.location = "/gets";
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <p></p>
          <b>
            <font size="4">Add Salary</font>
          </b>
          &nbsp;
          <p></p>
          <label htmlFor="ename">Employee First Name</label>
          <input
            type="text"
            className={`form-control ${enameError ? "is-invalid" : ""}`}
            id="ename"
            placeholder="Enter employee first name"
            value={ename}
            onChange={(e) => {
              setEname(e.target.value);
              setEnameError("");
            }}
          />
          {enameError && (
            <div className="invalid-feedback">{enameError}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="elname">Employee Last Name</label>
          <input
            type="text"
            className={`form-control ${elnameError ? "is-invalid" : ""}`}
            id="elname"
            placeholder="Enter employee last name "
            value={elname}
            onChange={(e) => {
              setElname(e.target.value);
              setElnameError("");
              
            }}
          />
          {elnameError && <div className="invalid-feedback">{elnameError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="basic">Basic Salary</label>
          <input
            type="text"
            className={`form-control ${basicError ? "is-invalid" : ""}`}
            id="basic"
            placeholder="Enter basic salary"
            value={basic}
            onChange={(e) => {
              setBasic(e.target.value);
              setBasicError("");
             
            }}
          />
          {basicError && <div className="invalid-feedback">{basicError}</div>}
        </div>

        
        <div className="form-group">
          <label htmlFor="bonus">Bonus</label>
          <input
            type="text"
            className={`form-control ${bonusError ? "is-invalid" : ""}`}
            id="bonus"
            placeholder="Enter bonus"
            value={bonus}
            onChange={(e) => {
              setBonus(e.target.value);
              setBonusError("");
              
            }}
          />
          {bonusError && <div className="invalid-feedback">{bonusError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="ded">Deductions</label>
          <input
            type="text"
            className={`form-control ${dedError ? "is-invalid" : ""}`}
            id="ded"
            placeholder="Enter deductions"
            value={ded}
            onChange={(e) => {
              setDed(e.target.value);
              setDedError("");
              
            }}
          />
          {dedError && <div className="invalid-feedback">{dedError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="net">Net Salary</label>
          <input
            type="text"
            className={`form-control ${netError ? "is-invalid" : ""}`}
            id="net"
            placeholder="Enter net salary"
            value={net}
            onChange={(e) => {
              setNet(e.target.value);
              setNetError("");
              
            }}
          />
          {netError && <div className="invalid-feedback">{netError}</div>}
        </div>

       

        <button
          type="submit"
          className="btn btn-success"
          
        >
          Submit
        </button>
        &nbsp;<p></p>
      </form>
    </div>
  );
}
