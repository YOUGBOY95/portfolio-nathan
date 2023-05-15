import React, { useState,  useEffect } from "react";
import classNames from "classnames";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Box, Icon } from "@mui/material";
import { Home, AccountCircle, Work, Description, } from "@mui/icons-material";
import { info } from "../info/Info";
import { Link } from "react-router-dom";
import {  pdfjs } from "react-pdf"; // importer un pdf et ainsi le DL


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // importer un pdf


const links = [
  {
    name: "Accueil",
    to: "/",
    active: "Accueil",
    icon: <Home />,
  },
  {
    name: "Moi",
    to: "/moi",
    active: "Moi",
    icon: <AccountCircle />,
  },
  {
    name: "MON CV",
    download: "CV_PINARD_NATHAN.pdf",
    active: "CV",
    icon: <Description />,
  },
  {
    name: "Projets",
    to: "/projets",
    active: "Projets",
    icon: <Work />,
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const [active, setActive] = useState(
    typeof window !== "undefined" && window.location.pathname === "/"
      ? "home"
      : window.location.pathname.slice(1)
  );

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      if (
        window.location.pathname === "/" &&
        window.scrollY > scrollPosition
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = require("../img/cv_PINARD_NATHAN.pdf");
    link.download = "CV_PINARD_NATHAN.pdf";
    link.click();
  };

  const navbarClasses = classNames(Style.navbar, {
    [Style.scrolled]: scrollPosition > window.innerHeight * 0.3,
    [Style.fixedNavbar]: scrollPosition > window.innerHeight * 0.3,
  });

  return (
    <Box
      component="nav"
      className={`${navbarClasses} ${Style.mobileNavbar}`}
      width="100%"
      style={{ display: showNavbar ? "block" : "none" }}
    >

<Box
  component={"ul"}
  className={`${Style.iconMargin} ${Style.iconMarginMobile}`}
  display={"flex"}
  justifyContent={"center"}
  alignItems={"center"}
  gap={{ xs: "2.5rem", md: "10rem" }}
  style={{
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "1rem",
  }}
>
        
        {links.map((link, index) => (
  <Box
    key={index}
    component={"li"}
    className={
      link.active === active && !link.type ? Style.active : null
    }
    sx={{ borderImageSource: info.gradient }}
  >
    {link.name === "MON CV" ? (
      <a
        href="/"
        onClick={handleCVDownload}
        className={Style.link}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon className={Style.iconMargin}>{link.icon}</Icon>
          {!link.type && <p className={`${Style.name} ${Style.hideOnMobile}`}>{link.name}</p>}
          {link.type && <h1>{link.name}</h1>}
        </div>
      </a>
    ) : (
      link.to.startsWith("http") ? (
        <a
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className={Style.link}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon className={Style.iconMargin}>{link.icon}</Icon>
            {!link.type && <p className={`${Style.name} ${Style.hideOnMobile}`}>{link.name}</p>}
            {link.type && <h1>{link.name}</h1>}
          </div>
        </a>
      ) : (
        <Link
          to={link.to}
          onClick={() => setActive(link.active)}
          className={Style.link}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
          <Icon className={Style.iconMargin}>{link.icon}</Icon>
          {!link.type && <p className={`${Style.name} ${Style.hideOnMobile}`}>{link.name}</p>}
            {link.type && <h1>{link.name}</h1>}
          </div>
        </Link>
      )
    )}
  </Box>
))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
