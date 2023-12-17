// VideoPlayer.js
"use client"

import React, { useRef, useState } from 'react';

const Player = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className='flex items-center justify-center md:ml-32 md:mt-10  md:w-9/12 lg:w-max sm:w-80 lg:mt-8 sm:ml-16 lg:-ml-0 xl:ml-72'>
      <video className='md:mt-2 md:-ml-4 lg:ml-10' ref={videoRef} width="1200" height="800">
        <source
          src="/image/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="md:mt-20 lg:-ml-28">
      <div className='md:mt-96 items-center justify-center md:-ml-72 sm:mt-72 lg:mt-96'>
        <button className='bg-blue-300 rounded-md w-24 -ml-72 lg:mt-56' onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <input className='md:ml-6 md:mt-5 sm:ml-12'
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={handleVolumeChange}
        />
      </div>
      </div>
    </div>
  );
};

export default Player;
