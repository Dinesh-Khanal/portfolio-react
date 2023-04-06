import { useState, useEffect } from "react";

const Heading = () => {
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navStyle =
    offset > 60
      ? { backgroundColor: "#c7c40c" }
      : { backgroundColor: "transparent" };
  const hiLogoStyle = offset > 60 ? { color: "white" } : { color: "#c7c40c" };
  return (
    <section id="heading">
      <img src="./image/img1.jpg" alt="My pic" />
      <div className="overlay"></div>
      <div className="navbar" style={navStyle}>
        <div className="logo">
          <p>
            Portfo<span style={hiLogoStyle}>lio</span>
          </p>
        </div>
        <ul style={navStyle} className={active ? "active" : ""}>
          <li>
            <a href="#heading">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#team">Teams</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          id="btn"
          onClick={() => setActive(!active)}
          className={active ? "active" : ""}
        >
          <span></span>
        </div>
      </div>
      <div className="nme-head">
        <p>Hello, my name is</p>
        <h1>Dinesh Khanal</h1>
        <h3>
          and I'm a &nbsp;
          <span id="slide">
            <span>Freelancier</span>
            <span>Developer</span>
            <span>Designer</span>
          </span>
        </h3>
        <button>Hire me</button>
      </div>
    </section>
  );
};

export default Heading;
