import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import "./AdminProduct.css";
import { useRef } from "react";
import AdminNavigation from "./AdminNavigation";

const AdminProduct = () => {
  const productNameInputRef = useRef();
  const productIdInputRef = useRef();
  const productDescInputRef = useRef();
  const imageInputRef = useRef();
  const [enteredProductName, setenteredProductName] = useState("");
  const [enteredProductDesc, setenteredProductDesc] = useState("");
  const [enteredImage, setenteredImage] = useState("");
  const [enteredProductId, setenteredProductId] = useState("");

  const productNameOC = (event) => {
    setenteredProductName(event.target.value);
  };

  const imageUrlOC = (event) => {
    setenteredImage(event.target.value);
  };

  const productDesciptionOC = (event) => {
    setenteredProductDesc(event.target.value);
  };

  const productIdOC = (event) => {
    setenteredProductId(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevent default behaviour of submit button
    // const enteredProductName = productNameInputRef.current.value;
    // const enteredProductDesc = productDescInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;

    const productData = {
      productName: enteredProductName,
      imageUrl: enteredImage,
      productDescription: enteredProductDesc,
    };

    const baseURL = "http://localhost:8089/product/add";
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        alert("Product added");
      })
      .catch((error) => {
        alert("error");
      });

    productNameInputRef = "";
    imageInputRef = "";
    productDescInputRef = "";

    event.target.reset();
  };

  const updateHandler = (event) => {
    event.preventDefault(); //prevent default behaviour of submit button
    // const enteredProductId = productIdInputRef.current.value;
    // const enteredProductName = productNameInputRef.current.value;
    // const enteredProductDesc = productDescInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;

    const prodData = {
      productId: enteredProductId,
      productName: enteredProductName,
      imageUrl: enteredImage,
      productDescription: enteredProductDesc,
    };

    const baseURL = `http://localhost:8089/product/update/${enteredProductId}`;
    fetch(baseURL, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(prodData),
    })
      .then((response) => {
        alert("Product updated");
      })
      .catch((error) => {
        alert("error");
      });
    productIdInputRef = "";
    productNameInputRef = "";
    imageInputRef = "";
    productDescInputRef = "";

    event.target.reset();
  };

  const deleteHandler = (event) => {
    event.preventDefault(); //prevent default behaviour of submit button
    const enteredProductId = productIdInputRef.current.value;

    const prodData = {
      productId: enteredProductId,
    };

    const baseURL = `http://localhost:8089/product/delete/${enteredProductId}`;
    fetch(baseURL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(prodData),
    })
      .then((response) => {
        alert("Product deleted", window.location.reload);
      })
      .catch((error) => {
        alert("error");
      });
    productIdInputRef = "";

    event.target.reset();
  };

  const [addChange, setaddChange] = useState(true);
  const [updateChange, setupdateChange] = useState(false);
  const [deleteChange, setdeleteChange] = useState(false);

  const add = () => {
    setaddChange(true);
    setupdateChange(false);
    setdeleteChange(false);
  };
  const update = () => {
    setaddChange(false);
    setupdateChange(true);
    setdeleteChange(false);
  };

  const del = () => {
    setaddChange(false);
    setupdateChange(false);
    setdeleteChange(true);
  };

  return (
    <>
      <AdminNavigation />
      <div className="adminProduct">
        <Card>
          <Card.Header>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={add}>
                  ADD PRODUCT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={update}>
                  UPDATE PRODUCT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={del}>
                  {" "}
                  DELETE PRODUCT
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body
            style={{ display: addChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={submitHandler}>
              <div>
                <label>Product Name</label>
                <input
                  type="text"
                  required
                  ref={productNameInputRef}
                  onChange={productNameOC}
                />
              </div>
              <div>
                <label>Image Url</label>
                <input
                  type="text"
                  required
                  ref={imageInputRef}
                  onChange={imageUrlOC}
                />
              </div>
              <div>
                <label>Product Description</label>
                <input
                  type="text"
                  required
                  ref={productDescInputRef}
                  onChange={productDesciptionOC}
                />
              </div>
              <div>
                <button className="frm-submit">Add Product</button>
              </div>
            </form>
            <hr />
          </Card.Body>
          <Card.Body
            style={{ display: updateChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={updateHandler}>
              <div>
                <label>Product Id</label>
                <input
                  type="number"
                  required
                  ref={productIdInputRef}
                  value={enteredProductId}
                  onChange={productIdOC}
                />
              </div>
              <div>
                <label>Product Name</label>
                <input
                  type="text"
                  required
                  ref={productNameInputRef}
                  value={enteredProductName}
                  onChange={productNameOC}
                />
              </div>
              <div>
                <label>Image Url</label>
                <input
                  type="text"
                  required
                  ref={imageInputRef}
                  onChange={imageUrlOC}
                />
              </div>
              <div>
                <label>Product Description</label>
                <input
                  type="text"
                  required
                  ref={productDescInputRef}
                  onChange={productDesciptionOC}
                />
              </div>
              <div>
                <button className="frm-submit">Upate Product</button>
              </div>
            </form>
          </Card.Body>
          <Card.Body
            style={{ display: deleteChange ? "block" : "none" }}
            className="frm"
          >
            <form onSubmit={deleteHandler}>
              <div>
                <label>Product Id</label>
                <input
                  type="number"
                  required
                  id="theatre"
                  ref={productIdInputRef}
                />
              </div>
              <div>
                <button className="frm-submit">Delete Product</button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminProduct;
