import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://localhost:1702/api/v1/'


export const api = {
    call : () => {
        // Gọi những API Public (Không cần truyền token)
        return axios.create({
            baseURL
        })
    }
}