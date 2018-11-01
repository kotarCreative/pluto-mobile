import api from '@/api'

const attemptLogin = async credentials => {
    try {
        // retreive jwt data from server
        const { data } = await api.Login(credentials);

        // update axios authorization
        axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
    } catch (err) {

        // pass error to view (presumably)
        throw err;
    }
};