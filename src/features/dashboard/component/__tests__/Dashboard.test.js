import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

describe('Dashboard', () => {
  const middlewares = [thunk]; // add your middlewares like `redux-thunk`
  const mockStore = configureStore(middlewares);
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      isAuthenticated: true,
      user: { firstName: 'Carlos', lastName: 'Garcia' },
      fetchUserInfo: () => jest.fn(),
      logoutUser: () => jest.fn(),
    };
    wrapper = mount(<Dashboard {...props} />);
  });

  it('it should render correctly', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
