import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickRestore } = props;
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo + index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickRestore(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
