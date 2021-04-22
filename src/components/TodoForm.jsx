import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValue] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    todoEdit ? setFormValue(todoEdit) : setFormValue(initialFormValues);
  }, [todoEdit]);

  const handleInputChange = (e) => {
    setFormValue({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Debes indicar un título");
      return;
    }

    if (description.trim() === "") {
      setError("Debes indicar una descripción");
      return;
    }
    if (todoEdit) {
      todoUpdate(formValues);
      setSuccessMessage("La tarea fue editada correctamente");
    } else {
      todoAdd(formValues);
      setSuccessMessage("La tarea fue agregada correctamente");
      setFormValue(initialFormValues);
    }
    setError(null);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
  };

  return (
    <div>
      <h2 className="">
        {todoEdit ? "Editar tarea" : "Nueva Tarea"}
        {todoEdit && (
          <button
            onClick={() => setTodoEdit(null)}
            className="btn btn-warning btn-sm ms-2"
          >
            Cancelar Edición
          </button>
        )}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            className="form-control"
            name="title"
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            name="description"
            placeholder="Descripcion"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 d-block">
          <button type="submit" className="btn btn-success form-control">
            {todoEdit ? "Actualizar tarea" : "Agregar Tarea"}
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TodoForm;
