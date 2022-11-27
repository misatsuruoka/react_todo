import React from "react";
import { Button, Container } from "@mui/material";

const style = {
  backgroundColor: "#f1e5ab",
  width: "500px",
  height: "50px",
  padding: "8px",
  margin: "auto",
  borderRadius: "8px",
  position: "relative",
  color: "#808080",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* 入力した際にonChangeイベントが発火→onChangeTodoTextが実行 */}
      <div className="input-area">
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        {/* 追加ボタンを押した際にonClickAdd関数が実行 */}
        <button onClick={onClick}>追加</button>
      </div>
    </div>
  );
};
