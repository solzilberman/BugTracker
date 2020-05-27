import React from 'react';
import './App.css';
import Header from './components/Header'
import Project from './components/project/Project'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="Main">
        <Project />
      </div>
    </div>
  );
}

export default App;
