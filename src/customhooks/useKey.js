import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      const callback = (e) => {
        if (e.code === key) {
          action();
        }
      };

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
