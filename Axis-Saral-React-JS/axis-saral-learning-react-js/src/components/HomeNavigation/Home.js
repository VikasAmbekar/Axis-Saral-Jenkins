import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ImageChange from "./HomeFeed";
import CreditCard from "@mui/icons-material/CreditCard";
import SavingsIcon from "@mui/icons-material/Savings";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardM from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="navid">
          <a className="navbar-brand">Axis SARAL Learning</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navb-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/products-services");
                  }}
                >
                  PRODUCTS & SERVICES
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/employee-login");
                      }}
                    >
                      Employee
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/manager-login");
                      }}
                    >
                      Manager
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/admin-login");
                      }}
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ImageChange />

      <h1 style={{ textAlign: "center", justifyContent: "center" }}>
        Our Products & Services
      </h1>
      <br />
      <div className="flex-container">
        <div className="credit">
          <Card>
            <CreditCard
              style={{
                height: "5rem",
                width: "10rem",
                color: "#AE275F",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Card.Title className="title">
              <Link style={{ textDecoration: "none", color: "black" }}>
                Credit Card
              </Link>
            </Card.Title>
          </Card>
        </div>
        <div className="savings">
          <Card>
            <SavingsIcon
              style={{
                height: "5rem",
                width: "10rem",
                color: "#AE275F",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "70px",
              }}
            />
            <Card.Title className="title">
              <Link style={{ textDecoration: "none", color: "black" }}>
                Digital Savings Account
              </Link>
            </Card.Title>
          </Card>
        </div>
        <div className="car-loan">
          <Card>
            <DirectionsCarFilledIcon
              style={{
                height: "5rem",
                width: "10rem",
                color: "#AE275F",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Card.Title className="title">
              <Link style={{ textDecoration: "none", color: "black" }}>
                Car Loans
              </Link>
            </Card.Title>
          </Card>
        </div>
        <div className="health">
          <Card>
            <HealthAndSafetyIcon
              style={{
                height: "5rem",
                width: "10rem",
                color: "#AE275F",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Card.Title className="title">
              <Link style={{ textDecoration: "none", color: "black" }}>
                Health Insurance
              </Link>
            </Card.Title>
          </Card>
        </div>
      </div>
      <br />
      <br />
      <div className="cards-container">
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400 }} className="img-card">
            <Card.Img
              src="https://cdn.zeebiz.com/sites/default/files/2019/08/28/99259-firstdigital-credit-card.png"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h5" component="div">
                Credit Cards
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Credit Cards with exciting offers on various shopping websites.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400 }} className="img-card">
            <Card.Img
              src="https://www.datocms-assets.com/38567/1609495928-whichsavingsaccountsaresuitableforpensioners.jpeg?ar=3%3A2&auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&q=40&w=1024"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h5" component="div">
                Here's to Higher Savings
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get higher interest on your savings with the new savings account
                plans. Secure your future!
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400 }} className="img-card">
            <Card.Img
              src="https://napkinfinance.com/wp-content/uploads/2016/11/securities.jpg"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h5" component="div">
                Axis Securities
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Invest in share markets with Axis Securities. User friendly UI
                and easy functionalities.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400 }} className="img-card">
            <Card.Img
              src="https://cdnblog.etmoney.com/wp-content/uploads/2021/12/best-practices-for-home-loans.jpg"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h5" component="div">
                Home Loans
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Home Loans at an affordable interest rates. To Avail Click on
                known more.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
      </div>
      <div>More</div>

      <footer className="copyrightfooter">
        <p> Copyright &#169; By Axis Batch 9 </p>
      </footer>
    </>
  );
}

export default Home;
