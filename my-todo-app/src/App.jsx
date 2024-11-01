import { useState } from "react";
import Form from "./components/todoform/Form";
import Todos from "./components/todos/Todos";

function App() {
  const [todo, setTodo] = useState([]);
  const [updateTodo, setUpdateTodo] = useState({
    title: "",
    desc: "",
    status: false,
    time: "",
  });
  return (
    <div className="container">
      <Form setTodo={setTodo} todo={todo} updateTodo={updateTodo} />
      <Todos todo={todo} setUpdateTodo={setUpdateTodo} />
    </div>
  );
}

export default App;