import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todos } from "./type/type";
import Message from "./components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  console.log(todos);

  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };

  const deleteMessage = (id: number) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} addMessage={addMessage} />
      <Message todos={todos} deleteMessage={deleteMessage} />
    </div>
  );
};

export default App;
