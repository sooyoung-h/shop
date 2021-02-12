import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
} from "react-bootstrap";
import Data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";

function Card(props) {
  //컴포넌트는 간단하게 작성
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

function App() {
  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">
      <Route exact path="/">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron className="background">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row>
            {shoes.map((a, i) => {
              //map 함수에서 반복 돌리기
              <Col>
                <Card shoes={shoes[i]}></Card>
              </Col>;
            })}
          </Row>
        </Container>
      </Route>
      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

export default App;
