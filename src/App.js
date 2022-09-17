import React from "react";
import { Global } from "@emotion/react";
import TodoTemplate from "./component/TodoTemplate";
import TodoHead from "./component/TodoHead";
import Todolist from "./component/TodoList";

const GlobalStyle = () => (
  <Global styles={{ body: { background: "#ffb3cc" } }} />
);

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead>
          {" "}
          {month}월 {day}일{" "}
        </TodoHead>
        <Todolist />
      </TodoTemplate>
    </>
  );
}

export default App;
