import React, { Component } from 'react';

const About = () => {
    return (
      <div id="about">
        <div className="about-top">
          <div className="about-top-h1">
            <h1>
              Creator<br />
              Collaborator<br />
              Devisor
            </h1>
          </div>
        </div>
            <hr />
        <div className="about-bottom">
          <div className="about-bottom-cred">
            <p>
              I build stories and I tell stories. <br />
              Full Stack web developer using <br />
              CSS, JS, Node, React, Rails, PostgreSQL. <br />
              Dabbles in Python, Pandas, PHP, D3. <br />
              Other software proficiences include: <br />
              Final Cut Pro, Protools, Photoshop, Illustrator,
              Isadora, QLab and Publisher.
            </p>
            <p>
              Specializes in devised work and creating immersive
              theatrical worlds.
              Experienced with lighting design,
              sound design, and scoring. <br /> <br />
              Takes some pictures from time to time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  export default About;
