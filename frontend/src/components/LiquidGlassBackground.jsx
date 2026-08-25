import React from 'react';

export default function LiquidGlassBackground() {
  return (
    <div className="liquid-glass-background" aria-hidden="true">
      <div className="color-field">
        <div className="cf-blob cf-1"></div>
        <div className="cf-blob cf-2"></div>
        <div className="cf-blob cf-3"></div>
        <div className="cf-blob cf-4"></div>
      </div>
      <div className="liquid-grain"></div>
    </div>
  );
}
