import React, { useState, useEffect } from "react";
import Link from "next/link";
import headstyle from "./header2.module.css";

const Header2 = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <div
      className={headstyle.manny}
      style={sticky ? { position: "fixed", top: 0 } : {}}
    >
      <nav className={headstyle.navbar}>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path
              fill="#34a853"
              d="M4.5,10H10a3,3,0,0,0,1.07-5.8,4,4,0,0,0-7.48,1A2.5,2.5,0,0,0,4.5,10Zm0-3a1,1,0,0,0,1-1,2,2,0,0,1,3.89-.64,1,1,0,0,0,.78.66A1,1,0,0,1,11,7a1,1,0,0,1-1,1H4.5a.5.5,0,0,1,0-1ZM19,2H14a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v7H3a1,1,0,0,0-1,1v2a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h3a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,20H10V18h4Zm6-5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Z"
            />
          </svg>
          <h1>Sat P.</h1>
        </Link>
        <div className={headstyle.navlinks} id="navLink">
          <ul>
            <li>
              <Link href="/about" className={headstyle.undaline}>
                about
              </Link>
            </li>
            <li>
              <Link href="/projects" className={headstyle.undaline}>
                projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={headstyle.undaline}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
