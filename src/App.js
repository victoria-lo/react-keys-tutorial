import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const shortid = require("shortid");
const random = require("random-name");

function App() {
  const [studentList1, setList1] = useState([
    {
      name: "Victoria Lo",
      id: shortid.generate(),
    },
    {
      name: "Omotola Shogunle",
      id: shortid.generate(),
    },
  ]);
  const [studentList2, setList2] = useState([
    {
      name: "Victoria Lo",
      id: shortid.generate(),
    },
    {
      name: "Omotola Shogunle",
      id: shortid.generate(),
    },
  ]);

  const deleteItemByIndex = (index) => {
    setList1(studentList1.slice((index, 1)));
  };
  const deleteItemById = (id) => {
    setList2(studentList2.filter((item) => item.id !== id));
  };

  const addItem = () => {
    const newItem = {
      name: random(),
      id: shortid.generate(),
    };
    setList1((items) => [...items, newItem]);
  };
  const addItem2 = () => {
    const newItem = {
      name: random(),
      id: shortid.generate(),
    };
    setList2((items) => [...items, newItem]);
  };

  return (
    <div className="row">
      <div className="col">
        <header>Student List (Key=index)</header>
        <div>
          <button onClick={addItem} style={{ backgroundColor: "green" }}>
            Add New Student (Key=index)
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Index No.</th>
              <th>Student ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {studentList1.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        deleteItemByIndex(index);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col">
        <header>Student List (Key=id)</header>
        <div>
          <button onClick={addItem2} style={{ backgroundColor: "green" }}>
            Add New Student (Key=id)
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Index No.</th>
              <th>Student ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {studentList2.map((student, index) => {
              return (
                <tr key={student.id}>
                  <td>{index}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        deleteItemById(student.id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
