import React from 'react';
import Map from './Map';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Map Integration with React</h1>
      </header>
      <main className="content">
        <div className="container">
          <div className="map">
            <Map />
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Created by Krazy9ine</p>
      </footer>
    </div>
  );
}

export default App;