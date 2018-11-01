const { APP_URL } = cfg


/**
 * Initialize the global axios object, and setup
 */
import axios from 'axios';
global.axios = axios.create({ baseURL: APP_URL, timeout: 5000 });