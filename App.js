import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>CodeAnt Frontend</h1>
    </header>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <h2>Welcome to CodeAnt AI</h2>
      <p>Building the future of code with AI-driven solutions.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 CodeAnt AI. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
