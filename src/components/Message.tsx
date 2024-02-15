import React from "react";
import { Todos } from "../type/type";
import { MdOutlineDelete } from "react-icons/md";

type Props = {
  todos: Todos[];
  deleteMessage: (id: number) => void;
};

const Message: React.FC<Props> = ({ todos, deleteMessage }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>
          {todo.message} ----------------{" "}
          <span
            onClick={() => deleteMessage(todo.id)}
            style={{ cursor: "pointer" }}
          >
            <MdOutlineDelete />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Message;
