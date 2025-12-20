import { useLayoutEffect, useRef } from "react";
import { useWindowStore } from "#store/windowStore";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
const WindowWrapper = (Component, windowKey) => {
  const Wrapper = (props) => {
    const { focusWindow, windows } = useWindowStore();

    const windowData = windows[windowKey] || {};
    const { isOpen, zIndex } = windowData;

    const ref = useRef(null);
    useGSAP(() => {
      if (!ref.current || !isOpen) return;

      ref.current.style.display = "block";

      // Optional: don't render if not open
      gsap.fromTo(
        ref.current,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      if (!ref.current || isOpen) return;
     const[instance] = 
     Draggable.create(ref.current, {
       onPress: () => focusWindow(windowKey) });
      return () => instance.kill();
    }, [isOpen]);

    useLayoutEffect(() => {
      if (!ref.current) return;
      ref.current.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute">
        <Component {...props} />
      
        
      </section>
    );
  };

  Wrapper.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapper;
};

export default WindowWrapper;
