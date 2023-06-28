import React from "react";
import { Todos } from "../type/type";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>
          {todo.message} ----{" "}
          <span
            onClick={() => deleteMessage(todo.id)}
            style={{ cursor: "pointer" }}
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};

export default Message;
