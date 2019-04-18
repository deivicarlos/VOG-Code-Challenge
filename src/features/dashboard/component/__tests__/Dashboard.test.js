import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  const logoutUser = jest.fn();
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      isAuthenticated: true,
      user: { firstName: 'Carlos', lastName: 'Garcia' },
      fetchUserInfo: jest.fn(),
      logoutUser,
    };
    wrapper = mount(<Dashboard {...props} />);
  });

  it('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call logoutUser on button click', () => {
    wrapper.find('button').prop('onClick')();
    expect(logoutUser).toHaveBeenCalled();
  });
});
