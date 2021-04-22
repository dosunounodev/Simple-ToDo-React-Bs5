import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const localTodos = JSON.parse(localStorage.getItem("todos"));

const initialTodos = [
  {
    id: 1,
    title: "Esto es un título",
    description: "Esta es una descripción de tarea",
    completed: false,
  },
  {
    id: 2,
    title: "Esta tarea esta terminada",
    description: "Crea tus propias tareas, edita, borra... ",
    completed: true,
  },
  {
    id: 3,
    title: "Importante",
    description:
      "Las tareas se almacenan en tu dispositivo, si borras la info, esta lista se reseteará",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      title: todo.title,
      description: todo.description,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const todoDelete = (todoId) => {
    todoEdit && todoId === todoEdit.id && setTodoEdit(null);
    let changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const todoUpdate = (updatedTodo) => {
    let changedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(changedTodos);
  };

  const todoToggleComplete = (todoId) => {
    let changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(changedTodos);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h1 className="text-center mb-4">To do App</h1>
        </div>
        <div className="row d-flex">
          <div className="col-lg-7 order-2">
            <TodoList
              todos={todos}
              todoDelete={todoDelete}
              setTodoEdit={setTodoEdit}
              todoToggleComplete={todoToggleComplete}
            />
          </div>
          <div className="col-lg-5 order-1 mb-5 mb-lg-0">
            <TodoForm
              todoEdit={todoEdit}
              todoAdd={todoAdd}
              todoUpdate={todoUpdate}
              setTodoEdit={setTodoEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
