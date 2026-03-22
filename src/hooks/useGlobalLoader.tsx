import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useGlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // 3 secondes exactes pour correspondre à la durée du compteur
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return { isLoading, handlePreloaderComplete };
};
