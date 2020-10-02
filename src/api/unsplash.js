import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID rbDOl-sd47umbHI1KYepd3UizCcN2qXJoE8vcJ_iIN4'
  }
});
