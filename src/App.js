import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const shortid = require("shortid");
const random = require("random-name");

function App() {
  const [studentList, setList] = useState([
    {
      name: "Tapas Adhikary",
      id: shortid.generate(),
    },
    {
      name: "Omotola Shogunle",
      id: shortid.generate(),
    },
  ]);

  const addItem = () => {
    const newItem = {
      name: random(),
      id: shortid.generate(),
    };
    setList((items) => [newItem, ...items]);
  };

  return (
    <div className="row">
      <div className="col">
        <header>Student List (Key=index)</header>
        <div></div>
        <table>
          <thead>
            <tr>
              <th>Index No.</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col">
        <header>Student List (Key=id)</header>

        <table>
          <thead>
            <tr>
              <th>Index No.</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => {
              return (
                <tr key={student.id}>
                  <td>{index}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>

                  <td>
                    <input type="text" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={addItem} style={{ backgroundColor: "green" }}>
          Add New Student
        </button>
      </div>
    </div>
  );
}

export default App;
