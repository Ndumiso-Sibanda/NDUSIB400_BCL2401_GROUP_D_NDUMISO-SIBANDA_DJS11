import React, { useState, useEffect } from 'react';
import ShowList from './ShowList';



const Header = () => (
  <header className="active" data-header>
    <div className="container">
      <div className="overlay" data-overlay></div>
      <a href="#" className="logo">
        <img
          src="https://raw.githubusercontent.com/codewithsadee/micro/26e662eb173cc36b8d5cb9bbc5716ac40b9b2423/assets/images/logo.svg"
          alt="Micro logo"
        />
      </a>
      <button className="nav-toggle-btn" data-nav-toggle-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <nav className="navbar" data-navbar>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#hero" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#podcast" className="navbar-link">Podcast</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Host</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Blog</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="navbar-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <button className="navbar-btn">
            <ion-icon name="log-in-outline"></ion-icon>
          </button>
          <button className="navbar-btn">
            <ion-icon name="cart-outline"></ion-icon>
          </button>
        
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
