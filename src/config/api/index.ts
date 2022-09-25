import axios from "axios";

const weatherApi = axios.create({
     baseURL: 'https://api.hgbrasil.com/',
     params: {
         apiKey: '72be6fd7'
     }
})

export default weatherApi