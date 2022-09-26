import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavbarComp.module.css";

const NavbarComp = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar_comp}>
      {location.pathname !== "/" && (
        <Link to="/">Submit Text to get GIF</Link>
      )}
      {location.pathname !== "/produce-gif" && (
        <Link to="/produce-gif">Produced GIF Images</Link>
      )}
    </div>
  );
};

export default NavbarComp;
