import React, { useEffect, useState, useRef } from "react";

const SmoothScroll = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const wrapper = document.querySelector<any>(".pagewrapper");

    const ease = 0.05;

    const scroll = {
      current: 0,
      target: 0,
      limit: 0,
    };

    const updateTarget = (e: any) => {
      scroll.target += e.deltaY;
    };

    document.addEventListener("mousewheel", updateTarget);

    const lerp = (current: any, target: any) => {
      const distanceBetween = target - current;

      const distanceToTravel = distanceBetween * ease;

      return current + distanceToTravel;
    };

    const clamp = (min: any, max: any, value: any) => {
      const clamped = Math.min(Math.max(value, min), max);
      return clamped;
    };

    const smoothScroll = () => {
      const maxScroll = wrapper.clientHeight - window.innerHeight;

      scroll.target = clamp(0, maxScroll, scroll.target);

      const { current, target } = scroll;

      const transition = lerp(current, target);
      scroll.current = transition;

      //@ts-ignore
      wrapper.style.transform = translateY(`-${scroll.current}px`);

      window.requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
  }, []);

  return <div className="pagewrapper"></div>;
};

export default SmoothScroll;
