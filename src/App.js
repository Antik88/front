import './App.css';
import React from 'react';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      query: '',
      page: 1,
    };
    this.options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTI5YjRjYjgzN2VmMzI3ZjM3ZDljODFhMWY1YmJmNSIsInN1YiI6IjY1MDE4NjZjNmEyMjI3MDExYTdiMzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zjw4IubMn1_IFnl4AsxZT0lPL87TpSp7f3jNv1m5FtA'
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    this.state.page = 1 
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.page}`, this.options)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  searchFilms = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=${this.state.page}`, this.options)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  loadMore = () => {
    if(this.state.query !== ''){
      this.page = 1
      this.searchFilms(this.state.query)
    }else{
      this.loadMoreMovies()
    }
  }

  loadMoreMovies = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.page}`,
          this.options
        )
          .then(response => response.json())
          .then(data => {
            const newResults = [...this.state.results, ...data.results];
            this.setState({ results: newResults });
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Header back={this.componentDidMount} handleSearch={this.searchFilms} />
        <MovieList load={this.loadMore} results={this.state.results} query={this.state.query}/>
        <Footer />
      </div>
    );
  }
}

export default App;