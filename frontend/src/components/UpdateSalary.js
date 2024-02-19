import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateEmployee() {
  const { id } = useParams();
  const [user, setUser] = useState({
    ename: "",
    elname:"",
    basic: "",
    bonus: "",
    ded: "",
    net: "",
    
    
  });

  const { ename,elname,basic,bonus,ded,net } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/employee/gett/${id}`);
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
      const response = await axios.put(`http://localhost:8070/employee/updates/${id}`, user);
      setUser(response.data);
      alert("Salary Details Updated")
      window.location = "/gets";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <p></p>
      <b><font size="4">Update Salary Details</font></b>
      <p></p>
      <form onSubmit={onSubmit}>

      <div className="form-group">
          <label htmlFor="type">First Name</label>
          <input
            type="text"
            className="form-control"
            id="ename"
            placeholder="Edit employee first name"
            name="ename"
            value={ename}
            onChange={(e) => onInputChange(e)}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="type"> Last Name</label>
          <input
            type="text"
            className="form-control"
            id="elname"
            placeholder="Edit employee last name"
            name="elname"
            value={elname}
            onChange={(e) => onInputChange(e)}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="title"> Basic</label>
          <input
            type="text"
            className="form-control"
            id="basic"
            placeholder="Edit employee age"
            name="basic"
            value={basic}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="First_Name">Bonus</label>
          <input
            type="text"
            className="form-control"
            id="bonus"
            placeholder="Edit employee gender"
            name="bonus"
            value={bonus}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title"> Deductions</label>
          <input
            type="text"
            className="form-control"
            id="ded"
            placeholder="Edit employee contact number"
            name="ded"
            value={ded}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title"> Net Salary</label>
          <input
            type="text"
            className="form-control"
            id="net"
            placeholder="Edit employee job title"
            name="net"
            value={net}
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