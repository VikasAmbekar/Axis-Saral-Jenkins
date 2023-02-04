import Card from "react-bootstrap/Card";
import "./AdminProject.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";

function AdminProject() {
  const [projectData, setProjectData] = useState([]);
  const navigate = useNavigate();

  const projectSubmit = (ele1) => {
    console.log(ele1);
    //  let eleState = Array.from(...ele)
    localStorage.setItem("AdminProject", JSON.stringify(ele1));
    navigate("/admin-project-details");
  };

  useEffect(() => {
    axios.get("http://localhost:8085/projects").then((response) => {
      setProjectData(response.data);
    });
  }, []);

  return (
    <>
      <AdminNavigation />
      <button
        className="adminproadd"
        onClick={() => {
          navigate("/admin-project-add");
        }}
      >
        Manage Projects
      </button>
      <div className="divflex">
        {projectData.map((ele) => {
          return (
            <>
              <div className="projectCard">
                <Card>
                  <Card.Header className="cardHeader">
                    {" "}
                    {ele.projectName}{" "}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{ele.projectId}</Card.Title>
                    <Card.Title>M.ID: {ele.managerId}</Card.Title>
                    <Card.Text>
                      For more detailed description, Click below.
                    </Card.Text>
                    <button
                      className="projectButton"
                      onClick={() => {
                        projectSubmit(ele);
                      }}
                    >
                      {" "}
                      Go To Details{" "}
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AdminProject;
