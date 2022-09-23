import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavbarComp.module.css";

const NavbarComp = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar_comp}>
      {location.pathname !== "/submit-text" && (
        <Link to="/submit-text">Submit Text to get GIF</Link>
      )}
      {location.pathname !== "/display-gif" && (
        <Link to="/display-gif">Display GIF Images</Link>
      )}
    </div>
  );
};

export default NavbarComp;
