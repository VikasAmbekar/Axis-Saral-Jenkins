import React, { useEffect, useState } from "react";
import ManagerProjectNav from "./ManagerProjectNav";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./ManagerEmployees.css";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";

const ManagerEmployees = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [page, setpage] = useState(true);
  const [emp, setemp] = useState();
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    let data = {
      recipient: emp.emailId,
      msgBody: message,
      subject: subject,
    };
    axios.post("http://localhost:8091/sendMail", data).then((response) => {
      // console.log(response);
      alert("Mail Sent.", window.location.reload());
    });
  };

  const subjectOC = (event) => {
    setSubject(event.target.value);
  };

  const messageOc = (event) => {
    setMessage(event.target.value);
  };

  function pageChange(ele) {
    setemp(ele);
    setpage(false);
  }

  const empsearch = (event) => {
    setEmployeeSearch(event.target.value);
    if (event.target.value == "") {
      axios.get("http://localhost:8085/employees").then((response) => {
        setEmployeeData(response.data);
      });
    } else {
      let newEmployeeData = employeeData.filter((e) => {
        return (
          e.employeeName.substring(0, employeeSearch.length).toLowerCase() ==
          employeeSearch.toLowerCase()
        );
      });
      setEmployeeData(newEmployeeData);
    }
  };

  const employeeClick = () => {
    let newEmployeeData = employeeData.filter((e) => {
      return (
        e.employeeName.substring(0, employeeSearch.length).toLowerCase() ==
        employeeSearch.toLowerCase()
      );
    });
    setEmployeeData(newEmployeeData);
  };

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);

  return (
    <>
      <ManagerProjectNav />
      <div className="employeesearch">
        <div className="input-group">
          <div className="employeeinput">
            <input
              type="search"
              className="form-control"
              placeholder="Employee name"
              onChange={empsearch}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary employeebtn"
            onClick={employeeClick}
          >
            <i className="fas fa-search"> Search </i>
          </button>
        </div>
      </div>
      {page == true ? (
        employeeData.map((ele) => {
          return (
            <>
              <section
                className="vh-100"
                style={{ backgroundColor: "#f4f5f7" }}
              >
                <MDBContainer className="py-4 h-500">
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="7" className="mb-1 mb-lg-0">
                      <MDBCard
                        className="mb-1"
                        style={{ borderRadius: ".5rem" }}
                      >
                        <MDBRow className="g-0">
                          <MDBCol
                            md="4"
                            className="gradient-custom text-center text-white"
                            style={{
                              borderTopLeftRadius: ".5rem",
                              borderBottomLeftRadius: ".5rem",
                            }}
                          >
                            <MDBCardImage
                              src={ele.profile}
                              alt="Avatar"
                              className="my-5"
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "5px",
                              }}
                              fluid
                            />
                            <MDBTypography tag="h5" style={{ color: "black" }}>
                              {ele.employeeName}
                            </MDBTypography>
                            <MDBCardText style={{ color: "black" }}>
                              {ele.designation}
                            </MDBCardText>
                            <MDBIcon far icon="edit mb-5" />
                          </MDBCol>
                          <MDBCol md="5">
                            <MDBCardBody className="p-4">
                              <MDBTypography tag="h6">
                                Employee Details
                              </MDBTypography>
                              <hr className="mt-0 mb-4" />
                              <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    Employee Id
                                  </MDBTypography>
                                  <MDBCardText className="text-muted"></MDBCardText>
                                  {ele.employeeId}
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6"></MDBTypography>
                                  <MDBCardText className="text-muted"></MDBCardText>
                                </MDBCol>
                              </MDBRow>

                              <MDBTypography tag="h6">
                                Contact Details
                              </MDBTypography>
                              <hr className="mt-0 mb-4" />
                              <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">Email</MDBTypography>
                                  <MDBCardText className="text-muted">
                                    {ele.emailId}
                                  </MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    Mobile Number
                                  </MDBTypography>
                                  <MDBCardText className="text-muted">
                                    {ele.mobileNo}
                                  </MDBCardText>
                                </MDBCol>
                              </MDBRow>

                              <div className="d-flex justify-content-start">
                                <a href="#!">
                                  <MDBIcon fab icon="facebook me-3" size="lg" />
                                </a>
                                <a href="#!">
                                  <MDBIcon fab icon="twitter me-3" size="lg" />
                                </a>
                                <a href="#!">
                                  <MDBIcon
                                    fab
                                    icon="instagram me-3"
                                    size="lg"
                                  />
                                </a>
                              </div>
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                id="btnlogin"
                                style={{ backgroundColor: "#AE275F" }}
                                onClick={() => pageChange(ele)}
                              >
                                Send Notification
                              </Button>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
            </>
          );
        })
      ) : (
        <>
          <div
            className="mx-auto gradient-custom mt-3 notificationButton"
            style={{
              maxWidth: "800px",
              height: "450px",
              border: "solid gray 1px",
              paddingBottom: "10%",
            }}
          >
            <div
              style={{ textAlign: "right" }}
              onClick={() => {
                setpage(true);
              }}
            >
              <CloseIcon />
            </div>
            <MDBRow className="pt-3 mx-3 innerCrad">
              <MDBCol md="3">
                <div
                  className="text-center"
                  style={{ marginTop: "50px", marginLeft: "10px" }}
                >
                  <MDBTypography tag="h3" style={{ color: "#495057" }}>
                    Notifications will be sent to {emp.employeeName}
                  </MDBTypography>
                </div>
              </MDBCol>
              <MDBCol md="9" className="justify-content-center">
                <MDBCard className="card-custom pb-4">
                  <MDBCardBody className="mt-0 mx-5">
                    <div className="text-center mb-3 pb-2 mt-3">
                      <MDBTypography tag="h4" style={{ color: "#495057" }}>
                        Send Notification
                      </MDBTypography>
                    </div>

                    <form className="mb-0">
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <label
                            for="exampleFormControlTextarea2"
                            style={{ color: "#495057" }}
                          >
                            Subject
                          </label>
                          <MDBInput type="text" onChange={subjectOC} />
                        </MDBCol>
                      </MDBRow>

                      <div class="form-group">
                        <label
                          for="exampleFormControlTextarea2"
                          style={{ color: "#495057" }}
                        >
                          Message
                        </label>
                        <textarea
                          class="form-control rounded-0"
                          id="exampleFormControlTextarea2"
                          rows="3"
                          onChange={messageOc}
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        id="btnlogin"
                        style={{ backgroundColor: "#AE275F" }}
                        onClick={sendMail}
                      >
                        Send
                      </Button>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </>
      )}
    </>
  );
};

export default ManagerEmployees;
