import { useState, useEffect, useRef } from 'react';

export default function Carousel({ items, autoPlay = false, interval = 5000, showDots = true, showArrows = true }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoPlayRef = useRef(null);

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    };

    useEffect(() => {
        if (autoPlay) {
            autoPlayRef.current = setInterval(goToNext, interval);
            return () => clearInterval(autoPlayRef.current);
        }
    }, [currentIndex, autoPlay, interval]);

    const handleMouseEnter = () => {
        if (autoPlay && autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const handleMouseLeave = () => {
        if (autoPlay) {
            autoPlayRef.current = setInterval(goToNext, interval);
        }
    };

    return (
        <div
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', width: '100%' }}
        >
            {/* Carousel Track */}
            <div style={{
                display: 'flex',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(-${currentIndex * 100}%)`,
                width: '100%'
            }}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            minWidth: '100%',
                            opacity: index === currentIndex ? 1 : 0.3,
                            transition: 'opacity 0.5s ease'
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {showArrows && items.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="carousel-arrow carousel-arrow-left"
                        aria-label="Previous slide"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            background: 'rgba(0, 0, 0, 0.6)',
                            border: '1px solid var(--pink)',
                            color: 'white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        ‹
                    </button>
                    <button
                        onClick={goToNext}
                        className="carousel-arrow carousel-arrow-right"
                        aria-label="Next slide"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            background: 'rgba(0, 0, 0, 0.6)',
                            border: '1px solid var(--pink)',
                            color: 'white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        ›
                    </button>
                </>
            )}

            {/* Dots Navigation */}
            {showDots && items.length > 1 && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '20px'
                }}>
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            style={{
                                width: currentIndex === index ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                border: 'none',
                                background: currentIndex === index ? 'var(--pink)' : 'var(--border)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: currentIndex === index ? '0 0 10px rgba(255, 0, 85, 0.5)' : 'none'
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
