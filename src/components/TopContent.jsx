import React, { useEffect, useRef } from 'react';
import '../css/TopContent.css';

function TopContent() {
  const logosRef = useRef(null);
  const logosRefR = useRef(null);
  const logosRefM = useRef(null);

  useEffect(() => {
    const logosSlide = logosRef.current.querySelector('.logos-slide');
    const clone = logosSlide.cloneNode(true);
    logosRef.current.appendChild(clone);
  }, []);

  useEffect(() => {
    const logosSlideR = logosRefR.current.querySelector('.logos-slide-r');
    const clone = logosSlideR.cloneNode(true);
    logosRefR.current.appendChild(clone);
  }, []);

  useEffect(() => {
    const logosSlideM = logosRefM.current.querySelector('.logos-slide-m');
    const clone = logosSlideM.cloneNode(true);
    logosRefM.current.appendChild(clone);
  }, []);

  return (
    <div className="top-content">
      <div className="top-image">
        <div className="top-left-image" ref={logosRef}>
          <div className="logos-slide">
            <img src="/images/2.jpg" alt="Left Image 1" className='img' />
            <img src="/images/4.jpg" alt="Left Image 2" className='img' />
            <img src="/images/6.jpg" alt="Left Image 3" className='img' />
            <img src="/images/8.jpg" alt="Left Image 4" className='img' />
          </div>
        </div>

        <div className="top-right-image" ref={logosRefR}>
          <div className="logos-slide-r">
            <img src="/images/1.jpg" alt="Right Image 1" className='img' />
            <img src="/images/3.jpg" alt="Right Image 2" className='img' />
            <img src="/images/5.jpg" alt="Right Image 3" className='img' />
            <img src="/images/7.jpg" alt="Right Image 4" className='img' />
          </div>
        </div>
      </div>

      <div className="top-info">
        <h1 className='herotxt'>
          Book an appointment with
          <br />
          <span className="colot">lifestyle medicine</span> experts
        </h1>
        <p className="sub">Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
      <div className='middle-image'>
        <div className="top-middle-image" ref={logosRefM}>
          <div className="logos-slide-m">
            <img src="/images/1.jpg" alt="Middle Image 1" className='img' />
            <img src="/images/3.jpg" alt="Middle Image 2" className='img' />
            <img src="/images/5.jpg" alt="Middle Image 3" className='img' />
            <img src="/images/7.jpg" alt="Middle Image 4" className='img' />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
