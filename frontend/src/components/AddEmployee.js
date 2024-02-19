import React, { useState } from "react";
import axios from "axios";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [job, setJob] = useState("");
  const [nameError, setNameError] = useState("");
  const [lnameError, setlNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [contactError, setContactError] = useState("");
  const [jobError, setJobError] = useState("");
  const [formError, setFormError] = useState("");

  function validateForm() {
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }
    if (lname.trim() === "") {
      setlNameError("Last Name is required");
      isValid = false;
    }
    if (age.trim() === "") {
      setAgeError("Age is required");
      isValid = false;

    } else if (isNaN(age)) {
      setAgeError("Age must be a number");
      isValid = false;
    }
    else if (isNaN(age)) {
      setAgeError("Age must be a number");
      isValid = false;
    }
    if (gender.trim() === "") {
      setGenderError("Gender is required");
      isValid = false;
    }
    if (contact.trim() === "") {
      setContactError("Contact Number is required");
      isValid = false;
    }
    else if (isNaN(contact)) {
      setContactError("Age must be a number");
      isValid = false;
    }
    
    if (job.trim() === "") {
      setJobError("Job Title is required");
      isValid = false;
    }
    return isValid;
  }

  function sendData(e) {
    e.preventDefault();
    if (validateForm()) {
      const newEmployee = {
        name,
        lname,
        age,
        gender,
        contact,
        job
      };
      axios
        .post("http://localhost:8070/employee/add", newEmployee)
        .then(() => {
          alert("Employee Added");
          window.location = "/";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setFormError("Please fill in all fields");
    }
  }
  if(age >20 || age<50){
    console.log("efse")
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          
          <p></p>
          <b><font size="4">Add Employee</font></b>
          &nbsp;
          <p></p>
          <label htmlFor="name">Employee First Name</label>
          <input
            type="text"
            className={`form-control ${nameError ? "is-invalid" : ""}`}
            id="name"
            placeholder="Enter employee first name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
              setFormError("");
            }}
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="lname">Employee Last Name</label>
          <input
            type="text"
            className={`form-control ${lnameError ? "is-invalid" : ""}`}
            id="lname"
            placeholder="Enter employee last name "
            value={lname}
            onChange={(e) => {
              setlName(e.target.value);
              setlNameError("");
              setFormError("");
            }}
          />
          {lnameError && <div className="invalid-feedback">{lnameError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Employee Age</label>
          <input
            type="text"
            className={`form-control ${ageError ? "is-invalid" : ""}`}
            id="age"
            placeholder="Enter employee age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setAgeError("");
              setFormError("");
            }}
          />
          {ageError && <div className="invalid-feedback">{ageError}</div>}
        </div>

        
        <div className="form-group">
          <label htmlFor="gender">Employee Gender</label>
          <input
            type="text"
            className={`form-control ${genderError ? "is-invalid" : ""}`}
            id="gender"
            placeholder="Enter employee gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              setGenderError("");
              setFormError("");
            }}
          />
          {genderError && <div className="invalid-feedback">{genderError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="contact">Employee Contact Number</label>
          <input
            type="text"
            className={`form-control ${contactError ? "is-invalid" : ""}`}
            id="contact"
            placeholder="Enter employee contact number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              setContactError("");
              setFormError("");
            }}
          />
          {contactError && <div className="invalid-feedback">{contactError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="job">Employee Job Title</label>
          <input
            type="text"
            className={`form-control ${jobError ? "is-invalid" : ""}`}
            id="job"
            placeholder="Enter employee job title"
            value={job}
            onChange={(e) => {
              setJob(e.target.value);
              setJobError("");
              setFormError("");
            }}
          />
          {jobError && <div className="invalid-feedback">{jobError}</div>}
        </div>

        {formError && <div className="alert alert-danger">{formError}</div>}

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
