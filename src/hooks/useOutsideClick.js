import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  console.log("effect");

  useEffect(() => {
    function handleClick(e) {
      console.log("handleClick");
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("clickoutside");
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, []);

  return { handler, ref };
}
