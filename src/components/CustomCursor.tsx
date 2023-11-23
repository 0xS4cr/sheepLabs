import React, { useEffect } from 'react';
import '../sass/customCursor.scss';

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            const cursor = document.getElementById('cursor');
            const follower = document.getElementById('follower');
            const x = e.clientX;
            const y = e.clientY;

            if (cursor) {
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
            }

            if (follower) {
                setTimeout(() => {
                    follower.style.left = x + 'px';
                    follower.style.top = y + 'px';
                }, 100);
            }
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    return (
        <>
            <div id="cursor"></div>
            <div id="follower"></div>
        </>
    );
};

export default CustomCursor;
