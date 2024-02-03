import React from "react";
type Iprops = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
};

const Input: React.FC<Iprops> = ({ todo, setTodo, addMessage }) => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    addMessage();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Please Typing...."
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Input;
