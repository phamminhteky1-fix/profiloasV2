import './App.css';
import Head from './modules/head.jsx';
import NotFound from './modules/404.jsx';  // Changed import name
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Homepage() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>
        This is an app that I'm working on, so nothin here.
      </h1>
      <p style={{ textAlign: 'center' }}>
        In the meantime, please check out my main web:{' '}
        <a 
          href="https://phamminhteky1-fix.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://phamminhteky1-fix.github.io
        </a>
      </p>
      <Head />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/head" element={<Head />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;