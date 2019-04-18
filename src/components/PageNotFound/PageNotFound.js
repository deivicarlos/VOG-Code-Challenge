import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="d-flex justify-content-center flex-column text-center w-100 px-5 h-100">
    <h1 className="color__dark__orange">{'404'}</h1>
    <h3 className="font-bold color__dark__orange">{'Page Not Found'}</h3>
    <div className="error-desc">
      {
        'Sorry, but the page you are looking for has not been found. Try checking the URL for error, '
      }
      {
        'then hit the refresh button on your browser or try found something else in our app.'
      }
      <div className="container mt-3">
        <Link to="/">
          <button type="button" className="btn__color__orange px-5">
            {'Login'}
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
