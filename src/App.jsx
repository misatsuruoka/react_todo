import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickComplete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>
    </>
  )
}