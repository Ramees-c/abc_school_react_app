import React from "react";
import "./Footer.css";

function Footer() {
  return (
    // Footer section

    <footer>
      <p className='fs-5'> &copy; ABC School {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
