'use client';

import { useState } from 'react';

export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {!videoLoaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-white z-0" />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
