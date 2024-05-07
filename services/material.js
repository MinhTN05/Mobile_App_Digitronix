import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MaterialService = {
    list({
        id,
        name,
        price,
        img,
        quantity,
        created_at,
        updated_at,
        category_name,
        category_id,
        tags
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`materials/all?page=0&limit=10`, {
                params: {
                    id,
                    name,
                    price,
                    img,
                    quantity,
                    created_at,
                    updated_at,
                    category_name,
                    category_id,
                    tags
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    getMaterialDetail(id) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`materials/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
}
export default MaterialService;