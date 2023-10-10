import React from 'react';
import '../Styles/MovieCard.css'

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movie } = this.props;

    return (
      <div key={movie.id} className="card">
        <div className="card_body">
          <h5 className="card_title">{movie.title}</h5>
          <p className="card_text">{movie.overview}</p>
          <button className='card_btn'>
            <p className='card_btn_content'>more</p>
          </button>
        </div>
        <img
          className="card_img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    );
  }
}

export default MovieCard