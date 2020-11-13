import React from 'react';
import Header from '../../components/Header/Header';
import './About.scss';
const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h2>About This App</h2>
        <p>
          Simple app that calls the Advice Slip API to display random Adivce
        </p>
      </div>
    </>
  );
};
export default About;
