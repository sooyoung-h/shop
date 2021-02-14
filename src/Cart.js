import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(<td>{props.state[i].name}</td>);
  }

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>{arr}</tr>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "countUp" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "countDown" });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {props.alertShow === true ? (
        <div className="my-alert2">
          <p>This is last one!</p>
          <button
            onClick={() => {
              props.dispatch({ type: "close" });
            }}
          >
            CLOSE!
          </button>
        </div>
      ) : null}
    </div>
  );
}
//state 받아오는 셋팅
function myFunc(state) {
  //여기서 받는 state는 보내준 store 데이터를 의미!
  //redux state 데이터를 props로 변환해주는 함수
  return {
    state: state.reducer, //state 데이터를 props로 등록 (props명 : state명)
    alertShow: state.reducer2,
  };
}
//다른 컴포넌트에서 쓰지 않고 여기서만 쓰는 건 굳이 리덕스 쓰지말고 useState사용하기!***

export default connect(myFunc)(Cart);
//export default Cart;
