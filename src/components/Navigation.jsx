import React, { useState } from 'react';
import '../css/Navigation.css';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="nav-content">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" /> &nbsp; &nbsp; ProVital
      </div>
      <div className="nav-option">
        <a href="#" className="navbtn">Doctors</a> |
        <a href="#" className="navbtn">List your practice</a> |
        <a href="#" className="navbtn">For Employers</a> |
        <a href="#" className="navbtn">Courses</a> |
        <a href="#" className="navbtn">Books</a> |
        <a href="#" className="navbtn">Speakers</a> |
        <div className="login-signup">
          <button
            className="navbtn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Login/Sign up
          </button>
          {isDropdownOpen && (
            <div className="dropdown">
              <div className="drop-section" style={{ display: 'flex', flexDirection: 'row', gap: '10px', padding: '10px'  }}>
                <span className="drop-title">Doctor</span>
                <div className="drop-links"  style={{ display: 'flex', flexDirection: 'row', gap: '10px'  }}>
                  <a href="#">Login</a>
                  <a href="#">SignUp</a>
                </div>
              </div>
              <div className="drop-section"  style={{ display: 'flex', flexDirection: 'row', gap: '10px' , padding: '10px'  }}>
                <span className="drop-title">Patients</span>
                <div className="drop-links"  style={{ display: 'flex', flexDirection: 'row', gap: '10px'  }}>
                  <a href="#">Login</a>
                  <a href="#">SignUp</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        className="hamburger-menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="dropdown">
          <div className="drop-section">
            <span className="drop-title">Doctor</span>
            <div className="drop-links">
              <a href="#">Login</a>
              <a href="#">Sign up</a>
            </div>
          </div>
          <div className="drop-section">
            <span className="drop-title">Patients</span>
            <div className="drop-links">
              <a href="#">Login</a>
              <a href="#">Sign up</a>
            </div>
          </div>
        </div>
        <ul className="menu-links" style={{ paddingTop: '50px' }}>
          <li className='mobbtn'><a href="#">Doctors </a><span style={{ color: 'blue' }}>Login &nbsp; SignUp</span></li>
          <li className='mobbtn'><a href="#">Patients</a><span style={{ color: 'blue' }}>Login &nbsp; SignUp</span></li>
          <li className='mobbtn'><a href="#">Doctor</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070" />
          </svg></li>
          <li className='mobbtn'><a href="#">List your practice</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070" />
          </svg></li>
          <li className='mobbtn'><a href="#">For Employers</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070" />
          </svg></li>
          <li className='mobbtn'><a href="#">Courses</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070" />
          </svg></li>
          <li className='mobbtn'><a href="#">Books</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070" />
          </svg></li>
          <li className='mobbtn'><a href="#">Speakers</a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070" />
          </svg></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;