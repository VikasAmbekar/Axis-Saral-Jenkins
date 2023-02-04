import * as React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import AdminNavigation from "../AdminNavigation";
import "./AdminNotification.css";
import Button from "@mui/material/Button";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function AdminNotification() {
  const [empData, setEmpData] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const subjectOC = (event) => {
    setSubject(event.target.value);
  };

  const messageOc = (event) => {
    setMessage(event.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();

    empData.map((ele) => {
      // console.log(ele.emailId);
      let data = {
        recipient: ele.emailId,
        msgBody: message,
        subject: subject,
      };

      axios.post("http://localhost:8091/sendMail", data).then((response) => {
        console.log(response);
      });
    });

    alert("Mail Sent To All Employees.", window.location.reload());
  };

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmpData(response.data);
    });
  }, []);

  return (
    <>
      <AdminNavigation />

      <div
        className="mx-auto gradient-custom mt-4 notificationButton"
        style={{
          maxWidth: "800px",
          height: "450px",
          border: "solid gray 1px",
          paddingBottom: "10%",
          
        }}

      >
        <MDBRow className="pt-3 mx-3 innerCrad">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "50px", marginLeft: "10px" }}
            >
              <MDBTypography tag="h3" style={{ color: "#495057" }}>
                Notifications will be sent to all employees
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
  );
}
