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
        // user_id,
        in_material_quantity,
        out_quantity,
        production_id
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return AsyncStorage.getItem('user_id').then(userId => {
                return api.call().get('production_details', {
                    params: {
                        id,
                        name,
                        status,
                        cost,
                        time_start,
                        time_end,
                        process_detail_id,
                        user_id: userId,
                        in_material_quantity,
                        out_quantity,
                        production_id
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            });
        });
    },
    listWorker({
        id,
        name,
        status,
        cost,
        time_start,
        time_end,
        process_detail_id,
        // user_id,
        in_material_quantity,
        out_quantity,
        production_id
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return AsyncStorage.getItem('user_id').then(userId => {
                return api.call().get(`production_details/user/${userId}`, {
                    params: {
                        id,
                        name,
                        status,
                        cost,
                        time_start,
                        time_end,
                        process_detail_id,
                        user_id: userId,
                        in_material_quantity,
                        out_quantity,
                        production_id
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
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
    },
    updateProductionDetails(id, { name, in_material_quantity, time_start, status, cost, user_id, process_detail_id, production_id, out_quantity }) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().put(`production_details/${id}`, {
                name,
                in_material_quantity,
                time_start,
                status,
                cost,
                user_id,
                process_detail_id,
                production_id,
                out_quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
    updateDoneDetails(id, { name, in_material_quantity, time_end, status, cost, user_id, process_detail_id, production_id, out_quantity }) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().put(`production_details/${id}`, {
                name,
                in_material_quantity,
                time_end,
                status,
                cost,
                user_id,
                process_detail_id,
                production_id,
                out_quantity
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    }
};
export default WorkerService;