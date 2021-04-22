import React from "react";
const Todo = ({ todo, todoDelete, setTodoEdit, todoToggleComplete }) => {
  let { id, title, description, completed } = todo;
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3
          className={`text-end card-title ${
            completed ? "text-decoration-line-through" : ""
          }`}
        >
          {title}
          <button
            onClick={() => todoToggleComplete(id)}
            className={`btn btn-sm ms-2 ${
              completed ? "btn-success" : "btn-outline-success"
            }`}
          >
            {completed ? "Terminada" : "Terminar"}
          </button>
        </h3>

        <p className="card-text text-end">{description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={() => setTodoEdit(todo)}
            className="btn btn-sm btn-outline-primary me-2"
          >
            Editar
          </button>
          <button
            onClick={() => todoDelete(id)}
            className="btn btn-sm btn-outline-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
