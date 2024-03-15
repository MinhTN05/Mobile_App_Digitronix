import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductService = {
    list({
        id,
        name,
        price,
        img,
        created_at,
        updated_at,
        category_id,
        tags
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`products/all?page=0&limit=10`, {
                params: {
                    id,
                    name,
                    price,
                    img,
                    created_at,
                    updated_at,
                    category_id,
                    tags
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
};

export default ProductService;