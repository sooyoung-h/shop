import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let [alert, alertChange] = useState(true);
  let [inputData, inputDataChange] = useState("");

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
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
}

export default Detail;
