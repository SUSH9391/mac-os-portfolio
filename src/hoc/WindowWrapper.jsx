import { useRef } from 'react';
import { useWindowStore } from '#store/windowStore';
import { useGSAP } from '@gsap/react';

const WindowWrapper = (Component, windowKey) => {
  const Wrapper = (props) => {
    const { focusWindow, windows } = useWindowStore();

    const windowData = windows[windowKey] || {};
    const { isOpen, zIndex } = windowData;

    const ref = useRef(null);
    useGSAP(() => {
      if(!ref.current || !isOpen) return;

      ref.current.style.display = "block"
    }, [isOpen])
    // Optional: don't render if not open
    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
        onClick={() => focusWindow(windowKey)} // if that's how you use it
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapper.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapper;
};

export default WindowWrapper;
