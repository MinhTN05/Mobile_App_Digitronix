import { api } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WorkerService = {
    list({
        id,
        name,
        status,
        cost,
        time_start,
        time_end,
        process_detail_id,
        user_id,
        in_material_quantity,
        out_quantity,
        production_id
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get('production_details', {
                params: {
                    id,
                    name,
                    status,
                    cost,
                    time_start,
                    time_end,
                    process_detail_id,
                    user_id,
                    in_material_quantity,
                    out_quantity,
                    production_id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    getWorkerDetail(id) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`production_details/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    }
};
export default WorkerService;