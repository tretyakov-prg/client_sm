import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/page/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  getAdminRoles(){
    return axios.get(API_URL + 'rols', { headers: authHeader() });
  }
}

export default new UserService();