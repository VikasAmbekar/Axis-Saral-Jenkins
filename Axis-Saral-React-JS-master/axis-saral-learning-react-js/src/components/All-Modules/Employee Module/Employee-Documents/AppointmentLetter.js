import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";
import "./AppointmentLetter.css";
import axios from "axios";

const AppointmentLetter = () => {
  const navigate = useNavigate();

  const [apptletter, setApptLetter] = useState([]);

  let appointmentdata1 = localStorage.getItem("LoginData");
  let appointmentdata2 = JSON.parse(appointmentdata1);
  console.log(appointmentdata2);

  useEffect(() => {
    axios.get("http://localhost:8087/appointments").then((response) => {
      setApptLetter(response.data);
    });
  }, []);

  const apptletterdownload = () => {
    window.print();
  };

  return (
    <>
      <Button
        type="submit"
        halfWidth
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        id="btnlogin"
        style={{ backgroundColor: "#AE275F" }}
        onClick={() => {
          navigate("/employee-documents");
        }}
      >
        <ArrowBackIosNewTwoToneIcon /> Back
      </Button>
      {apptletter.map((ele) => {
        if (ele.employeeId == appointmentdata2.employeeId) {
          return (
            <>
              <p className="main-heading"> LETTER OF APPOINTMENT</p>

              <div className="leftSide">
                <p className="title">Date: {ele.appointmentDate}</p>
                <p className="title">Name: {appointmentdata2.employeeName}</p>
              </div>
              <div className="letter-area">
                <p className="name"> Dear {appointmentdata2.employeeName},</p>
                <p className="name">
                  {" "}
                  Appointed as {appointmentdata2.designation}
                </p>
                <p className="para">
                  We refer to your recent interview for the above position and
                  are pleased to inform you that we are offering you the
                  position with our company effective from {ele.appointmentDate}{" "}
                  under the following terms:
                </p>

                <p className="title1">
                  Salary: The salary offered to the candidate during the
                  interview
                </p>
                <p className="title1">
                  Probationary Period: The salary offered to the candidate
                  during the interview
                </p>

                <p className="title1">
                  Working Hours: The salary offered to the candidate during the
                  interview
                </p>

                <p className="title1">
                  Leave Policy: The salary offered to the candidate during the
                  interview
                </p>

                <p className="left-bottom">{appointmentdata2.employeeName}</p>
                <p className="right-bottom">Axis Fintech</p>
                <br />
                <p>Signature</p>
              </div>
              <div className="btn">
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  style={{ backgroundColor: "#AE275F" }}
                  onClick={apptletterdownload}
                >
                  DOWNLOAD
                </Button>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default AppointmentLetter;
