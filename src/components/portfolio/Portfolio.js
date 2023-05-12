import React, { useState, useEffect } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Style from '../about/About.module.scss';

export default function Portfolio() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      );
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <Box>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
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
