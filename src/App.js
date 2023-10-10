import './App.css';
import React from 'react';
import MovieList from './Components/MovieList'; 
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <Footer />
      </div>
    );
  }
}

export default App;