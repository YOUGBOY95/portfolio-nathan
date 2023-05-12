import React, { useEffect, useState, useMemo } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import NotFound from './NotFound';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
            <p>SITE CRÉÉ  PAR <a href={'/'}>NATHAN PINARD</a></p>
            <p>&copy; {year}</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
