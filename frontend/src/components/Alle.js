import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [job, setJob] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8070/employee/get/${id}`)
      .then((response) => {
        console.log(response);
        const post = response.data.employee;
        setName(post.name);
        setlName(post.lname);
        setAge(post.age);
        setGender(post.gender);
        setContact(post.contact);
        setJob(post.job);
        setDate(post.date);
        setTime(post.time);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function validateForm() {
    return name !== "" && lname !== "" && age !== "" && gender !== "" && contact !== "" && job !== "" && date !== "" && time !== "";
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
        job,
        date,
        time
      };
      axios
        .post("http://localhost:8070/employee/adds", newEmployee)
        .then(() => {
          alert("Attendance Submitted");
          window.location = "/";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Please fill in all fields");
    }
  }

  return (
    <div>
  <p style={{ fontWeight: "bold", fontSize: "22px" }}>
  Attendance Form
</p>

    <form onSubmit={sendData}>
      <table className="table">
        <tbody>
          <tr>
            <th>First Name:</th>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Last Name:</th>
            <td>
              <input
                type="text"
                name="lname"
                value={lname}
                onChange={(e) => setlName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>
              <input
                type="text"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>
              <input
                type="text"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Contact Number:</th>
            <td>
              <input
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Job Title:</th>
            <td>
              <input
                type="text"
                name="job"
                value={job}
                onChange={(e)=> setJob(e.target.value)}

              />
            </td>
          </tr>
          <tr>
  <th>Date:</th>
  <td>
    <input
      type="date"
      name="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
  </td>
</tr>

          <tr>
            <th>Time:</th>
            <td>
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
  );
}


