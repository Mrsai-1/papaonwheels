import React, { useState } from 'react';
import './Marquee.css'; // Import your CSS file for styling

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Function to toggle pause state
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="marquee-container bg-warning"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <div className={`marquee-content ${isPaused ? 'paused' : ''} `}>
        {/* Repeat your content to make it scroll */}
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        {/* Add more content as needed */}
        {/* Repeat the content enough times to ensure it spans the full width */}
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        <span className='marquee text-black'>Join with us </span>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Marquee;
