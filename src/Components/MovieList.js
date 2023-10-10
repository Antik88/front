import React from 'react';
import MovieCard from './MovieCard';
import '../Styles/MovieList.css';
import NoResult from './NoResult';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: process.env.REACT_APP_TOKEN
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.results });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        const { results } = this.state;

        return (
            results.length !== 0 ?
                <div className="container">
                    {results.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
                :
                <NoResult />
        );
    }
}

export default MovieList;