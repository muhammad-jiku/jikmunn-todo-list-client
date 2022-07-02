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
import GoogleSignIn from './components/Authentication/GoogleSignIn';
import RequiredAuth from './components/Authentication/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route
          path="/completed-tasks"
          element={
            <RequiredAuth>
              <CompletedTasks />
            </RequiredAuth>
          }
        />
        <Route
          path="/todo"
          element={
            <RequiredAuth>
              <ToDo />
            </RequiredAuth>
          }
        />
        <Route
          path="/calendar"
          element={
            <RequiredAuth>
              <Calendar />
            </RequiredAuth>
          }
        />
        <Route path="/signin" element={<GoogleSignIn />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}
export default App;
