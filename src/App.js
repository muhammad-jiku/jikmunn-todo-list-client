import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import ToDo from './components/ToDo/ToDo';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}
export default App;
