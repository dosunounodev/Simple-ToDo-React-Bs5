import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, setTodoEdit, todoToggleComplete }) => {
  return (
    <div className="">
      <h2 className="text-end">Lista de Tareas</h2>

      {todos.length === 0 && (
        <div className="alert alert-primary">
          No hay tareas. Agrega una {":)"}
        </div>
      )}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          todoDelete={todoDelete}
          todoToggleComplete={todoToggleComplete}
          setTodoEdit={setTodoEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
