import { useEffect, useState } from "react";

const Form = ({ setTodo, todo, updateTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const [status, setStatus] = useState(false);

  useEffect(() => {
    
    if (updateTodo) {
      setDesc(updateTodo.desc || "");
      setTitle(updateTodo.title || "");
      setStatus(updateTodo.status || false);
    }
  }, [updateTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    const todoToAdd = {
      title: title.trim(),
      desc: desc.trim(),
      status,
      time: new Date().getTime(),
    };
    const updatedTodos = [...todo, todoToAdd].sort((a, b) => b.time - a.time);
    setTodo(updatedTodos);
    resetForm();
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    const index = todo.findIndex((t) => t.time === updateTodo.time);
    if (index !== -1) { 
      const updatedTodos = [...todo];
      updatedTodos[index] = {
        title: title.trim(),
        desc: desc.trim(),
        status,
        time: updateTodo.time,
      };
      updatedTodos.sort((a, b) => b.time - a.time);
      setTodo(updatedTodos);
      resetForm();
    }
  };

  
  const resetForm = () => {
    setDesc("");
    setTitle("");
    setStatus(false);
  };

  return (
    <div className="todo-form">
      <h3 className="form-title">Todo Form</h3>
      {}
      <form onSubmit={updateTodo?.title ? handleEdit : handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Todo title</label>
          <input
            type="text"
            placeholder="Todo title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Todo description</label>
          <textarea
            id="description"
            placeholder="Todo description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="status-group">
          <label htmlFor="status">Status</label>
          <input
            type="checkbox"
            id="status"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>
        <button className="btn" type="submit">
          {updateTodo?.title ? "Update todo" : "Add todo"}
        </button>
      </form>
    </div>
  );
};

export default Form;