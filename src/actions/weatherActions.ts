import { WeatherData } from '../types';

export const fetchWeather = async (postalCode: string): Promise<WeatherData> => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = import.meta.env.VITE_WEATHER_API_URL;
  
  const response = await fetch(`${apiUrl}?key=${apiKey}&q=${postalCode}&aqi=no`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  return response.json();
};
