import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoMdDownload } from 'react-icons/io';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../components/Style/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='content-wrapper'>
          <div className='text-content'>
            <p className='intro'>Hey! I'm</p>
            <h1 className='name'>PAUL FRANCIS</h1>
            <h2 className='title'>Frontend Developer</h2>
            <p className='description'>
              I specialize in building exceptional digital experiences. Currently focused on creating responsive full-stack web applications that solve real-world problems.
            </p>
            <div className='cta-container'>
              <Link to="/work" className='cta-button primary'>
                View Work
                <span className='cta-button-icon'>
                  <HiArrowNarrowRight />
                </span>
              </Link>
              <div className='cv-buttons'>
                <a href="/CV/Paul Francis Modifie CV.pdf" download className='cta-button secondary'>
                  Download CV
                  <span className='cta-button-icon'>
                    <IoMdDownload />
                  </span>
                </a>
                <a href="/CV/Paul Francis Modifie CV.pdf" target="_blank" rel="noopener noreferrer" className='cta-button secondary'>
                  View CV
                  <span className='cta-button-icon'>
                    <FaExternalLinkAlt />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='image-container'>
            <div className='profile-image'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;