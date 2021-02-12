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
import Detail from "./Detail.js";
import axios from "axios";

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
  let [load, loadChange] = useState("");

  function Loading() {
    return (
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Link</Link>
              </Nav.Link>
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
              //map 함수에서 반복 돌리기 (shoes배열이 변경되면 자동 업뎃)
              return (
                <Col>
                  <Card shoes={shoes[i]}></Card>
                </Col>
              );
            })}
          </Row>
          {load === true ? <Loading></Loading> : null}
          <button
            className="btn btn-primary"
            onClick={() => {
              loadChange(true); //로딩되는 동안 표시하기
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  loadChange(false);
                  shoesChange([...shoes, ...result.data]); //사본없이 새 배열 자동생성 -> map 자동 업뎃
                })
                .catch(() => {
                  loadChange(false);
                });
            }}
          >
            더보기
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .post("https://codingapple1.github.io/shop/data2.json", {
                  id: "test",
                  pw: 1234,
                })
                .then((result) => {})
                .catch(() => {});
            }}
          >
            보내기
          </button>
        </Container>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes}></Detail>
      </Route>
    </div>
  );
}

export default App;
