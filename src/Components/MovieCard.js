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
          <h5 className="card_title">{movie.title.substring(0, 30)}</h5>
          <p className="card_text">{movie.overview.substring(0, 238)}</p>
          <button className='card_btn'>
            <p className='card_btn_content'>more</p>
          </button>
        </div>
        <img
          className="card_img"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUvFfPPOkbPc_TFDcRBsSysBhmgZWhLGtPw&usqp=CAU"
          }
          alt={movie.title}
        />
      </div>
    );
  }
}

export default MovieCard