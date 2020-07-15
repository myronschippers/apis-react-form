import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <button className="btn">CLICKER</button>
      </div>
    );
  }
}

export default App;
