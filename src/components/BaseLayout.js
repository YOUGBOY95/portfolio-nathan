import React, { useEffect, useState, useMemo } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaStackOverflow } from 'react-icons/fa';
import { FaCodepen} from 'react-icons/fa';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function BaseLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleToggleDarkMode() {
    const oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    const detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  const allowedPaths = useMemo(() => ["/", "/moi",  "/projets"], []);

  useEffect(() => {
    const isAllowedPath = allowedPaths.includes(location.pathname);
    if (!isAllowedPath) {
      const redirectTimer = setTimeout(() => {
        navigate('/');
      }, 3000);

      return () => {
        clearTimeout(redirectTimer);
      };
    }
  }, [location.pathname, navigate, allowedPaths]);

  const year = new Date().getFullYear();

  
  const isHomePage = location.pathname === "/";

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moi" element={<About />} />
            <Route path="/projets" element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
            <p>SITE CRÉÉ PAR <a href={'/'}>NATHAN PINARD</a></p>
            <p>&copy; {year}</p>

            {!isHomePage && (
              <div className={Style.socialMediaContainer}>
                <div className={Style.socialMediaSeparator} />
                
                <a href="https://github.com/YOUGBOY95"><GitHubIcon className={Style.socialMediaIcon} /></a>
                <a href="https://twitter.com/Kawwws_"><TwitterIcon className={Style.socialMediaIcon} /></a>
                <a href="https://stackoverflow.com/users/20169507/nathan"><FaStackOverflow className={Style.socialMediaIcon} /></a>
                <a href="https://codepen.io/YOUNGBOY95"><FaCodepen className={Style.socialMediaIcon} /></a>
                <a href="https://www.linkedin.com/in/nathan-pinard-5627651b8/"><LinkedInIcon className={Style.socialMediaIcon} /></a>
                <div className={Style.socialMediaSeparator} />
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
