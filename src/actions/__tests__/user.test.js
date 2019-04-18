import configureMockStore from 'redux-mock-store';
import {
  fetchUserInfoBegin,
  fetchUserInfoError,
  fetchUserInfoSuccess,
} from '../user';

const mockStore = configureMockStore();
const store = mockStore({});

describe('User action creators', () => {
  it('creates FETCH_USER_INFO_BEGIN before making API call', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    store.dispatch(fetchUserInfoBegin());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates FETCH_USER_INFO_SUCCESS when api call is made successfully', () => {
    store.dispatch(fetchUserInfoSuccess());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates FETCH_USER_INFO_ERROR when API call fails', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    store.dispatch(fetchUserInfoError());
    expect(store.getActions()).toMatchSnapshot();
  });
});
