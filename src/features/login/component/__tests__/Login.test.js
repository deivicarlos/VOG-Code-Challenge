import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../Login';
import { Provider } from 'react-redux';
import {
  requestLoginBegin,
  loginUser,
  logoutUser,
} from '../../../../actions/auth';
import renderer from 'react-test-renderer';

describe('Login', () => {
  const middlewares = [thunk]; // add your middlewares like `redux-thunk`
  const mockStore = configureStore(middlewares);
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isLoading: false,
      loginUser: () => jest.fn(),
    };

    wrapper = mount(
      <Provider store={mockStore({})}>
        <Login {...props} />
      </Provider>
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // it('should render Login component', () => {
  //   console.log('guebo');
  //   const counter = mountedWrapper
  //     .html()
  //     .find('Field')
  //     .filter('#username');
  //   console.log('Counter: ', counter.length);
  // console.log('shallowWrapper: ', shallowWrapper.debug());
  // console.log('mountedWrapper: ', mountedWrapper.html().find('#username'));

  // expect(mountedWrapper).toMatchSnapshot();
  // });
  // it('should render correctly with no props', () => {
  //   const wrapper = shallow(<Login />);

  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('should render two fields', () => {
  //   const wrapper = shallow(<Login />);
  //   const mounted = mount(<Login />);

  //   const fields = wrapper.find('Field');

  //   // expect(fields.length).toEqual(2);
  //   console.log('Shallow :', wrapper.debug());
  //   console.log('Mounted :', mounted.debug());
  // });

  // it('should execute loginUser and fail', () => {
  //   const store = mockStore({});
  //   // // Return the promise
  //   // return Promise.resolve(() => {
  //   //   store.dispatch(loginUser()).then(() => {
  //   //     const actions = store.getActions();
  //   //     expect(actions[0]).toEqual(success());
  //   //   });
  //   // });
  //   const actions = store.getState();
  //   console.log(actions);
  //   // expect(actions[0]).toEqual(requestLoginBegin());
  // });
});
