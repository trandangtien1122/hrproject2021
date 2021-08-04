import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'employee', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

    getManagerBoard() {
        return axios.get(API_URL + 'manager', { headers: authHeader() });
    }
}

export default new UserService();