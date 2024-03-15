import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryService = {
    list({
        createdAt,
        updatedAt,
        id,
        name
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`categories/getAll`, {
                params: {
                    createdAt,
                    updatedAt,
                    id,
                    name
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
};

export default CategoryService;