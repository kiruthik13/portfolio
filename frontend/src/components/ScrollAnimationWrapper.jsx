import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimationWrapper({ children, animation = 'fade-in-up', delay = 0, threshold = 0.1 }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, isVisible]);

    return (
        <div
            ref={elementRef}
            className={`scroll-animate ${isVisible ? 'visible' : ''}`}
            style={{
                animationDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}
