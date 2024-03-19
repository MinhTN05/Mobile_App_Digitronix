import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductImageService = {
    list({ img } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            if (!token) {
                throw new Error('Access token not found');
            }
            return api.call().get(`products/images/${img}`, {
                params: {
                    img
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }).catch(error => {
            throw new Error(`Failed to fetch product images: ${error.message}`);
        });
    },
};

export default ProductImageService;