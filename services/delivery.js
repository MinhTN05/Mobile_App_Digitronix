import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeliveryService = {
    list() {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`deliveries`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
};

export default DeliveryService;