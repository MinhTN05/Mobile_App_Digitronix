import { api } from '.'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeliveryService = {
    list({
        id,
        orderResponse,
        status,
        created_at,
        updated_at,
        order_id,
        delivery_date
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`deliveries`, {
                params: {
                    id,
                    orderResponse,
                    status,
                    created_at,
                    updated_at,
                    order_id,
                    delivery_date
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    getDeliveryDetail(id) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`deliveries/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    updateDeliveryDetails(id, { delivery_date, status, order_id }) {
        console.log(id, delivery_date, status, order_id);
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().put(`deliveries/${id}`, {
                delivery_date, 
                status, 
                order_id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
};

export default DeliveryService;