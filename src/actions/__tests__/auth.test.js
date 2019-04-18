import configureMockStore from 'redux-mock-store';
import {
  requestLoginBegin,
  requestLoginSuccess,
  requestLoginError,
} from '../auth';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Auth action creators', () => {
  it('creates LOGIN_REQUEST_BEGIN before making API call', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    store.dispatch(requestLoginBegin());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates LOGIN_REQUEST_SUCCESS when api call is made successfully', () => {
    store.dispatch(requestLoginSuccess());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates LOGIN_REQUEST_ERROR when API call fails', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    store.dispatch(requestLoginError());
    expect(store.getActions()).toMatchSnapshot();
  });
});
