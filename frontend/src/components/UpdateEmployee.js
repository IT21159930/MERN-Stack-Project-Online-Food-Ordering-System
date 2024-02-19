import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateEmployee() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    lname:"",
    age: "",
    gender: "",
    contact: "",
    job: "",
    
    
  });

  const { name,lname,age,gender,contact,job } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/employee/get/${id}`);
        console.log(response.data);
        setUser(response.data.employee);
      } catch (error) {
        alert(error.message);
      }
    };
    loadUser();
  }, [id]);
  

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8070/employee/update/${id}`, user);
      setUser(response.data);
      alert("Employee Updated")
      window.location = "/";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <p></p>
      <b><font size="4">Update Employee</font></b>
      <p></p>
      <form onSubmit={onSubmit}>

      <div className="form-group">
          <label htmlFor="type">First Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            defaultValue={name}
            placeholder="Edit employee first name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="type"> Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Edit employee last name"
            name="lname"
            value={lname}
            onChange={(e) => onInputChange(e)}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="title"> Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Edit employee age"
            name="age"
            value={age}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="First_Name"> Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Edit employee gender"
            name="gender"
            value={gender}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title"> Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            placeholder="Edit employee contact number"
            name="contact"
            value={contact}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title"> Job Title</label>
          <input
            type="text"
            className="form-control"
            id="job"
            placeholder="Edit employee job title"
            name="job"
            value={job}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        
        <button type="submit" className="btn btn-warning">
        <i className="fas fa-edit"></i>&nbsp;Update Employee
        </button><p></p>
      </form>
    
    </div>
  );
}