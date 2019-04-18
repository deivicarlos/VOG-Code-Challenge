import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../Login';
import { Provider } from 'react-redux';

describe('Login', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const loginUser = jest.fn();
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isLoading: false,
      loginUser,
    };

    wrapper = shallow(
      <Provider store={mockStore({})}>
        <Login {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call loginUser on button click', () => {
    const mountedWrapper = mount(
      <Provider store={mockStore({})}>
        <Login {...props} />
      </Provider>
    );

    mountedWrapper.find('form').prop('onSubmit')();
    expect(loginUser).toHaveBeenCalled();
  });
});
