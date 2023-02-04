import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import axios from "axios";
import "./JoiningLetter.css";

const JoiningLetter = () => {
  const navigate = useNavigate();
  const [joiningLetterData, setJoiningLetterData] = useState([]);

  let joiningdata1 = localStorage.getItem("LoginData");
  let joiningdata2 = JSON.parse(joiningdata1);
  console.log(joiningdata2);

  useEffect(() => {
    axios.get("http://localhost:8087/joiningLetters").then((response) => {
      setJoiningLetterData(response.data);
    });
  }, []);

  const joinletterdownload = () => {
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

      {joiningLetterData.map((ele) => {
        if (ele.employeeId == joiningdata2.employeeId) {
          return (
            <>
              <p className="main-heading1"> LETTER OF JOINING</p>
              <div className="address">
                <p>General Manager</p>
                <p>Human Resource Department</p>
              </div>
              <div className="subject">
                <p>Subject: Joining Letter from Employer</p>
              </div>
              <div className="para1">
                <p>Dear {joiningdata2.employeeName},</p>
                <p>
                  This letter is related to your job offer letter, We are glad
                  to offer you the job opportunity for the position{" "}
                  {joiningdata2.designation} at our company. You will be joining
                  the company from date {ele.dateOfJoining}.
                </p>
                <p>
                  Kindly contact us by replying to this email for any
                  information required.
                </p>
                <p>Looking forward to working with you.</p>
                <p>Yours faithfully,</p>
                <p className="bold">HR Manager, Axis Bank</p>
              </div>
              <div className="btn">
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  style={{ backgroundColor: "#AE275F" }}
                  onClick={joinletterdownload}
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

export default JoiningLetter;
