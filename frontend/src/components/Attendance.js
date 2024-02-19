import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    function getEmployees() {
      axios
        .get("http://localhost:8070/employee/getss")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getEmployees();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "ID",
      "Name",
      "Last Name",
      "Age",
      "Gender",
      "Contact Number",
      "Job",
      "Date",
      "Time",
    ];
    const tableRows = [];

    employees.forEach((employee, index) => {
      const employeeData = [
        index + 1,
        employee.name,
        employee.lname,
        employee.age,
        employee.gender,
        employee.contact,
        employee.job,
        employee.date,
        employee.time,
      ];
      tableRows.push(employeeData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Employee Attendance Report", 14, 15);
    doc.save("employeeAttendanceReport.pdf");
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.date.includes(searchDate)
  );

  return (
    <div className="container">
      <p></p>
      <button onClick={generatePDF} className="btn btn-success">Generate PDF</button>

      <p></p>
      <p style={{fontWeight: 'bold', fontSize: '22px'}}>Attendance Details</p>

      <div className="mb-3">
        <label htmlFor="searchDate" className="form-label">Search by Date:</label>
        <input
          type="text"
          className="form-control"
          id="searchDate"
          placeholder="YYYY-MM-DD"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Job</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{employee.name}</td>
              <td>{employee.lname}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.contact}</td>
              <td>{employee.job}</td>

              <td>{employee.date}</td>
              <td>{employee.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
