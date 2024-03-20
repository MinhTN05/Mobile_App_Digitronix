import { api } from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RolesService = {
    list({
        id,
        name
    } = {}) {
        return AsyncStorage.getItem('access_token').then(token => {
            return api.call().get(`roles`, {
                params: {
                    id,
                    name
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        });
    },
}
export default RolesService;