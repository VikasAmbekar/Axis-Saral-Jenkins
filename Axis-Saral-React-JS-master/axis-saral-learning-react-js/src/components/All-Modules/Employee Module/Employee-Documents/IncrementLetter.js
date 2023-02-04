import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import axios from "axios";
import "./IncrementLetter.css";

const IncrementLetter = () => {
  const navigate = useNavigate();
  const [incrementLetterData, setIncrementLetterData] = useState([]);

  let incrementdata1 = localStorage.getItem("LoginData");
  let incrementdata2 = JSON.parse(incrementdata1);
  //console.log(incrementdata2);

  useEffect(() => {
    axios.get("http://localhost:8087/increments").then((response) => {
      setIncrementLetterData(response.data);
    });
  }, []);

  const incrementDownload = () => {
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

      {incrementLetterData.map((ele) => {
        if (ele.employeeId == incrementdata2.employeeId) {
          return (
            <>
              <p className="main-heading2">LETTER OF INCREMENT</p>
              <div className="address1">
                <p className="bold1">To,</p>
                <p>Name: {incrementdata2.employeeName}</p>
                <p>ID: {ele.employeeId}</p>
                <p>Designation: {incrementdata2.designation}</p>
              </div>

              <p className="subject1">Subject: Salary Increment</p>

              <div className="para1">
                <p>Dear, {incrementdata2.employeeName}</p>
                <p>
                  We are pleased to inform you that your salary has been revised
                  under the annual increment policy. You will be entitled to get
                  an increment of {ele.incrementPercent}% on your current C.T.C,
                  the new C.T.C. will be effective from the next month onwards.
                </p>
                <p>
                  Please find the enclosed annexure to know the breakup of your
                  new C.T.C.
                </p>
                <p>
                  We appreciate your efforts and hard work and hope the same
                  will continue in the further as well.
                </p>
                <p>Best wishes.</p>
              </div>
              <div className="right-bottom1">
                <p className="title1">For Axis Bank</p>
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
                  onClick={incrementDownload}
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

export default IncrementLetter;
