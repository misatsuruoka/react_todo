import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
    {/* 入力した際にonChangeイベントが発火→onChangeTodoTextが実行 */}
    <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
    {/* 追加ボタンを押した際にonClickAdd関数が実行 */}
    <button onClick={onClick}>追加</button>
  </div>
  )
}