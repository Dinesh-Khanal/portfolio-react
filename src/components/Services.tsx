import React from "react";

const Services = () => {
  return (
    <section id="services" className="sec-head">
      <h1>
        Services<span>What I provide</span>
      </h1>
      <div className="detail">
        <div className="card">
          <i className="fa fa-paint-brush" aria-hidden="true"></i>
          <h2>Web Design</h2>
          <p>
            We design attractive website and web application with appropriate
            design and user experience.
          </p>
        </div>
        <div className="card">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          <h2>Web Development</h2>
          <p>
            We develope reliable web application with appropriate security
            measure.
          </p>
        </div>
        <div className="card">
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <h2>Mobile App Dev.</h2>
          <p>
            We also developes application for mobile device (smartphone and
            tablet computer) running android and ios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
