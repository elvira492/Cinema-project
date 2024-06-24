import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// if pathname changes then scroll to the top
// -> App.jsx

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return;
}
