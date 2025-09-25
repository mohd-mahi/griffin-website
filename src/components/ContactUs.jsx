import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-section padding-section less pb-0">
      <div className="container">
        <div className="form-container">
          <div className="contact-heading-container">
            <h2 className="sub-title">Get in touch with us</h2>
          </div>
          <form action="">
            <div className="form-input-wrapper">
              <div className="form-group">
                <input type="text" name="" id="" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <input type="email" name="" id="" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="tel" name="" id="" placeholder="Mob. No." />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=" Genral enquiries"
                />
              </div>
              <div className="form-group text-area">
                <textarea
                  name=""
                  id=""
                  placeholder="Message..."
                  rows={5}
                ></textarea>
              </div>
            </div>
            <div className="contact-button d-none">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
