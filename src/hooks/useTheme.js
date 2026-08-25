import { useCallback, useEffect, useState } from "react";

const getInitial = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const useTheme = () => {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return [theme, toggle];
};

export default useTheme;
