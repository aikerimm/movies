import PropTypes from 'prop-types';

const MovieDetails = ({
  movie: { imageName, title, rating, runtime, genre, releaseDate, description },
}) => {
  return (
    <>
      <img src={imageName} alt='moviePoster' className='movieCardPoster' />
      <div className='movieDetails'>
        <div className='movieDetailsHorizonalDisplay'>
          <p className='titleText'>{title}</p>
          <div className='circle'>{rating}</div>
        </div>
        <p className='movieDetailsGenre'>{genre}</p>
        <div className='movieDetailsHorizonalDisplay'>
          <p className='redText'>{releaseDate.getFullYear()}</p>
          <p className='redText'>
            {Math.floor(runtime / 60)}h {runtime % 60}min
          </p>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    imageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    runtime: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    releaseDate: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string,
  }),
};

export default MovieDetails;
