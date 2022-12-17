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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            reiciendis eum incidunt, doloremque natus ut asperiores, quae fuga
            numquam consequatur quasi. Possimus sunt nulla doloribus nam unde
            excepturi iure eligendi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;
