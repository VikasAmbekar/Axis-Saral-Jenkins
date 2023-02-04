import React from "react";
import AdminNavigation from "./AdminNavigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
export default function AddProject() {
  const [projectid, setprojectid] = useState("");
  const [projectName, setprojectName] = useState("");
  const [managerId, setmanagerId] = useState("");
  const [text, settext] = useState("");

  function projectId1(event) {
    console.log(event.target.value);
    setprojectid(event.target.value);
  }

  function projectName1(event) {
    console.log(event.target.value);
    setprojectName(event.target.value);
  }

  function managerId1(event) {
    console.log(event.target.value);
    setmanagerId(event.target.value);
  }

  function textArea1(event) {
    console.log(event.target.value);
    settext(event.target.value);
  }

  function addproject(event) {
    event.preventDefault();
    let ele = {
      projectId: projectid,
      projectName: projectName,
      managerId: managerId,
      projectDescription: text,
      stakeholder: [],
      supportTeamList: [],
      managerList: [],
    };

    axios
      .post("http://localhost:8085/project/add", ele)
      .then((res) => console.log(res));
  }
  return (
    <>
      <AdminNavigation />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Project Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Project Id"
            onChange={projectId1}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Project Name"
            onChange={projectName1}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Manager Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Manager Id"
            onChange={managerId1}
          />
        </Form.Group>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Project Discription</span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            onChange={textArea1}
          ></textarea>
        </div>
        <Button variant="primary" type="submit" onClick={addproject}>
          Submit
        </Button>
      </Form>
    </>
  );
}
