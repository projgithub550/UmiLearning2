export default [
    {
        exact : false,
        path: '/',
        component: '@/layouts/index',
        routes:[
            { path: '/', component: '@/pages/index' },
            { path: '/user', component: '@/pages/user' },
            { path: '/func', component: '@/pages/func' },
        ],
    }
]