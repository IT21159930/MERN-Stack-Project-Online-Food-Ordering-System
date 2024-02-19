import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    function getEmployees() {
      axios
        .get("http://localhost:8070/employee/gets")
        .then((res) => {
          setEmployees(res.data);
          setFilteredEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:8070/employee/deletes/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
      setFilteredEmployees(filteredEmployees.filter((employee) => employee._id !== id));
      window.alert("Salary details deleted successfully!");
    } catch (error) {
      alert(error.message);
    }
  }

  function calculateNetSalary(employee) {
    const netSalary = employee.basic + employee.bonus - employee.ded;
    return netSalary;
  }

  function generatePDF() {
    const doc = new jsPDF();
    const tableData = filteredEmployees.map((employee, index) => [
      index + 1,
      employee.ename,
      employee.elname,
      employee.basic,
      employee.bonus,
      employee.ded,
      calculateNetSalary(employee),
    ]);
    doc.autoTable({
      head: [
        [
          "Employee ID",
          "First Name",
          "Last Name",
          "Basic Salary",
          "Bonus",
          "Deductions",
          "Net Salary",
        ],
      ],
      body: tableData,
    });
    doc.save("employee-report.pdf");
  }

  function handleSearch(event) {
    const query = event.target.value;
    const filtered = employees.filter(
      (employee) =>
        employee.ename.toLowerCase().includes(query.toLowerCase()) ||
        employee.elname.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }

  return (
    <div className="container">
      <p></p>
      <button className="btn btn-success float-left" style={{ marginTop: "-60px", }}>
        <Link to="/addsalary" style={{ textDecoration: "none", color: "white" }}>
          Add Employee Salary
        </Link>
      </button>
      <p style={{ fontWeight: "bold", fontSize: "24px",marginTop:"90px" }}>Salary Details</p>
      <table class="table">
        <thead>
          <tr>
           
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Basic Salary</th>
            <th scope="col">Bonus</th>
            <th scope="col">Deductions</th>
            <th scope="col">Net Salary</th>
            <th scope="col">Action</th>
          
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,index) => (
            <tr>
              <th scope="row">{index+1}</th>
              <td>{employee.ename}</td>
              <td>{employee.elname}</td>
              <td>{employee.basic}</td>
              <td>{employee.bonus}</td>
              <td>{employee.ded}</td>
              <td>{calculateNetSalary(employee)}</td>
              <td>
              <Link to={`/updates/${employee._id}`} className="btn btn-warning">
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
    </div>
  )
}
