import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://project-30-before-30.herokuapp.com/api/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;