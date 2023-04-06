import React from "react";

const Contact = () => {
  return (
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
                <td>dineshkhanal@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+977-9861915685</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  Dhapasi, Tokha municipality
                  <br />
                  Kathmandu, Nepal
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
