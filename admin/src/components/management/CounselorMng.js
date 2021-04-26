import React, { useState, useEffect } from "react";
import "../adminStyles/AdminStyles.css";
import { Link } from "react-router-dom";

const CounselorMng = () => {
  const [arrayData, setArrData] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const response = await fetch("http://localhost:3001/getData");
      const data = await response.json();
      setArrData(data);

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main>
      <div className="main__container">
        <h1 style={{ paddingBottom: 15, color: "#343a40" }}>
          Counselors Management
        </h1>
        <h3 style={{ paddingBottom: 40 }}>
          Dashboard <span style={{ paddingLeft: 10, paddingRight: 10 }}>/</span>
          <span style={{ color: "#888" }}>Counselors</span>
        </h3>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th style={{ paddingRight: 100 }} scope="col">
                Avatar
              </th>
              <th style={{ paddingRight: 130 }} scope="col">
                Name
              </th>
              <th style={{ paddingRight: 170 }} scope="col">
                Email
              </th>
              <th style={{ paddingRight: 100 }} scope="col">
                Education
              </th>
              <th style={{ paddingRight: 200 }} scope="col">
                Ratings
              </th>
              <th style={{ paddingRight: 230 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {arrayData.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={`data:image/jpeg;base64,${user.imageData}`}
                    height="50"
                    style={{ borderRadius: "50%" }}
                    width="50"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.education}</td>
                <td>⭐⭐⭐⭐⭐</td>
                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    class="btn btn-primary mr-2"
                  >
                    View
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    class="btn btn-outline-primary mr-2"
                  >
                    Edit
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    class="btn btn-danger"
                    onClick={() => {}}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default CounselorMng;
