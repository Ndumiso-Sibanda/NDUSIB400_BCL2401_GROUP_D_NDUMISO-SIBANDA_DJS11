import React from 'react';

const Home = () => (
  <section className="hero" id="hero">
    <div className="hero-content">
      <img
        src="https://raw.githubusercontent.com/codewithsadee/micro/master/assets/images/hero-title.png"
        alt="Podcast"
        className="hero-title"
      />

      <p className="hero-text">
      Start your podcast journey today and reach millions of listeners worldwide. Share your stories, inspire others, and make an impact with your voice. Join our community and listen to amazing podcasts on the go. Whether you're a seasoned podcaster or just starting out, we have everything you need to succeed. Let's make your podcast dream a reality!
      </p>

      <div className="hero-btn-group">
        <button className="btn btn-primary">
          <ion-icon name="headset"></ion-icon>

          <span>Listen Now</span>
        </button>

        <div className="btn-link-wrapper">
          <p className="btn-title">Subscribe On:</p>

          <a href="https://www.youtube.com/@nduh0656" className="btn-link">
            <ion-icon name="logo-YouTube"></ion-icon>

            <span>YouTube</span>
          </a>

          <a href="https://www.linkedin.com/in/ndumiso-sibanda-304836231/" className="btn-link">
            <ion-icon name="logo-Linkedin"></ion-icon>

            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </div>

    <div className="hero-banner"></div>
  </section>
);

export default Home;
