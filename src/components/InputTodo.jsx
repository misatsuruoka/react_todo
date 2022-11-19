import React from "react";
import { Button } from "@mui/material";

const style = {
  backgroundColor: "#f1e5ab",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* 入力した際にonChangeイベントが発火→onChangeTodoTextが実行 */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      {/* 追加ボタンを押した際にonClickAdd関数が実行 */}
      <button onClick={onClick}>追加</button>
    </div>
  );
};
