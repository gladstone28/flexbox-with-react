import React from 'react';
import '../App.css';

const Expertise = () => {
  return (
    <div className="container">
      <h2 id="expertise">Our Expertise.</h2>
      <div className="main">
        <div className="spacer">
          <div className="cards">
            <div className="col">
              <img src="https://content.codecademy.com/projects/headlines/p1.jpg" alt="Expertise 1" />
              <img src="https://content.codecademy.com/projects/headlines/p6.jpg" alt="Expertise 2" />
              <img src="https://content.codecademy.com/projects/headlines/p8.jpg" alt="Expertise 3" />
            </div>
            <div className="col">
              <img src="https://content.codecademy.com/projects/headlines/p2.jpg" alt="Expertise 4" />
              <img src="https://content.codecademy.com/projects/headlines/p5.jpg" alt="Expertise 5" />
              <img src="https://content.codecademy.com/projects/headlines/p7.jpg" alt="Expertise 6" />
            </div>
            <div className="col">
              <img src="https://content.codecademy.com/projects/headlines/p3.jpg" alt="Expertise 7" />
              <img src="https://content.codecademy.com/projects/headlines/p4.jpg" alt="Expertise 8" />
              <img src="https://content.codecademy.com/projects/headlines/p9.jpg" alt="Expertise 9" />
              <img src="https://content.codecademy.com/projects/headlines/p10.jpg" alt="Expertise 10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
