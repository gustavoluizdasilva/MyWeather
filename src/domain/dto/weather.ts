import { ForecastDto } from './forecast';
export interface WeatherDto {
    temperature: number,
    date: string,
    time: string,
    description: string,
    city: string,
    humidity: number,
    wind: string,
    sunrise: string,
    sunset: string,
    forecast: ForecastDto[]
}


////mapear dentro dessa interface, para depois usar esses dados na telas do ap, adicionando a linha do forecast 
// vai mapear dentro daquele forescast