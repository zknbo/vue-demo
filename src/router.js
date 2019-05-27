import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function path(path,name,title,alive,viewerPath){
    return {
        path:path,
        name:name,
        meta:{title:title, keepAlive: alive},
        component: (resolve) => require(['./views' + viewerPath + '.vue'], resolve)
        // component: () => import('./views/' + viewerPath + '.vue')
    }
}

// 创建路由
let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        path('/','home','主界面',false,'/Home'),
        path('/index','index','主页面',false,'/index'),
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})

// 进行路由跳转是进行处理
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }

    if (to.matched.length ===0) {  //如果未匹配到路由
        //如果上级也未匹配到路由则跳转空白，如果上级能匹配到则转上级路由
        from.name ? next({ name:from.name }) : next('/');
    } else {
        next();    //如果匹配到正确跳转
    }
});

export default router;

