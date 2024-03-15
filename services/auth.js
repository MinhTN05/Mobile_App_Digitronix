import { api } from '.'

const AuthService = {
    login({
        username,
        password
    } = {}) {
        return api.call().post(`users/login`,{
            username,
            password
        })
    }
}

export default AuthService;