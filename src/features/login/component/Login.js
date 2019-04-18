import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/InputField/InputField';
import { Field, reduxForm } from 'redux-form';
import { required, email } from '../../../helpers/form-validation';
import Button from 'react-bootstrap-button-loader';

class LoginForm extends PureComponent {
  submitForm = ({ username, password }) => {
    const { loginUser } = this.props;
    loginUser(username, password);
  };

  render() {
    const { handleSubmit, invalid, isLoading } = this.props;

    return (
      <div className="d-flex flex-row h-100 w-100">
        <div id="splash-screen" className="splash-screen h-100 w-50" />
        <div
          id="login__form__container"
          className="d-flex flex-column align-items-center justify-content-center h-100 w-50"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vogcalgaryappdeveloper.com/"
          >
            <div className="VOG-logo mb-2" alt="VOG logo" />
          </a>
          <form onSubmit={handleSubmit(this.submitForm)} noValidate>
            <div className="d-flex flex-column p-4">
              <div className="form-group">
                <Field
                  id="username"
                  name="username"
                  type="text"
                  label="Username"
                  component={InputField}
                  icon="far fa-user"
                  validate={[required, email]}
                />
              </div>

              <div className="form-group">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  component={InputField}
                  icon="fas fa-unlock-alt"
                  validate={required}
                />
              </div>

              <div className="d-flex justify-content-center">
                <Button
                  id="btn__login"
                  type="submit"
                  className="btn w-100"
                  disabled={isLoading || invalid}
                  loading={isLoading}
                >
                  {'Log In'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
  asyncBlurFields: [],
})(LoginForm);
