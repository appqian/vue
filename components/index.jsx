import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';//引入vue-resource,类似ajax
import headHtml from '../components/header';

import Ch from '../components/header/chain';
import En from '../components/header/english';
import Jp from '../components/header/jp';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
console.log(Foo);

Vue.use(Router);
Vue.use(Resource);

const router = new Router({
    routes: [{
        path: '/',
        name: 'headHtml',
        component: headHtml,
        redirect: '/Ch'
    },
    // { path: '/Ch', component: Ch, name: "Ch" },
    { path: '/En', component: En },
    { path: '/Jp', component: Jp },
    ]
});
const vm = new Vue({
    el: "#app",
    router: router,
    data() {
        return {

        }
    },
    template: '<div><headHtml /></div>',
    components: {
        'headHtml': headHtml
    }

})