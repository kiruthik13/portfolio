import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimationWrapper({
    children,
    animation = 'fade-in-up',
    delay = 0,
    threshold = 0.1
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`scroll-animate ${animation} ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
