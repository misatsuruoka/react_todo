import React from "react";
import { Button, Checkbox } from "@mui/material";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* 未完了のTODOごとにdivを作成 */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <Checkbox
                onClick={() => onClickComplete(index)}
                color="default"
              />
              <p className="todo-text">{todo}</p>
              <button>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
