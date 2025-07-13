import React from 'react';
import { useTimeAndWeather } from '../hooks/useTimeAndWeather';

const Footer: React.FC = () => {
  const { weather, error, defaultLocation, displayTime } = useTimeAndWeather();

  return (
    <>
      <footer className="mx-12 bg-gray-100 py-2 border-t border-black flex justify-between text-sm text-gray-600">
        <h6>
          {weather ? `${weather.location.name}, ${weather.location.country}` : defaultLocation} | <span className='font-semibold'>{displayTime}</span> &nbsp;
          {weather && (
            <span>
              <img className='h-7 w-auto inline' src={weather.current.condition.icon} alt={weather.current.condition.text} />
            </span>
          )}
          {error && <span className='h-7 w-auto text-red-500 inline'>⚠</span>}
        </h6>
        <h6><span className='font-semibold'>Designed</span> by Idris Yakub</h6>
      </footer>
    </>
  );
};

export default Footer;
