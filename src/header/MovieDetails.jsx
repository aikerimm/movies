import PropTypes from 'prop-types';

const MovieDetails = ({
  movie: { poster_path, title, vote_average, runtime, genres, release_date, overview},
}) => {
  return (
    <>
      <img src={poster_path} alt='moviePoster' className='movieCardPoster' />
      <div className='movieDetails'>
        <div className='movieDetailsHorizonalDisplay'>
          <p className='titleText'>{title}</p>
          <div className='circle'>{vote_average}</div>
        </div>
        <p className='movieDetailsGenre'>{genres.join(', ')}</p>
        <div className='movieDetailsHorizonalDisplay'>
          <p className='redText'>{release_date.substring(0, 4)}</p>
          <p className='redText'>
            {Math.floor(runtime / 60)}h {runtime % 60}min
          </p>
        </div>
        <p>{overview}</p>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    release_date: PropTypes.instanceOf(Date).isRequired,
    overview: PropTypes.string,
  }),
};

export default MovieDetails;
