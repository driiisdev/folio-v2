import { useEffect } from 'react';
import { useTime } from '../store/useStore';
import { useWeather } from './useWeather';

export const useTimeAndWeather = () => {
  const { currentTime, location, postalCode, updateTime } = useTime();
  const { data: weather, isLoading, error } = useWeather(postalCode);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  const getDisplayTime = (): string => {
    if (weather?.location.localtime) {
      const apiTime = new Date(weather.location.localtime);
      return apiTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    }
    // Fallback to current time if API time is not available
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return {
    weather,
    defaultLocation: location,
    isLoading,
    error,
    displayTime: getDisplayTime(),
  };
};
