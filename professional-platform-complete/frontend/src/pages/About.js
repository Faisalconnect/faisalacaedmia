import React from 'react';

const About = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our company, mission, and values.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Story</h2>
              <p>
                We are a dedicated team of professionals committed to delivering excellence in everything we do. 
                With years of experience in the industry, we have built a reputation for quality, reliability, and innovation.
              </p>
              <p>
                Our mission is to provide outstanding services that help our clients achieve their goals while 
                maintaining the highest standards of professionalism and integrity.
              </p>
            </div>
            <div>
              <h2>Our Values</h2>
              <ul>
                <li><strong>Quality:</strong> We never compromise on the quality of our work</li>
                <li><strong>Innovation:</strong> We stay ahead of industry trends and technologies</li>
                <li><strong>Integrity:</strong> We conduct business with honesty and transparency</li>
                <li><strong>Customer Focus:</strong> Our clients' success is our priority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;