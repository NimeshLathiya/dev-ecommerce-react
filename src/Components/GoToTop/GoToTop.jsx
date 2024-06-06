import React, { useState } from "react";
import "./GoToTop.css";
import { FiArrowUpCircle } from "react-icons/fi";
import { useEffect } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const ListenToScroll = () => {
    let heightToHidden = 250;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log("winScroll", winScroll);

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ListenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FiArrowUpCircle className="topArrowBtn" size={40} />
        </div>
      )}
    </>
  );
};

export default GoToTop;
