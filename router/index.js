import Vue from 'vue';
import VueRouter from 'vue-router';
import RegisterBlessing from '../views/RegisterBlessing.vue';
import MainView from '../views/MainView.vue'
import BlessingList from '../views/BlessingList.vue'
Vue.use(VueRouter);

export default new VueRouter({
	mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/', 
        component: () => MainView 
    }, {
        path: '/register',
        name: '등록하기',
        component: () => RegisterBlessing
    }, {
        path: '/list',
        name: '등록리스트',
        component: () => BlessingList
    }, {
        path: '*',
        name: '페이지 없음',
        component: () => BlessingList // TODO 만들어야됨
    }]
});