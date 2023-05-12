import React, { useEffect, useRef } from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Typed from 'typed.js';


export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Un développeur front - end junior",
        "Un étudiant en informatique",
        "Un étudiant qui a soif d'apprentissage",
        "Un grand fan de sneakers"
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      smartBackspace: true,
      showCursor: false
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={'image of developer'}
        style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '35vh', md: '45vh' }}
        height={{ xs: '35vh', md: '45vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '5rem' }}
      />
      <div> {}
        <Box>
          <h1>
            Bonjour ! Je suis{' '}
            <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {info.firstName}
            </span>
            <span className={Style.hand}> 👋</span>
          </h1>
          <br></br>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>
                <div ref={typedRef} className={Style.typed} />
            </h2>
          </div>
          <Box component={'ul'} p={'1rem'}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
            ))}
            <br></br><br></br>
          </Box>
          <Box display={'flex'} gap={'2.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
            {info.socials.map((social, index) => (
              <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
            ))}
          </Box>
        </Box>
      </div> {}
    </Box>
  );
}
