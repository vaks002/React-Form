import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-form-f72ea.firebaseio.com/'
});

export default instance;