import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="detail">
      <div className="left">
        <a href="faceboo.com">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="twitter.com">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="instagram.com">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="youtube.com">
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
      <div className="right">
        <p>copyright &copy; 2021 Dinesh Khanal, all right reserved</p>
      </div>
    </section>
  );
};

export default Footer;
