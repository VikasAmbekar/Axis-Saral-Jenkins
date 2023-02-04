import * as React from "react";
import { useEffect, useState } from "react";
// import ManagerProjectNav from "./ManagerProjectNav";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Product.css";
import ProductServices from "./ProductServices";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8089/products").then((response) => {
      setProductData(response.data);
    });
  }, []);
  return (
    <>
      <ProductServices />
      <div className="divflex">
        {productData.map((ele) => {
          return (
            <>
              <div className="projectCard" style={{ height: "375px" }}>
                <Card>
                  <Card.Header className="cardHeader">
                    {" "}
                    {ele.productName}{" "}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <img src={ele.imageUrl} className="product-image"></img>
                    </Card.Title>
                    <Card.Title>Product Description</Card.Title>
                    <Card.Text>{ele.productDescription}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
