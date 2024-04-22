import { api } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderService = {
    list({
        id,
        deadline,
        orderDetailResponses,
        created_at,
        updated_at,
        delivery_method,
        payment_method,
        total_price,
        status,
        user_id,
        user_name,
        customer_name,
        customer_id
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get('orders', {
                params: {
                    id,
                    deadline,
                    orderDetailResponses,
                    created_at,
                    updated_at,
                    delivery_method,
                    payment_method,
                    total_price,
                    status,
                    user_id,
                    user_name,
                    customer_name,
                    customer_id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    getOrderDetail(id) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    }
};
export default OrderService;