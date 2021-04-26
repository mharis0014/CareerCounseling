import React, { useState, useEffect } from "react";
import "../adminStyles/AdminStyles.css";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.svg";

const Appointments = () => {
  const [arrayData, setArrData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dialogue, setDialogue] = useState(true);

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
          Appointments
        </h1>
        <h3 style={{ paddingBottom: 40 }}>
          Dashboard <span style={{ paddingLeft: 10, paddingRight: 10 }}>/</span>
          <span style={{ color: "#888" }}>Appointments</span>
        </h3>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th style={{ paddingRight: 10 }} scope="col">
                {" "}
              </th>
              <th style={{ paddingRight: 100 }} scope="col">
                Date/Time
              </th>
              <th style={{ paddingRight: 100 }} scope="col">
                Session/Type
              </th>
              <th style={{ paddingRight: 250 }} scope="col">
                Counselor
              </th>
              <th style={{ paddingRight: 200 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {arrayData.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={`data:image/jpeg;base64,${user.imageData}`}
                    height="60"
                    style={{ borderRadius: "50%" }}
                    width="60"
                  />
                </td>
                <td>
                  <div>
                    <p>{user.name}</p>
                    <p style={{ color: "#888" }}>#{user.id}</p>
                    <p
                      style={{
                        fontStyle: "italic",
                        textDecorationLine: "underline",
                        color: "blue",
                      }}
                    >
                      {user.email}
                    </p>
                  </div>
                </td>
                <td>
                  <div>
                    <p>11 Nov 2019</p>
                    <p
                      style={{
                        color: "blue",
                      }}
                    >
                      10.00 AM
                    </p>
                  </div>
                </td>
                <td>Basic/Standard/Prime</td>
                <td>
                  <div className="row">
                    <img
                      src={Avatar}
                      height="60"
                      style={{ borderRadius: "50%", paddingRight: 15 }}
                      width="60"
                    />
                    <div>
                      <p>{user.name}</p>
                      <p style={{ color: "#888" }}>#{user.id}</p>
                      <p
                        style={{
                          fontStyle: "italic",
                          textDecorationLine: "underline",
                          color: "blue",
                        }}
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    class="btn btn-primary mr-2"
                    onClick={() => setVisible(!visible)}
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

export default Appointments;
