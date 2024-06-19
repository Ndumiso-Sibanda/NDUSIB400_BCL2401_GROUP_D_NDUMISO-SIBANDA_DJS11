import React from 'react';

const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <img
        src="https://raw.githubusercontent.com/codewithsadee/micro/master/assets/images/hero-title.png"
        alt="Podcast"
        className="home-title"
      />

      <p className="home-text">
      Start your podcast journey today and reach millions of listeners worldwide. Share your stories, inspire others, and make an impact with your voice. Join our community and listen to amazing podcasts on the go. Whether you're a seasoned podcaster or just starting out, we have everything you need to succeed. Let's make your podcast dream a reality!
      </p>

      <div className="home-btn-group">
        <button className="btn btn-primary">
          <ion-icon name="headset"></ion-icon>

          <span>Listen Now</span>
        </button>

        <div className="btn-link-wrapper">
          <p className="btn-title">Subscribe On:</p>

          <a href="#" className="btn-link">
            <ion-icon name="logo-apple"></ion-icon>

            <span>Apple Music</span>
          </a>

          <a href="#" className="btn-link">
            <ion-icon name="logo-soundcloud"></ion-icon>

            <span>SoundCloud</span>
          </a>
        </div>
      </div>
    </div>

    <div className="home-banner"></div>
  </section>
);

export default Home;
