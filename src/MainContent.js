import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <div className="image-container">
          <div className="background-image"></div>
        </div>
        <div className="content-card">
          <h2>Hello!</h2>
          <p>Welcome to our React Front-End Development Hub, where creativity and innovation converge to craft digital experiences that captivate and inspire. With a passion for pixels and an eye for detail, we transform design into beautifully functional websites that leave a lasting impression. Our mission is to empower brands with seamless user interfaces, cross-browser compatibility, and optimized performance. Join us on this journey of turning ideas into exceptional web realities, one pixel at a time..!</p>
          <button className="learn-button">Get Started</button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;


