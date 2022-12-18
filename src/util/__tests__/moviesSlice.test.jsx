import reducer, { movieSelected } from '../moviesSlice';

describe('tests for reducers', () => {
  test('movieSelected reducer should set selectedMovie state', () => {
    const previousState = {};
    const payload = { id: 11 };
    expect(reducer(previousState, movieSelected(payload))).toEqual({
      selectedMovie: payload,
    });
  });
});
