import React, { useContext, useRef, useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import './Bai2.css';

const Bai2 = () => {
  const { todos, setTodos } = useContext(GlobalStateContext);
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);

  const handleAddTodo = () => {
    const newTodo = inputRef.current.value.trim();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      inputRef.current.value = '';
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    inputRef.current.value = todos[index];
    setEditIndex(index);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = inputRef.current.value.trim();
    if (updatedTodo) {
      const newTodos = todos.map((todo, i) => (i === editIndex ? updatedTodo : todo));
      setTodos(newTodos);
      inputRef.current.value = '';
      setEditIndex(null);
    }
  };

  return (
    <div className="bai2">
      <hr />
      <h1>Bài 2</h1>
      <h1>Todo App</h1>
      <input type="text" ref={inputRef} placeholder="Enter a todo" />
      <button onClick={editIndex !== null ? handleUpdateTodo : handleAddTodo}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bai2;