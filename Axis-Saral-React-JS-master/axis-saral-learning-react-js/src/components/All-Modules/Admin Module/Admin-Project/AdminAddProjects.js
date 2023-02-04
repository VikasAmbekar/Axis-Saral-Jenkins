import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";

// import "./AdminAdd.css";
import AdminNavigation from "../AdminNavigation";
import "./AdminAddProjects.css";

const AdminAddProjects = () => {
  const projectNameInputRef = useRef();
  const projectIdInputRef = useRef();
  const projectDescInputRef = useRef();
  const managerIdInputRef = useRef();
  const managerNameInputRef = useRef();
  const designationInputRef = useRef();
  const emailInputRef = useRef();
  const mobileNoInputRef = useRef();
  const passwordInputRef = useRef();
  const [enteredProjectName, setenteredProjectName] = useState("");
  const [enteredProjectId, setenteredProjectId] = useState("");
  const [enteredProjectDesc, setenteredProjectDesc] = useState("");
  const [enteredManagerId, setenteredManagerId] = useState("");
  const [enteredManagerName, setenteredManagerName] = useState("");
  const [enteredDesignation, setenteredDesignation] = useState("");
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredMobileNo, setenteredMobileNo] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");

  const projectNameOC = (event) => {
    setenteredProjectName(event.target.value);
  };

  const projectIdOC = (event) => {
    setenteredProjectId(event.target.value);
  };

  const projectDescOC = (event) => {
    setenteredProjectDesc(event.target.value);
  };

  const projectManagerIdOC = (event) => {
    setenteredManagerId(event.target.value);
  };
  const managerNameOC = (event) => {
    setenteredManagerName(event.target.value);
  };
  const designationOC = (event) => {
    setenteredDesignation(event.target.value);
  };
  const emailOC = (event) => {
    setenteredEmail(event.target.value);
  };
  const mobileNoOC = (event) => {
    setenteredMobileNo(event.target.value);
  };
  const passwordOC = (event) => {
    setenteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const projectData = {
      projectName: enteredProjectName,
      projectId: enteredProjectId,
      managerId: enteredManagerId,
      managerId: enteredManagerId,
      projectDescription: enteredProjectDesc,
      managerList: [],
    };

    const baseURL = "http://localhost:8085/project/add";
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => {
        alert("Project added.");
        window.location.reload();
      })
      .catch((error) => {
        alert("error");
      });

    projectNameInputRef = "";
    projectIdInputRef = "";
    projectDescInputRef = "";
    managerIdInputRef = "";
    managerNameInputRef = "";
    designationInputRef = "";
    emailInputRef = "";
    mobileNoInputRef = "";
    passwordInputRef = "";

    event.target.reset();
  };

  const deleteHandler = (event) => {
    event.preventDefault(); //prevent default behaviour of submit button
    const enteredProjectId = projectIdInputRef.current.value;

    const projData = {
      projectId: enteredProjectId,
    };

    const baseURL = `http://localhost:8085/project/delete/${enteredProjectId}`;
    fetch(baseURL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projData),
    })
      .then((response) => {
        alert("Project deleted", window.location.reload());
      })
      .catch((error) => {
        alert("error");
      });
    projectIdInputRef = "";

    event.target.reset();
  };

  const [addChange, setaddChange] = useState(true);

  const [deleteChange, setdeleteChange] = useState(false);

  const add = () => {
    setaddChange(true);

    setdeleteChange(false);
  };

  const del = () => {
    setaddChange(false);

    setdeleteChange(true);
  };

  return (
    <>
      <AdminNavigation />
      <div className="adminProjectAdd">
        <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={add}>
                  ADD PROJECT
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="projectclass" onClick={del}>
                  {" "}
                  DELETE PROJECT
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body
            style={{ display: addChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={submitHandler}>
              <div>
                <label>Project Name</label>
                <input
                  type="text"
                  required
                  ref={projectNameInputRef}
                  onChange={projectNameOC}
                />
              </div>
              <div>
                <label>Project ID</label>
                <input
                  type="text"
                  required
                  ref={projectIdInputRef}
                  onChange={projectIdOC}
                />
              </div>
              <div>
                <label>Project Description</label>
                <input
                  type="text"
                  required
                  ref={projectDescInputRef}
                  onChange={projectDescOC}
                />
              </div>
              <div>
                <label>Manager ID</label>
                <input
                  type="text"
                  required
                  ref={managerIdInputRef}
                  onChange={projectManagerIdOC}
                />
              </div>

              <div>
                <button className="frm-submit">Add Project</button>
              </div>
            </form>
            <hr />
          </Card.Body>

          <Card.Body
            style={{ display: deleteChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={deleteHandler}>
              <div>
                <label>Project Id</label>
                <input
                  type="text"
                  required
                  id="theatre"
                  ref={projectIdInputRef}
                />
              </div>
              <div>
                <button className="frm-submit">Delete Product</button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminAddProjects;
