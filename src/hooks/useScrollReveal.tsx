import { useEffect } from "react";

const useScrollReveal = () => {

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-show");
                    }
                });
            },
            {
                threshold: 0.2
            }
        );

        const hiddenElements = document.querySelectorAll(".section-hidden");

        hiddenElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();

    }, []);

};

export default useScrollReveal;