import newsApi from "../../config/api";
import { Headlines } from "./interface";

export const getHeadlines = async (idCategory: string): Promise<Headlines> => {
    const url = `Weather=${idCategory}`
    const response = await newsApi.get(url)
    return response.data
}
