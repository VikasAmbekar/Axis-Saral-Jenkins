import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const SOP = ({ fileId }) => {
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9191/api/pdf/1`, { responseType: "arraybuffer" })
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });
        setPdf(URL.createObjectURL(file));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [fileId]);

  return (
    <>
      {pdf && (
        <>
          <iframe src={pdf} style={{ width: "100%", height: "500px" }} />
          <a href={pdf} download>
            Download
          </a>
        </>
      )}
    </>
  );
};

export default SOP;
