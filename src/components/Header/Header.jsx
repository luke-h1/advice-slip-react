import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom';
const Header = ({ title }) => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-link-title">
            {' '}
            <h1>{title}</h1>
          </Link>

          <Link to="/about" className="header-link-about">
            <h3>About</h3>
          </Link>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  title: 'Advice app react',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
