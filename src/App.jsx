import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './components/InputTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力したテキストを取得、変数todoTextに値をセット
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // 入力欄が空のまま追加ボタンを押した場合に追加されないようにする
    if(todoText === "") return
    // todoTextを追加した新しい配列を定義
    const newTodos = [...incompleteTodos, todoText];
    // 未完了のTODOに値をセット
    setIncompleteTodos(newTodos);
    setTodoText("")
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
  }

  const onClickComplete = (index) => {
    // incompleteTodosの配列をコピーして新しくオブジェクト(配列)を作成
    const newIncompleteTodos = [...incompleteTodos]
    // newIncompleteTodosから完了ボタンを押したTODOを削除
    newIncompleteTodos.splice(index, 1);

    // 完了のTODOリストに完了ボタンを押したTODOを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    // 　完了TODOと未完了TODOのステートを変更
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    console.log(newCompleteTodos, newIncompleteTodos);

  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 未完了のTODOごとにdivを作成 */}
          {incompleteTodos.map((todo, index) => {
            return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
          {/* 完了のTODOごとにdivを作成 */}
          {completeTodos.map((todo, index) => {
            return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}