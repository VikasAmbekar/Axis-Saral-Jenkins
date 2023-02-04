import Card from "react-bootstrap/Card";
import ProjectNavigation from "./ProjectNavigation";
import "./Project.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Project() {
  const [projectData, setProjectData] = useState([]);
  const navigate = useNavigate();

  const projectSubmit = (ele1) => {
    console.log(ele1);
    //  let eleState = Array.from(...ele)
    localStorage.setItem("Data", JSON.stringify(ele1));
    navigate("/project-details");
  };

  useEffect(() => {
    axios.get("http://localhost:8085/projects").then((response) => {
      setProjectData(response.data);
    });
  }, []);

  return (
    <>
      <ProjectNavigation />
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

export default Project;
