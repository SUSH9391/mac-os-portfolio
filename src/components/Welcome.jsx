import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, classname, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={classname}
      // NOTE: fontVariationSettings must include the axis name in quotes, then the number
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;
  const letters = container.querySelectorAll("span");
  const { min, max , default: base} = FONT_WEIGHTS[type];

  // set baseline weight explicitly so the spans start at the expected weight

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",

      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    // Uncomment the following for debug
    // console.log("Mouse X relative:", mouseX);

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 15000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () => 
    letters.forEach((letter) => animateLetter(letter, base, 0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mousemove", handleMouseLeave);

  // Return a cleanup function to remove event listener
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mousemove", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");    

    return () => {
      titleCleanup && titleCleanup();
      subtitleCleanup && subtitleCleanup();
    }
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Sushmitha! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama", 700)}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/table screens</p>
      </div>
    </section>
  );
};

export default Welcome;
