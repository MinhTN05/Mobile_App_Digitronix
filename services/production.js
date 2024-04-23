import { api } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductionService = {
    list({
        id,
        quantity,
        status,
        created_at,
        updated_at,
        time_start,
        time_end,
        total_cost,
        user_id,
        process_id,
        order_id,
        product_name,
        production_detail
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get('productions', {
                params: {
                    id,
                    quantity,
                    status,
                    created_at,
                    updated_at,
                    time_start,
                    time_end,
                    total_cost,
                    user_id,
                    process_id,
                    order_id,
                    product_name,
                    production_detail
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    getProductionDetail(id) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`productions/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    }
}
export default ProductionService;