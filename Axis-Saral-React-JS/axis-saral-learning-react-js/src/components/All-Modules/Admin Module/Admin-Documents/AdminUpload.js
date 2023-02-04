import React, { useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import AdminNavigation from "../AdminNavigation";
import Button from "@mui/material/Button";
import "./AdminUpload.css";

export default function AdminUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = (event) => {
    event.preventDefault();
    // document.getElementById("inputfile").click();

    const formData = new FormData();
    formData.append("file", file);

    // fetch("http://localhost:9191/api/pdf", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   });
    axios.post(`http://localhost:9191/api/pdf`, formData).then((response) => {
      alert("File uploaded", window.location.reload());
    });
  };

  return (
    <>
      <AdminNavigation />
      <div className="adminUploadMain">
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>SOP</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>

              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#AE275F" }}
                onClick={uploadFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Axis Saral</MDBCardFooter>
          </MDBCard>
        </div>
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>SCD</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#AE275F" }}
                onClick={uploadFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Axis Saral</MDBCardFooter>
          </MDBCard>
        </div>
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Policies</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#AE275F" }}
                onClick={uploadFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Axis Saral</MDBCardFooter>
          </MDBCard>
        </div>
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Code of Conduct & Ethics</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#AE275F" }}
                onClick={uploadFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Axis Saral</MDBCardFooter>
          </MDBCard>
        </div>
      </div>
    </>
  );
}
