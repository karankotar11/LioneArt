// components/AnimatedImage.js
import { useEffect, useRef, useState } from "react";

const AnimatedImage = () => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            // Check if the image is in the viewport
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden">

        
        <div
            ref={imageRef}
            className={`bg-red-300 transition-all duration-1000  h-[550px] ${isVisible ? "translate-x-0" : "translate-x-[200%]"}`}
            
        >
            <img
                src="https://media.istockphoto.com/id/1369890290/photo/cyberpunk-urban-samurai.webp?b=1&s=170667a&w=0&k=20&c=AfyqgeRK31i2VBvC8_7a9FEZ8b2fcO53y2R_GjFBTaw=" // Replace with your image path
                alt="Animated"
                className="w-1/2 h-auto"
            />
        </div>
        </div>
    );
};

export default AnimatedImage;
