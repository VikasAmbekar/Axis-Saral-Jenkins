import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";
import "./SalarySlip.css";

const SalarySlip = () => {
  const [salaryEmployeeData, setSalaryEmployeeData] = useState([]);

  const navigate = useNavigate();

  // getting the data from the localstorage...

  let salarySlip1 = localStorage.getItem("SalarySlip");

  let salarySlip2 = JSON.parse(salarySlip1);

  // console.log(salarySlip2);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setSalaryEmployeeData(response.data);
    });
  }, []);

  const salarydownload = () => {
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

      {
        // let found = salaryEmployeeData.find((element) => element.employeeId == salarySlip2.employeeId)

        salaryEmployeeData.map((ele) => {
          if (ele.employeeId == salarySlip2.employeeId) {
            return (
              <>
                <div className="centerSalarySlip">
                  <Card>
                    <Card.Header
                      className="managercard"
                      style={{ fontWeight: "bold", fontSize: "25px" }}
                    >
                      Salary Slip
                    </Card.Header>

                    <Card.Header
                      className="managercard"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      {ele.employeeName}
                    </Card.Header>

                    <Card.Body> </Card.Body>
                  </Card>

                  <div className="content" style={{ backgroundColor: "white" }}>
                    <table className="tableContainer">
                      <thead>
                        <tr
                          className="empFields"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Employee ID: {salarySlip2.employeeId}
                          </th>
                        </tr>

                        <tr
                          className="empFields"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Designation: {ele.designation}
                          </th>
                        </tr>

                        <br />

                        <tr
                          className="heading"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Standard Monthly Salary
                          </th>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Basic Pay
                          </th>

                          <td>{salarySlip2.basicPay}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Allowance
                          </th>

                          <td>{salarySlip2.allowance}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Location Pay
                          </th>

                          <td>{salarySlip2.locationPay}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Benefits Pay
                          </th>

                          <td>{salarySlip2.benefitsPay}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            PF Contribution
                          </th>

                          <td>{salarySlip2.pfContribution}</td>
                        </tr>

                        <tr className="salary">
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Net Pay
                          </th>

                          <td>{salarySlip2.salaryAmount}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>

                  <Button
                    type="submit"
                    halfWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    id="btnlogin"
                    style={{
                      backgroundColor: "#AE275F",
                    }}
                    onClick={salarydownload}
                  >
                    DOWNLOAD
                  </Button>
                </div>
              </>
            );
          }
        })
      }
    </>
  );
};

export default SalarySlip;
