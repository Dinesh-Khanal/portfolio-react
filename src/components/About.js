import React from "react";

const About = () => {
  return (
    <section id="about" className="sec-head">
      <h1>
        About Me<span>Who I am</span>
      </h1>
      <div className="detail">
        <div className="myphoto">
          <img src="./image/Dinesh.jpg" alt="Its me" />
        </div>
        <div className="other">
          <h3>I am Dinesh Khanal and I'm from Nepal</h3>
          <p>
            I am a professional full stack web developer. I develpe web
            application using react, typescript, node js, express, mongodb.
            Client satisfaction is my primary motto. Coding and programming is
            also my hobby. I always enjoy creating new things. Thanks for
            reviewing my portfolio page. I will try my best if you provide an
            oppertunity to work for you.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
