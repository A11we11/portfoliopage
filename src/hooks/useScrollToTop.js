import { useEffect, useState } from "react";

export const useScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    //add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      //Clean up smooth scroll on unmount
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return showScrollTop;
};
