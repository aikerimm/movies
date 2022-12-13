import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import Button from '../util/Button';
import allGenres from '../util/allGenres';

const validate = (values) => {
  let text = '';
  if (!values.overview) {
    text += 'Overview can not be empty. ';
  }
  if (!values.title) {
    text += 'Title can not be empty. ';
  }
  if (!values.release_date) {
    text += 'Release date can not be empty. ';
  }
  if (!values.poster_path) {
    text += 'Movie url can not be empty. ';
  }
  if (!values.genres || values.genres.length == 0) {
    text += 'At least 1 genre is required. ';
  }
  if (values.runtime && !/^[0-9]{1,3}$/.test(values.runtime)) {
    text += 'Runtime should be a number between 0 and 999. ';
  }
  if (values.vote_average) {
    let voteAverage = Number.parseFloat(values.vote_average);
    if (isNaN(values.vote_average) || voteAverage < 0 || voteAverage > 10) {
      text += 'Rating should be a number between 0.0 and 10.0. ';
    }
  }
  return text === '' ? {} : { text: text };
};

const MovieForm = ({
  movie: {
    title,
    release_date,
    genres,
    overview,
    runtime,
    vote_average,
    poster_path,
    id,
  } = {
    title: '',
    release_date: '',
    genres: [],
    overview: '',
    runtime: '',
    vote_average: '',
    poster_path: '',
  },
  onMovieFormSubmit,
}) => {
  const formik = useFormik({
    initialValues: {
      title: title,
      poster_path: poster_path,
      release_date: release_date,
      vote_average: vote_average,
      genres: genres,
      runtime: runtime,
      overview: overview,
    },
    onSubmit: async (values) => {
      await onMovieFormSubmit(values, id);
    },
    validate: validate,
  });

  return (
    <form onSubmit={formik.handleSubmit} className='addMovieForm'>
      <div className='formInput'>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          name='title'
          placeholder='Movie Title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className='formInput'>
        <label htmlFor='release_date'>Release Date</label>
        <input
          id='release_date'
          type='date'
          name='release_date'
          onChange={formik.handleChange}
          value={formik.values.release_date}
        />
      </div>
      <div className='formInput'>
        <label htmlFor='movieUrl'>Movie Url</label>
        <input
          id='poster_path'
          type='url'
          name='poster_path'
          placeholder='https://'
          onChange={formik.handleChange}
          value={formik.values.poster_path}
        />
      </div>
      <div className='formInput'>
        <label htmlFor='vote_average'>Rating</label>
        <input
          id='vote_average'
          type='text'
          name='vote_average'
          placeholder='for ex. 9.9'
          onChange={formik.handleChange}
          value={formik.values.vote_average}
        />
      </div>
      <div className='formInput'>
        <label htmlFor='genres'>Genre</label>
        <select
          id='genres'
          name='genres'
          multiple
          onChange={formik.handleChange}
          value={formik.values.genres}
        >
          {allGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className='formInput'>
        <label htmlFor='runtime'>Runtime</label>
        <input
          id='runtime'
          type='text'
          name='runtime'
          placeholder='in minutes'
          onChange={formik.handleChange}
          value={formik.values.runtime}
        />
      </div>
      <div className='formInput overviewInput'>
        <label htmlFor='overview'>Overview</label>
        <textarea
          id='overview'
          name='overview'
          rows='4'
          placeholder='Movie Description'
          onChange={formik.handleChange}
          value={formik.values.overview}
        />
      </div>
      {formik.errors.text && <p className='redText'>{formik.errors.text}</p>}
      <div className='btnContainer'>
        <Button value='Reset' type='cancel' onClick={formik.handleReset} />
        <Button value='Submit' type='submit' isFormSubmit={true} />
      </div>
    </form>
  );
};

MovieForm.propTypes = {
  onMovieFormSubmit: PropTypes.func,
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
    id: PropTypes.number.isRequired,
  }),
};

export default MovieForm;
