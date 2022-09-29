import React, { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";

const ButtonToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button onClick={scrollToTop}>
          <FiChevronsUp />
        </button>
      )}
    </div>
  );
};

export default ButtonToTop;
