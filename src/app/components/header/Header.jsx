"use client";
import React, { useState, useEffect } from "react";
import styles from './header.module.css';
import '../../colors.css';

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const toggleMenu = () => {
    console.log('blah')
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>MyLogo</div>
      <nav className={`${styles.header__nav} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <button className={styles.header_action__btn}>Search</button>
        <button className={styles.header_action__btn}>Contact us</button>
      </nav>
      <div className={styles.header__menuIcon} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}></span>
      </div>
    </header>
  );
};

export default Header;

