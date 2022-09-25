import { ForecastDto } from './../../dto/forecast';
import { newsService } from "../../../service";
import { WeatherDto } from "../../dto/weather";

export const getHeadlines = async (latitude: number, longitude: number): Promise<WeatherDto[]> => {
    const weather = await newsService.getWeather(latitude, longitude) //fazendo a conexão com api para buscar os resultados
    //getHedlines = 
    const weatherResults = weather.results

	
    return ({
        temperature: weatherResults.temperature,
        date: weatherResults.date,
        time: weatherResults.time,
        description: weatherResults.description,
        city: weatherResults.city,
        humidity: weatherResults.humidity,
        wind: weatherResults.wind,
        sunrise: weatherResults.sunrise,
        sunset: weatherResults.sunset,    
        forecast: weatherResults.forecast.map<ForecastDto>(forecast =>({
            weekday: forecast.weekday,
            min: forecast.min,
            max: forecast.max,
            date: forecast.date,
            condition: forecast.condition,
        }))
})    
}
// mapear os dto, jogando os resultados que esta no wather forecast, função a inteira fazer a conexão inteira com a API
//