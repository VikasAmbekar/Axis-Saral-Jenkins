import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import "./ManagerNewsFeed.css";

import ManagerNavigation from "../ManagerProjectNav";

const ManagerNewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [sh, setsh] = useState(false);
  const [shows, setshows] = useState("Comments");
  const setCommentData = (e) => {
    setCommentInput(e.target.value);
  };

  let newsEmpData1 = localStorage.getItem("managerLogin");
  let newsEmpData2 = JSON.parse(newsEmpData1);
  console.log(newsEmpData2);
  const show1 = () => {
    setsh(sh == false ? true : false);
    setshows(shows == "Comments" ? "Close Comments" : "Comments");
  };
  const addComment = (ele) => {
    console.log(ele);
    if (commentInput == "") {
      alert("Please enter comment");
    } else {
      let data = {
        message: commentInput,
        name: newsEmpData2.managerName,
      };
      axios
        .post(`http://localhost:8088/news/${ele.newsFeedId}/comment/add`, data)
        .then((response) => response);

      document.getElementById("form1").value = "";
      axios.get("http://localhost:8088/news").then((response) => {
        setNewsData(response.data);
      });

      alert("Comment is Added Successfully.", window.location.reload());
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8088/news").then((response) => {
      setNewsData(response.data);
    });
  }, []);

  return (
    <>
      <ManagerNavigation />
      <div className="managernewsheading">
        <h1> News Feed </h1>
      </div>
      <div className="employeefeed">
        {newsData.map((ele) => {
          return (
            <>
              <div>
                <MDBContainer className="py-5">
                  <MDBCard style={{ maxWidth: "42rem" }}>
                    <MDBCardBody>
                      <div className="d-flex mb-3">
                        <a href="#!">
                          <img
                            src="https://mir-s3-cdn-cf.behance.net/projects/404/5979167.546a2078ea298.jpg"
                            className="border rounded-circle me-2"
                            alt="Avatar"
                            style={{ height: "40px" }}
                          />
                        </a>
                        <div>
                          <a className="text-dark mb-0">
                            <strong>Axis Saral</strong>
                          </a>
                        </div>
                      </div>
                      <div>
                        <p>{ele.newsDescription}</p>
                      </div>
                    </MDBCardBody>
                    <MDBRipple
                      className="bg-image hover-overlay ripple rounded-0"
                      rippleTag="div"
                      rippleColor="light"
                    >
                      <img src={ele.newsImageUrl} className="w-100" />
                      <a>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <hr class="my-0" />
                    <MDBCardBody className="pb-0">
                      <div class="md-form">
                        <input
                          type="text"
                          id="form1"
                          class="form-control"
                          placeholder="Add Comment Here..."
                          style={{ border: "solid 1px" }}
                          onChange={setCommentData}
                        />
                      </div>
                    </MDBCardBody>
                    <MDBCardBody className="pb-0">
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        id="btnlogin"
                        style={{ backgroundColor: "#AE275F" }}
                        onClick={() => {
                          addComment(ele);
                        }}
                      >
                        Add Comment
                      </Button>
                    </MDBCardBody>
                    <MDBCardBody>
                      <p onClick={show1}>{shows}</p>
                      <div style={{ display: sh ? "block" : "none" }}>
                        {ele.comments?.map((ele1) => {
                          console.log(ele1);
                          return (
                            <>
                              <div className="d-flex mb-3">
                                <a>
                                  <img
                                    src="https://storage.needpix.com/thumbs/blank-profile-picture-973460_1280.png"
                                    className="border rounded-circle me-2"
                                    alt="Avatar"
                                    style={{ height: "40px" }}
                                  />
                                </a>
                                <div>
                                  <div className="bg-light rounded-3 px-3 py-1">
                                    <a className="text-dark mb-0">
                                      <strong>{ele1.name}</strong>
                                    </a>
                                    <a className="text-muted d-block">
                                      <small>{ele1.message}</small>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ManagerNewsFeed;
