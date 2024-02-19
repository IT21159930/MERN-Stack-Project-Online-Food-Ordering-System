
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const tableRef = useRef(null);

  useEffect(() => {
    function getEmployees() {
      axios
        .get("http://localhost:8070/employee/")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:8070/employee/delete/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
      window.alert("Employee deleted successfully!");
    } catch (error) {
      alert(error.message);
    }
  }

  const filteredEmployees = employees.filter((employee) =>
    employee.job.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function generatePDF() {
    const doc = new jsPDF();
    const tableData = filteredEmployees.map((employee, index) => [
      index + 1,
      employee.name,
      employee.lname,
      employee.age,
      employee.gender,
      employee.contact,
      employee.job
    ]);
    doc.autoTable({
      head: [["Employee ID", "First Name", "Last Name", "Age", "Gender", "Contact Number", "Job Title"]],
      body: tableData
    });
    doc.save("employee-report.pdf");
  }

  return (
    <div className="container">
      <nav
        className="navbar  justify-content-end"
        style={{ marginTop: "40px" }}
      >
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by name"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>

      <p></p>
      <button
        className="btn btn-success float-left"
        style={{ marginTop: "-100px" }}
      >
        <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
          Create New Employee
        </Link>
      </button>

      <p style={{ fontWeight: "bold", fontSize: "24px", marginTop: "-50px" }}>
        All Employees
      </p>

      <table
        className="table table-hover"
        style={{ marginTop: "30px" }}
        ref={tableRef}
      >
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Job Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={`/get/${employee._id}`} style={{textDecoration:'none'}}>
                {employee.name}
                </a></td>
              <td>{employee.lname}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.contact}</td>
              <td>{employee.job}</td>
              <td>
                <Link to={`/update/${employee._id}`} className="btn btn-warning">
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </Link>
                &nbsp;
                <a
                  className="btn btn-danger"
                  href="#"
                  onClick={() => deleteUser(employee._id)}
                >
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
  className="btn btn-success float-left"
  style={{ marginTop: "-20px", marginLeft: "0px" }}
  onClick={generatePDF}
>
  Generate Report
</button>
<p></p>
<p></p>
    </div>
  );
}


