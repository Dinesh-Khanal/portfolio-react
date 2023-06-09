import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="sec-head">
      <h1>
        Skills<span>What I know</span>
      </h1>
      <div className="detail">
        <div className="left">
          <h3>My creative skills & experience</h3>
          <p>
            Over 5 year of experience in designing, developing, and managing web
            application. Expertise in build responsive web application, mobile
            apps, and interactive features for improved UX. Proficient in CSS, 
            Javascript / Typescript, React, Node.js, Next Js, MongoDB and Mongoose,
            Express. Working with RESTful APIs, GraphQL, payment gateway such as
            stripe and PayPal. Knowledge of CI/CD (with GitHub Action) and
            Docker container. Excellent debugging and troubleshooting skills,
            experienced in remote working Good communication and interpersonal
            skills to work within the team and maintain great customer
            relationship Quick learner and always up to date with the new
            technology updates
          </p>
          <button>Read More</button>
        </div>
        <div className="right">
          <h3>
            CSS<span>90%</span>
          </h3>
          <div className="hr">
            <div className="css"></div>
          </div>
          <h3>
            JavaScript<span>80%</span>
          </h3>
          <div className="hr">
            <div className="js"></div>
          </div>
          <h3>
            React<span>80%</span>
          </h3>
          <div className="hr">
            <div className="react"></div>
          </div>
          <h3>
            Next Js<span>90%</span>
          </h3>
          <div className="hr">
            <div className="html"></div>
          </div>
          <h3>
            React Native<span>70%</span>
          </h3>
          <div className="hr">
            <div className="rnative"></div>
          </div>
          <h3>
            Node Js<span>70%</span>
          </h3>
          <div className="hr">
            <div className="node"></div>
          </div>
          <h3>
            Mongo DB<span>75%</span>
          </h3>
          <div className="hr">
            <div className="mongo"></div>
          </div>
          <h3>
            Express<span>80%</span>
          </h3>
          <div className="hr">
            <div className="express"></div>
          </div>
          <h3>
            MySql<span>80%</span>
          </h3>
          <div className="hr">
            <div className="sql"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
