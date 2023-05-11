import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Menu />
      </main>      
    </div>
  );
}

export default App;
