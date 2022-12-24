import renderer from 'react-test-renderer';
import ErrorBoundary from '../ErrorBoundary';
import { Provider } from 'react-redux';
import store from '../store.jsx';

it('ErrorBoundary should render correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ErrorBoundary>
          <h1>Success</h1>
        </ErrorBoundary>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
