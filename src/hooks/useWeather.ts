import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../actions/weatherActions';
import { WeatherData } from '../types';

export const useWeather = (postalCode: string) => {
  return useQuery<WeatherData>({
    queryKey: ['weather', postalCode],
    queryFn: () => fetchWeather(postalCode),
    refetchInterval: 5 * 60 * 1000, 
    enabled: !!location,
  });
};
