import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductService = {
    list({
        id,
        name,
        price,
        img,
        quantity,
        created_at,
        updated_at,
        category_id,
        category_name,
        tags
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`products/all?page=0&limit=20`, {
                params: {
                    id,
                    name,
                    price,
                    img,
                    quantity,
                    created_at,
                    updated_at,
                    category_id,
                    category_name,
                    tags
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    getProductDetail(id) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    // add(productData) {
    //     return AsyncStorage.getItem('access_token').then(token => {
    //         return api.call().post('products/create/info', productData, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //     });
    // },
};

export default ProductService;