import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { BsFillHandIndexThumbFill } from "react-icons/bs";

const TodolistBlock = styled.div`
  .addInput {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    width: 55%;
    height: 40px;
    border: 2px solid #ffb3cc;
    border-radius: 15px;
    display: flex;
    justify-content: center;
  }
  .list {
    margin-left: 120px;
  }
`;

const SearchBox = styled.div`
  display: "flex",
  justifyContent:"center",
`;

function Todolist({ children }) {
  const [search, setSearch] = useState("");
  const [result] = useState([]);
  const [textColor, setTextColor] = useState("black");

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      searchOnClick();
    }
  };
  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const searchOnClick = (e) => {
    result.push(search);

    setSearch("");
  };

  const erase = (e) => {
    console.log(result);
    console.log(e.target);
    console.log(e);
  };

  return (
    <TodolistBlock>
      <div className="addInput">
        <input
          type="text"
          value={search}
          onChange={searchOnChange}
          onKeyPress={searchEnter}
        ></input>

        <BsFillHandIndexThumbFill
          size="20px"
          style={{ marginTop: "13px", marginLeft: "10px" }}
          onClick={searchOnClick}
        />
      </div>
      <div className="list">
        {result.map((result) => (
          <h2 key={result} style={{ color: textColor }} onClick={erase}>
            <b key={result}>{result}</b>
          </h2>
        ))}
      </div>
    </TodolistBlock>
  );
}

export default Todolist;
