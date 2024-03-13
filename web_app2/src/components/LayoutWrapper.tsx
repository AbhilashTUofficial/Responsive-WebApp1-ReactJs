import React, { useRef, useEffect } from 'react';
import blob1 from "../assets/Images/blob1.gif"
import grans from "../assets/Images/grans.jpg"

function LayoutWrapper({ children }) {
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);



    useEffect(() => {
        const blob1 = blob1Ref.current;
        const blob2=blob2Ref.current;

        const moveBlob = () => {
            const wrapperWidth = blob1.parentElement.clientWidth;
            const blobWidth = blob1.clientWidth;
            const maxOffset = wrapperWidth - blobWidth;
            const randomDuration = Math.random() * 5 + 2; 

            const randomX = Math.random() * maxOffset;
            const randomY = Math.random() * (window.innerHeight - 100); 

            blob1.style.transition = `transform ${randomDuration}s ease-in-out`;
            blob1.style.transform = `translate(${randomX}px, ${randomY}px)`;

            if (randomX >= maxOffset) {
                blob1.style.transform += 'scaleX(1)';
            } else {
                blob1.style.transform += 'scaleX(-1)';
            }


            blob2.style.transition = `transform ${randomDuration}s ease-in-out`;
            blob2.style.transform = `translate(${randomY}px, ${randomX}px)`;

            if (randomX >= maxOffset) {
                blob2.style.transform += 'scaleX(1)';
            } else {
                blob2.style.transform += 'scaleX(-1)';
            }

        };

        const intervalId = setInterval(moveBlob, 5000); 
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='wrapper'>
            <img src={grans} alt="" />
            <div className="blob1" ref={blob1Ref} />
            <div className="blob2" ref={blob2Ref} />
            {children}
        </div>
    );
}

export default LayoutWrapper;
