import {
  sendAddMovieRequest,
  sendDeleteMovieRequest,
  sendEditMovieRequest,
} from '../apiService';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    );
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('tests for apiService', () => {
  test('should send PUT request for edit movie', () => {
    const fetchMock = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ status: 200 }));
    global.fetch = fetchMock;

    const movieId = 123;
    const movie = {
      title: 'Zootopia',
      overview: 'once upon a time',
      vote_average: '5.5',
    };

    const editMovieResponse = sendEditMovieRequest(movie, movieId);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/movies', {
      method: 'PUT',
      body: '{"title":"Zootopia","overview":"once upon a time","vote_average":5.5,"id":123,"runtime":null}',
      headers: { 'Content-Type': 'application/json' },
    });
    editMovieResponse.then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  test('should send POST request for add movie', () => {
    const fetchMock = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        status: 201,
        json: () => Promise.resolve({ id: 123, title: 'Zootopia' }),
      })
    );
    global.fetch = fetchMock;

    const movie = {
      title: 'Zootopia',
      overview: 'once upon a time',
      vote_average: '5.5',
    };

    const addMovieResponse = sendAddMovieRequest(movie);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/movies', {
      method: 'POST',
      body: '{"title":"Zootopia","overview":"once upon a time","vote_average":5.5,"runtime":null}',
      headers: { 'Content-Type': 'application/json' },
    });
    addMovieResponse.then((response) => {
      expect(response.status).toEqual(201);
      response.json().then((json) => {
        expect(json.id).toEqual(123);
      });
    });
  });

  test('should send delete request for delete movie', () => {
    const fetchMock = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ status: 204 }));
    global.fetch = fetchMock;

    const movieId = 123;

    const deleteMovieResponse = sendDeleteMovieRequest(movieId);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('http://localhost:4000/movies/123', {
      method: 'DELETE',
    });
    deleteMovieResponse.then((response) => {
      expect(response.status).toEqual(204);
    });
  });
});
