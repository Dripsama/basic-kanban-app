import { useCallback, useEffect } from "react";

export default function useComFocus(node, callback) {
  //useCallback so that it doesn’t change on every render unless its own dependencies(node, callback) change:
  const handleClick = useCallback(
    (event) => {
      if (node.current.contains(event.target)) {
        return;
      }
      callback();
    },
    [callback, node]
  );
  //incase of clicking outside of the the currently focused item
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);
}
