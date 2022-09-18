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
}

export interface Headlines { 
    weather: Weather[]
}