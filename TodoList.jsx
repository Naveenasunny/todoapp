// client/src/components/TodoList.js
import React, { useEffect, useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const handleCheck = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    const completedCount = newTodos.filter(todo => todo.completed).length;
    setCount(completedCount);
    setTodos(newTodos);

    new Promise((resolve, reject) => {
      if (completedCount === 5) {
        resolve();
      }
    }).then(() => {
      alert('Congrats. 5 Tasks have been Successfully Completed');
    });
  };

  return (
    <div className="container mt-4">
      <h3>Todo List</h3>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(todo.id)}
              disabled={todo.userId !== 1}
              className="form-check-input me-2"
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
