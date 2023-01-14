import Vue from 'vue';
import VueRouter from 'vue-router';
import RegisterBlessing from '../pages/RegisterBlessing.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/', 
        redirect: '/register' 
    }, {
        path: '/register',
        name: '등록하기',
        component: RegisterBlessing
    }]
});