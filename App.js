// client/src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
