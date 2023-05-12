import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { info } from '../../info/Info';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function About() {
  const firstName = info.firstName.toLowerCase();
  

  const [color, setColor] = useState(info.baseColor);

  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(
        window.scrollY > 0 && 
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const colors = ['#ff69b4', '#00ff00', '#87cefa', '#ffa500', '#B2E6FF',];
    let i = 0;
    const interval = setInterval(() => {
      setColor(colors[i]);
      i = (i + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about {firstName}{' '}
        </p>
        <p>
          <span style={{ color }}>
            about {firstName} <span className={Style.green}>(main)</span> $
          </span>{' '}
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd compétences
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            compétences{' '}
            <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <p style={{ color: info.baseColor }}> LANGAGES | FRAMEWORKS</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> DESIGN</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd mes passions | centre d'intérêt
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            MES PASSIONS | CENTRE D'INTÉRÊT{' '}
            <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'3rem'}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
      {showButton && (
        <div className={Style['scroll-to-top-button']}>
          <button onClick={handleScrollToTop}>
            <ArrowUpwardIcon />
          </button>
        </div>
      )}
    </Box>
  );
      }