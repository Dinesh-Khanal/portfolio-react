import React from "react";

const Team = () => {
  return (
    <section id="team" className="sec-head">
      <h1>
        My Team<span>Who with me</span>
      </h1>
      <div className="detail">
        <div className="card">
          <img src="./image/Pratibha.JPG" alt="pratibha" />
          <h2>Pratibha Khanal</h2>
          <p>
            She is management assistant. She manage for working environment for
            our team
          </p>
        </div>
        <div className="card">
          <img src="./image/Shailesh.JPG" alt="shailesh" />
          <h2>Shailesh Khanal</h2>
          <p>
            He is Business analyst. He identified the business requirement and
            provide system design
          </p>
        </div>
        <div className="card">
          <img src="./image/Shailaja.JPG" alt="shailaja" />
          <h2>Shailaja Khanal</h2>
          <p>
            She is frontend designer, she design front end as per the business
            requirement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
