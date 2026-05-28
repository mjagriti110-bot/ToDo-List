import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  const addTodo = (todo) => {
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const newTodo = { sno, title: todo.title, desc: todo.desc, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (sno) => {
    setTodos(todos.map(t => t.sno === sno ? { ...t, completed: !t.completed } : t));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header title="My ToDos List" />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<>
            <Home />
            <AddTodo onAddTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} onToggleComplete={toggleComplete} onClearCompleted={clearCompleted} />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
