import axios from 'axios'

// Define URL Backend API
const API_URL_PEXELS = 'https://api.pexels.com/v1'
const API_KEY_PEXELS = '563492ad6f91700001000001588a12e5c75444519a107afeef5bb583'

// Define URL Base + Headers en constante global para peticiones POST
const API = axios.create({
    baseURL: API_URL_PEXELS,
    headers: {
        'Authorization': API_KEY_PEXELS
    }
})

export { API }