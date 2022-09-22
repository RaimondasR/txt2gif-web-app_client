import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavbarComp.module.css";

const NavbarComp = () => {
  const location = useLocation();

  return (
    <div className={`${styles.NavbarComp} ${styles.d_flex} ${styles.row}`}>
      {location.pathname !== "/submit-text" && (
        <Link to="/submit-text">Submit Text to GIF</Link>
      )}
    </div>
  );
};

export default NavbarComp;
