/*
 * @Author: your name
 * @Date: 2021-09-11 17:50:47
 * @LastEditTime: 2021-10-18 13:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /malacca-frontend/packages/mdm/config/router.js
 */
export default [
            {
                path: '/',
                component: '@/layouts',
                exact: false,
                routes: [
                    {
                        path: '/home',
                        component: '@/pages/home',
                        title: '概览'
                    },
                            {
                                path: '/mdm/chart',
                                component: '@/pages/mdm/chart',
                                title: '业务表概览'
                            },
                            {
                                path: '/mdm/setting',
                                component: '@/pages/mdm/setting',
                                title: '设置'
                            }
                ]
            }
];

export const menus = [ 
    { key: '/home', title: '用户管理', path: '/home' },
    {
      key: 'mdm', title: 'mdm',path:'/mdm',
      children: [
        { key: '/mdm/chart', title: '商品数量', path: '/mdm/chart' },
        { key: '/mdm/setting', title: '商品质量', path: '/mdm/setting' }
      ]
    }
  ]