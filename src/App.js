import { useState, useEffect } from "react";
import "./App.css";

function App() {
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
    <div className="container">
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
            and I'm a <span id="tpd"></span>
          </h3>
          <button>Hire me</button>
        </div>
      </section>
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
      <section id="skills" className="sec-head">
        <h1>
          Skills<span>What I know</span>
        </h1>
        <div className="detail">
          <div className="left">
            <h3>My creative skills & experience</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              ipsa voluptates minima doloribus ratione, corporis distinctio quod
              consectetur quas rerum nisi cumque officiis quidem similique
              incidunt iure ducimus maxime laborum. Dolorum ipsa voluptates
              minima doloribus ratione, corporis distinctio quod consectetur
              quas rerum nisi cumque officiis quidem similique incidunt.
            </p>
            <button>Read More</button>
          </div>
          <div className="right">
            <h3>
              HTML<span>90%</span>
            </h3>
            <div className="hr">
              <div className="html"></div>
            </div>
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
              PHP<span>80%</span>
            </h3>
            <div className="hr">
              <div className="php"></div>
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
      <section id="team" className="sec-head">
        <h1>
          My Team<span>Who with me</span>
        </h1>
        <div className="detail">
          <div className="card">
            <img src="./image/Pratibha.JPG" alt="pratibha" />
            <h2>Pratibha Khanal</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <img src="./image/Shailesh.JPG" alt="shailesh" />
            <h2>Shailesh Khanal</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card">
            <img src="./image/Shailaja.JPG" alt="shailaja" />
            <h2>Shailaja Khanal</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="sec-head">
        <h1>
          Contact Us<span>Get in touch</span>
        </h1>
        <div className="detail">
          <form className="left-part">
            <h3>Send Your Request</h3>
            <div className="control-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="First Last" />
            </div>
            <div className="control-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" placeholder="+977-0123456789" />
            </div>
            <div className="control-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="example@hotmail.com" />
            </div>
            <div className="control-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="my subject" />
            </div>
            <div className="message-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5"></textarea>
            </div>
            <button>SEND</button>
          </form>
          <div className="right-part">
            <h3>Reach Us</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>contactus@example.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+977-984123456</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    2/47, Badigyan Tole
                    <br />
                    Tansen, Palpa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default App;
