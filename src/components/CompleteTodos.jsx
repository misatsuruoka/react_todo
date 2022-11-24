import React from "react";
import { Checkbox } from "@mui/material";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {/* 完了のTODOごとにdivを作成 */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <Checkbox
                onClick={() => onClickBack(index)}
                defaultChecked
                color="default"
              />
              <p className="todo-text">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
