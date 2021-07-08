import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/vuex'

const service = axios.create({
    baseURL: '/api',
    timeout: 20000
  });


service.interceptors.request.use(function (config) {
    NProgress.start()
    let token=store.state.login.token
    if(token){
        config.headers.token=token
    }
    let userTempId=store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId=userTempId
    }
    return config;
}, function (error) {

    return Promise.reject(error);
});

service.interceptors.response.use(function (response) {

    NProgress.done()
    return response.data;
}, function (error) {
    NProgress.done()
    alert('出错了' + error.message)

    return new Promise(()=>{});
});

export default service