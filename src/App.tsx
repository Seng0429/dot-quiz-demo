import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/sign-in/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/sign-up" element={<SiginUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
