import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath,setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChanged = () => {
      setCurrentPath(window.location.pathname);
    };
    //Listem to change non url history
    window.addEventListener('popstate', onLocationChanged);

    return () => {
      window.removeEventListener('popstate', onLocationChanged);
    };
  }, []);
  return window.location.pathname === path ? children : null;
};
export default Route;
