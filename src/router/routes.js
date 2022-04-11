const routes = [
    {
        path: '',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('pages/Index.vue'),
            },
        ],
    },
    {
        path: '/address/:address',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'address',
                props: route => ({ page: route.query.page, pagesize: route.query.pagesize }),
                component: () => import('pages/AccountAddress.vue'),
 