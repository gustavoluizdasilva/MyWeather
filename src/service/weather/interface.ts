export interface Weather {
    temperature: number,
    date: string,
    time: string,
    description: string,
    city: string,
    humidity: number,
    wind: string,
    sunrise: string,
    sunset: string,
    forecast: Forecast[]
}

export interface Forecast {
    date: string,
    weekday: string,
    min: number,
    max: number,
    description: string,
    condition: string,
}

export interface Results{
    results: Weather
}

//declaração retornar os registros necessartios, especificar oque vou precisar

