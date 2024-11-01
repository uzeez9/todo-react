const Todos = ({ todo, setUpdateTodo }) => {
    const handleEdit = (t) => {
      setUpdateTodo(t);
      console.log(t);
    };
  
    return (
      <div className="todos-container">
        {todo.length > 0 ? (
          todo.map((t, i) => (
            <div className="todo-item" key={i}>
              <h2 className="todo-title">
                <span>{t.title}</span>
              </h2>
              <p className="todo-desc">
                {t.desc}{" "}
                <span className={`status-badge ${t.status ? "status-completed" : "status-pending"}`}>
                  {t.status ? "Completed" : "Pending"}
                </span>
                <button className="edit-btn" onClick={() => handleEdit(t)}>
                  Edit
                </button>
              </p>
            </div>
          ))
        ) : (
          <h2 className="form-title">No Todos yet, please add a todo</h2>
        )}
      </div>
    );
  };
  
  export default Todos;