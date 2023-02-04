import React from "react";
import AdminNavigation from "../AdminNavigation";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./AddNews.css";

const AddNews = () => {
  const newsNameInputRef = useRef();
  const newsIdInputRef = useRef();
  const newsDescInputRef = useRef();
  const newsImgInputRef = useRef();
  const [enteredNewsName, setenteredNewsName] = useState("");
  const [enteredNewsDesc, setenteredNewsDesc] = useState("");
  const [enteredImage, setenteredImage] = useState("");
  const [enteredNewsId, setenteredNewsId] = useState("");
  const [empData, setEmpData] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const newsNameOC = (event) => {
    setenteredNewsName(event.target.value);
  };

  const imageUrlOC = (event) => {
    setenteredImage(event.target.value);
  };

  const newsDesciptionOC = (event) => {
    setenteredNewsDesc(event.target.value);
  };

  const newsIdOC = (event) => {
    setenteredNewsId(event.target.value);
  };

  const submit = () => {
    const productData = {
      newsName: enteredNewsName,
      newsImageUrl: enteredImage,
      newsDescription: enteredNewsDesc,
    };

    axios.post("http://localhost:8088/news/add", productData);
    console.log(empData);

    empData.map((ele) => {
      let data = {
        recipient: ele.emailId,
        msgBody: "Checkout latest news on the portal",
        subject: "News Alert! ",
      };

      axios.post("http://localhost:8091/sendMail", data).then((response) => {
        console.log(response);
      });
    });

    alert("Mail Sent To All Employees.", window.location.reload());
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    const enteredNewsId = newsIdInputRef.current.value;

    const prodData = {
      newsFeedId: enteredNewsId,
    };

    const baseURL = `http://localhost:8088/news/delete/${enteredNewsId}`;
    fetch(baseURL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(prodData),
    })
      .then((response) => {
        alert("News deleted", window.location.reload);
      })
      .catch((error) => {
        alert("error");
      });
    newsIdInputRef = "";

    event.target.reset();
  };

  const [addChange, setaddChange] = useState(true);
  const [deleteChange, setdeleteChange] = useState(false);

  const add = () => {
    setaddChange(true);
    setdeleteChange(false);
  };
  const del = () => {
    setaddChange(false);
    setdeleteChange(true);
  };

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmpData(response.data);
    });
  }, []);

  return (
    <>
      <AdminNavigation />
      <Card className="adminAdd">
        <Card.Header>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link className="projectclass" onClick={add}>
                ADD News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="projectclass" onClick={del}>
                {" "}
                DELETE News
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body
          style={{ display: addChange ? "block" : "none" }}
          className="frm"
        >
          <form>
            <div>
              <label>News Image Url</label>
              <input
                type="url"
                required
                ref={newsImgInputRef}
                onChange={imageUrlOC}
              />
            </div>
            <div>
              <label>News Name</label>
              <input
                type="text"
                required
                ref={newsNameInputRef}
                onChange={newsNameOC}
              />
            </div>
            <div>
              <label>News Description</label>
              <input
                type="text"
                required
                ref={newsDescInputRef}
                onChange={newsDesciptionOC}
              />
            </div>
            <div>
              <button className="frm-submit" onClick={submit}>
                Add News
              </button>
            </div>
          </form>

          <hr />
        </Card.Body>

        <Card.Body
          style={{ display: deleteChange ? "block" : "none" }}
          className="frm"
        >
          <form onSubmit={deleteHandler}>
            <div>
              <label>News ID</label>
              <input
                type="number"
                required
                ref={newsIdInputRef}
                onChange={newsIdOC}
              />
            </div>
            <div>
              <button className="frm-submit">Delete News</button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddNews;
