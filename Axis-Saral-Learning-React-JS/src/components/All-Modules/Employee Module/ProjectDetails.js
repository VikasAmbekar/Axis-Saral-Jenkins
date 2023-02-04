import React, { useEffect } from "react";
import ProjectNavigation from "./ProjectNavigation";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import axios from "axios";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  let projectdata = localStorage.getItem("Data");
  let projectData1 = JSON.parse(projectdata);
  console.log(projectData1);
  // console.log( JSON.parse(projectdata))

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);

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
      <ProjectNavigation />
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
            className="projectdetailnav"
            style={{ display: projectDetailsChange ? "block" : "none" }}
          >
            <Card.Title>Project Name: </Card.Title>
            <Card.Text> {projectData1.projectName} </Card.Text>
            <Card.Title>Project Id: </Card.Title>
            <Card.Text> {projectData1.projectId} </Card.Text>
            <Card.Title>Project Description: </Card.Title>
            <Card.Text>{projectData1.projectDescription}</Card.Text>
            <hr />
          </Card.Body>

          {projectData1.managerList.map((ele) => {
            return (
              <>
                <Card.Body
                  className="projectdetailnav"
                  style={{ display: managerDetailsChange ? "block" : "none" }}
                >
                  <Card.Title>Manager Name: </Card.Title>
                  <Card.Text> {ele.managerName} </Card.Text>
                  <Card.Title>Manager Id: </Card.Title>
                  <Card.Text> {ele.managerId} </Card.Text>
                  <Card.Title>Manager Designation: </Card.Title>
                  <Card.Text>{ele.designation}</Card.Text>
                  <Card.Title>Manager Email: </Card.Title>
                  <Card.Text>{ele.emailId}</Card.Text>
                  <Card.Title>Manager MobileNo: </Card.Title>
                  <Card.Text>{ele.mobileNo}</Card.Text>
                  <hr />
                </Card.Body>
              </>
            );
          })}

          {employeeData.map((ele) => {
            if (ele.projectId == projectData1.projectId) {
              console.log("I am Employee Id");

              return (
                <>
                  <Card.Body
                    className="projectdetailnav"
                    style={{
                      display: employeeDetailsChange ? "block" : "none",
                    }}
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
            }
          })}

          {projectData1.supportTeamList.map((ele) => {
            return (
              <>
                <Card.Body
                  className="projectdetailnav"
                  style={{ display: supportTeamDetails ? "block" : "none" }}
                >
                  <Card.Title>Employee Name: </Card.Title>
                  <Card.Text> {ele.employeeName} </Card.Text>
                  <Card.Title>Employee Id: </Card.Title>
                  <Card.Text> {ele.employeeId} </Card.Text>
                  <Card.Title>Employee Designation: </Card.Title>
                  <Card.Text>{ele.designation}</Card.Text>
                  <Card.Title>Employee Email: </Card.Title>
                  <Card.Text>{ele.emailId}</Card.Text>
                  <Card.Title>Employee MobileNo: </Card.Title>
                  <Card.Text>{ele.mobileNo}</Card.Text>
                  <hr />
                </Card.Body>
              </>
            );
          })}

          {projectData1.stakeholder.map((ele) => {
            return (
              <>
                <Card.Body
                  className="projectdetailnav"
                  style={{
                    display: stakeHolderDetailsChange ? "block" : "none",
                  }}
                >
                  <Card.Title>Stakeholder Name: </Card.Title>
                  <Card.Text> {ele.stakeholderName} </Card.Text>
                  <Card.Title>Stakeholder Id: </Card.Title>
                  <Card.Text> {ele.stakeholderId} </Card.Text>
                  <Card.Title>Stakeholder Position: </Card.Title>
                  <Card.Text>{ele.stakeholderPosition}</Card.Text>
                  <Card.Title>Stakeholder Email: </Card.Title>
                  <Card.Text>{ele.stakeholderEmail}</Card.Text>
                  <Card.Title>Stakeholder MobileNo: </Card.Title>
                  <Card.Text>{ele.stakeholderMobileNo}</Card.Text>
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

export default ProjectDetails;
