import { Results } from './interface'; 
import weatherApi from '../../config/api';

export const getWeather = async (latitude: number, longitude: number): Promise<Results> => {
	const url = `/weather?lat=${latitude}&lon=${longitude}`
	const response = await weatherApi.get(url)
	return response.data
}
//Se conectar com a API e passar uma latitude e uma longetude, local aonde está para pegar sua localização 
//retornar para a API 