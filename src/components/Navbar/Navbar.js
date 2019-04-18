import React from 'react';

const Navbar = ({ logoutUser, user }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div className="d-flex w-100 justify-content-between">
      <div className="navbar-brand">{`${user && user.firstName} ${user &&
        user.lastName}`}</div>

      <div className="d-flex align-items-center">
        <button
          type="submit"
          className="btn__color__orange px-4"
          onClick={logoutUser}
        >
          {'Logout'}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
