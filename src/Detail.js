import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./Detail.css";
import { connect } from "react-redux";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let [alert, alertChange] = useState(true);
  let [inputData, inputDataChange] = useState("");
  let [currentTab, currentTabChange] = useState(0);
  let [mySwitch, mySwitchChange] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      alertChange(false);
    }, 2000);

    return () => {
      //컴포넌트 퇴장시
      clearTimeout(timer);
    };
  }, [alert]); //alert라는 state가 변경이 될 때만 실행됨
  //그냥 []일 경우 Detail 컴포넌트가 실행될 때 한번만 실행되는 useEffect
  return (
    <div className="container">
      {/* {inputData}  input에 입력할 때마다 재랜더링-> 낭비*/}
      <input
        onChange={(e) => {
          inputDataChange(e.target.value);
        }}
      ></input>
      {alert === true ? (
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.dispatch({
                type: "plusItem",
                payload: { id: 4, name: "new item!", quan: 1 },
              });
              console.log(props.state);
              history.push("/cart"); //데이터 추가되면서 이동!
            }}
          >
            주문하기
          </button>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-danger"
          >
            뒤로가기
          </button>
        </div>
      </div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              mySwitchChange(false);
              currentTabChange(0); //탭 변경
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              mySwitchChange(false);
              currentTabChange(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              mySwitchChange(false);
              currentTabChange(2);
            }}
          >
            Option 3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={mySwitch} classNames="effect" timeout={500}>
        {/* in={true}일 때 동작함 */}
        <TabContent
          currentTab={currentTab}
          mySwitchChange={mySwitchChange}
        ></TabContent>
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  //삼항 연산자로 할 수 없는 경우 (세가지 이상의 케이스가 있을 경우)
  useEffect(() => {
    props.mySwitchChange(true);
  });
  if (props.currentTab === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.currentTab === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (props.currentTab === 2) {
    return <div>2번째 내용입니다</div>;
  }
}

function myFunc(state) {
  return {
    state: state.reducer,
    alertShow: state.reducer2,
  };
}

export default connect(myFunc)(Detail);

//export default Detail;
