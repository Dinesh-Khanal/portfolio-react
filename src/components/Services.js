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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            optio.consectetur adipisicing elit.
          </p>
        </div>
        <div className="card">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            optio.consectetur adipisicing elit.
          </p>
        </div>
        <div className="card">
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <h2>Mobile App Dev.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            optio.consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
