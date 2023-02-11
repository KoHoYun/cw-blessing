import axios from 'axios';

const axiosService = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});
function getBlessingList() {
  console.log('b')
  return axiosService.get('list');
}
function registerBlessing(blessingInfo) {
  console.log('hello')
  console.log(blessingInfo)
  return axiosService.post('register', blessingInfo);
}

export default { registerBlessing, getBlessingList };