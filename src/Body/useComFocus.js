import { useEffect } from "react";

export default function useComFocus(node, callback) {
  const handleClick = (event) => {
    if (node.current.contains(event.target)) {
      return;
    }
    callback();
  };

  //incase of clicking outside of the the currently focused item
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
}
