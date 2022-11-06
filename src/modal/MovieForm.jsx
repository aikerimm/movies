import './movieModal.css';
import PropTypes from 'prop-types';

const MovieForm = ({
  movieTitle,
  releaseDate,
  movieUrl,
  rating,
  genre,
  runtime,
  overview,
}) => {
  return (
    <>
      <div className='formInput'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={movieTitle}
        ></input>
      </div>
      <div className='formInput'>
        <label htmlFor='releaseDate'>Release Date</label>
        <input
          type='date'
          id='releaseDate'
          name='releaseDate'
          defaultValue={releaseDate ? releaseDate.toJSON().slice(0, 10) : null}
        ></input>
      </div>
      <div className='formInput'>
        <label htmlFor='movieUrl'>Movie Url</label>
        <input
          type='url'
          name='movieUrl'
          id='movieUrl'
          placeholder='https://'
          defaultValue={movieUrl}
        ></input>
      </div>
      <div className='formInput'>
        <label htmlFor='rating'>Rating</label>
        <input
          type='text'
          id='rating'
          name='rating'
          pattern='^[0-9]\.[0-9]$'
          title='Range: 0.0-9.9'
          defaultValue={rating}
        ></input>
      </div>
      <div className='formInput'>
        <label htmlFor='genre'>Genre</label>
        <select id='genre' name='genre' defaultValue={genre} multiple>
          <option value=''>Select Genre</option>
          <option value='Drama'>Drama</option>
          <option value='Comedy'>Comedy</option>
          <option value='Superhero'>Superhero</option>
          <option value='Crime'>Crime</option>
        </select>
      </div>
      <div className='formInput'>
        <label htmlFor='runtime'>Runtime</label>
        <input
          type='text'
          id='runtime'
          name='runtime'
          pattern='^[0-9]*'
          placeholder='minutes'
          title='Positive number'
          defaultValue={runtime}
        ></input>
      </div>
      <div className='formInput overviewInput'>
        <label htmlFor='overview'>Overview</label>
        <textarea
          id='overview'
          name='overview'
          rows='4'
          placeholder='Movie Description'
          defaultValue={overview}
        ></textarea>
      </div>
    </>
  );
};

MovieForm.propTypes = {
  movieTitle: PropTypes.string,
  releaseDate: PropTypes.instanceOf(Date),
  movieUrl: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.array,
  runtime: PropTypes.number,
  overview: PropTypes.string,
};

export default MovieForm;
