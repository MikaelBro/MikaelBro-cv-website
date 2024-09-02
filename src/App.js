import React from 'react';
import './App.css';
import Bio from './components/Bio';   // Import the components
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Online CV</h1>
      </header>
      <main>
        <Bio />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}

export default App;  // Ensure default export is present
