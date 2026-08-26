import React, { useState, useRef, useEffect } from 'react';

const cinematicVideos = [
  '/Create_a_cinematic_second_b.mp4',
  '/Create_a_cinematic_second_c.mp4',
  '/Create_a_cinematic_second_f.mp4',
];

export default function LiquidGlassBackground() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const isTransitioningRef = useRef(false);

  const nextScene = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIdx((prev) => (prev + 1) % cinematicVideos.length);
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 2000);
  };

  useEffect(() => {
    const activeVideo = videoRefs[currentIdx]?.current;
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }

    // Pause inactive video after crossfade transition to save system resources
    const timer = setTimeout(() => {
      videoRefs.forEach((ref, idx) => {
        if (idx !== currentIdx && ref.current) {
          ref.current.pause();
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIdx]);

  return (
    <div className="liquid-glass-background" aria-hidden="true">
      {/* Ambient Color Blobs Fallback */}
      <div className="color-field">
        <div className="cf-blob cf-1"></div>
        <div className="cf-blob cf-2"></div>
        <div className="cf-blob cf-3"></div>
        <div className="cf-blob cf-4"></div>
      </div>

      {/* 3 Cinematic Background Videos Playing Sequentially */}
      <div className="cinematic-video-container">
        {cinematicVideos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={videoRefs[index]}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onEnded={index === currentIdx ? nextScene : undefined}
            onTimeUpdate={(e) => {
              if (index === currentIdx) {
                const target = e.currentTarget;
                if (target.duration > 0 && target.currentTime >= target.duration - 0.4) {
                  nextScene();
                }
              }
            }}
            className={`cinematic-bg-video ${index === currentIdx ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Cinematic Tint & Vignette Overlay */}
      <div className="cinematic-video-overlay" />

      {/* Tactile Liquid Grain */}
      <div className="liquid-grain" />
    </div>
  );
}
