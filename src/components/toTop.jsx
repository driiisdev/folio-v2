import { useState } from "react";

const ToTop = () => {
  const [show, setShow] = useState(false);

  const visibility = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300? setShow(true) : setShow(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", visibility);
  return (
    <>
        <button className="toTop" style={{display: show? "block" : "none" }} onClick={scrollToTop}>
            <span className="iconify" data-icon="ep:arrow-up"></span>
        </button>
    </>
  )
}

export default ToTop;
