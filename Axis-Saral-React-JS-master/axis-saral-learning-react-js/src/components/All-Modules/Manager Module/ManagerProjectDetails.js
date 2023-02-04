import React, { useEffect } from "react";
import ManagerProjectNav from "./ManagerProjectNav";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import axios from "axios";
import "./ManagerProjectDetails.css";

const ManagerProjectDetails = () => {
  let managerData1 = localStorage.getItem("ManagerProjectData");
  let managerData2 = JSON.parse(managerData1);
  console.log(managerData2);

  const [employeeData, setEmployeeData] = useState([]);
  // Employees details
  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);

  //
  const [projectDetailsChange, setprojectDetailsChange] = useState(true);
  const [managerDetailsChange, setmanagerDetailsChange] = useState(false);
  const [employeeDetailsChange, setemployeeDetailsChange] = useState(false);
  const [supportTeamDetails, setsupportTeamDetails] = useState(false);
  const [stakeHolderDetailsChange, setstakeHolderDetailsChange] =
    useState(false);

  const projectDetails = () => {
    setprojectDetailsChange(true);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(false);
    setsupportTeamDetails(false);
  };

  const managerDetails = () => {
    setprojectDetailsChange(false);
    setmanagerDetailsChange(true);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(false);
    setsupportTeamDetails(false);
  };

  const employeeDetails = () => {
    setprojectDetailsChange(false);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(true);
    setstakeHolderDetailsChange(false);
    setsupportTeamDetails(false);
  };

  const stakeDetails = () => {
    setprojectDetailsChange(false);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(true);
    setsupportTeamDetails(false);
  };

  const supportteamDetails = () => {
    setsupportTeamDetails(true);
    setprojectDetailsChange(false);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(false);
  };

  return (
    <>
      <ManagerProjectNav />

      <div>
        <Card>
          <Card.Header>
            <Nav variant="tabs" className="project-nav">
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={projectDetails}>
                  PROJECT DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={managerDetails}>
                  MANAGER DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={employeeDetails}>
                  {" "}
                  EMPLOYEE DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={supportteamDetails}>
                  SUPPORT TEAM
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={stakeDetails}>
                  STAKEHOLDER DETAILS
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body
            style={{ display: projectDetailsChange ? "block" : "none" }}
            className="managerProjectDetails"
          >
            <Card.Title>Project Name: </Card.Title>
            <Card.Text> {managerData2.projectName} </Card.Text>
            <Card.Title>Project Id: </Card.Title>
            <Card.Text> {managerData2.projectId} </Card.Text>
            <Card.Title>Project Description: </Card.Title>
            <Card.Text>{managerData2.projectDescription}</Card.Text>
            <hr />
          </Card.Body>

          {managerData2.managerList.map((ele) => {
            return (
              <>
                <Card.Body
                  style={{ display: managerDetailsChange ? "block" : "none" }}
                  className="managerProjectDetails"
                >
                  <Card.Title>Manager Name: </Card.Title>
                  <Card.Text> {ele.managerName} </Card.Text>
                  <Card.Title>Manager Id: </Card.Title>
                  <Card.Text> {ele.managerId} </Card.Text>
                  <Card.Title>Manager Designation: </Card.Title>
                  <Card.Text>{ele.designation}</Card.Text>
                  <Card.Title>Manager EmailId: </Card.Title>
                  <Card.Text>{ele.emailId}</Card.Text>
                  <Card.Title>Manager MobileNo: </Card.Title>
                  <Card.Text>{ele.mobileNo}</Card.Text>
                  <hr />
                </Card.Body>
              </>
            );
          })}

          {employeeData.map((ele) => {
            if (ele.projectId == managerData2.projectId) {
              return (
                <>
                  <Card.Body
                    style={{
                      display: employeeDetailsChange ? "block" : "none",
                    }}
                    className="managerProjectDetails"
                  >
                    <Card.Title>Employee Name: </Card.Title>
                    <Card.Text> {ele.employeeName} </Card.Text>

                    <Card.Title>Employee Id: </Card.Title>
                    <Card.Text> {ele.employeeId} </Card.Text>

                    <Card.Title>Employee Designation: </Card.Title>
                    <Card.Text> {ele.designation} </Card.Text>

                    <Card.Title>Employee EmailId: </Card.Title>
                    <Card.Text> {ele.emailId} </Card.Text>

                    <Card.Title>Employee MobileNo: </Card.Title>
                    <Card.Text> {ele.mobileNo} </Card.Text>
                  </Card.Body>
                </>
              );
            }
          })}

          {managerData2.supportTeamList.map((ele) => {
            return (
              <>
                <Card.Body
                  style={{ display: supportTeamDetails ? "block" : "none" }}
                  className="managerProjectDetails"
                >
                  <Card.Title>Employee Name: </Card.Title>
                  <Card.Text> {ele.employeeName} </Card.Text>

                  <Card.Title>Employee Id: </Card.Title>
                  <Card.Text> {ele.employeeId} </Card.Text>

                  <Card.Title>Employee Designation: </Card.Title>
                  <Card.Text> {ele.designation} </Card.Text>

                  <Card.Title>Employee EmailId: </Card.Title>
                  <Card.Text> {ele.emailId} </Card.Text>

                  <Card.Title>Employee MobileNo: </Card.Title>
                  <Card.Text> {ele.mobileNo} </Card.Text>

                  <hr />
                </Card.Body>
              </>
            );
          })}

          {managerData2.stakeholder.map((ele) => {
            return (
              <>
                <Card.Body
                  style={{
                    display: stakeHolderDetailsChange ? "block" : "none",
                  }}
                  className="managerProjectDetails"
                >
                  <Card.Title>Stakeholder Name: </Card.Title>
                  <Card.Text> {ele.stakeholderName} </Card.Text>

                  <Card.Title>Stakeholder Id: </Card.Title>
                  <Card.Text> {ele.stakeholderId} </Card.Text>

                  <Card.Title>Stakeholder Position: </Card.Title>
                  <Card.Text> {ele.stakeholderPosition} </Card.Text>

                  <Card.Title>Stakeholder EmailId: </Card.Title>
                  <Card.Text> {ele.stakeholderEmailId} </Card.Text>

                  <Card.Title>Stakeholder MobileNo: </Card.Title>
                  <Card.Text> {ele.stakeholderMobileNo} </Card.Text>

                  <hr />
                </Card.Body>
              </>
            );
          })}
        </Card>
      </div>
    </>
  );
};

export default ManagerProjectDetails;
