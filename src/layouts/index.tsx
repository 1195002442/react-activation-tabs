// import BasicLayout from './BasicLayout';

// export default BasicLayout;

import React, { useState, useEffect, Component } from 'react'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'
import { Menu, Layout } from 'antd'
import _ from 'lodash' // 引入JS工具库
import { Link, history } from 'umi' // umi自带的链接组件
import { menus } from '../../config/router' // 配置的菜单项
import routeArray from '../../config/router';
import KeepAliveTabs from '../components/KeepAliveTabs'

let menuDict = {}
const updateTree = data => {
    const treeData = data;
    const treeList = [];
    // 递归获取树列表
    const getTreeList = data => {
        data.forEach(node => {
            if (!node.routes) {
                treeList.push({ ...node, title: node.title });
                menuDict[node.path] = { ...node, name: node.path }
            }
            if (node.routes && node.routes.length > 0) {
                getTreeList(node.routes);
            }
        });
    };
    getTreeList(treeData);
    return treeList;
};

const { SubMenu } = Menu // 子菜单
const { Header, Content, Sider } = Layout // 顶部布局， 内容部分， 侧边栏
const BasicLayout = ((props: any) => {
    const { route, location = {
        pathname: '/',
    }, } = props
    const [keepAliveProps, setKeepAliveProps] = useState<{ id?: string; title?: string }>({});

    function getMenuItem(menuArr: any) { // 获取菜单项
        return _.map(menuArr, route => {
            if (route.children) {  // 有多级菜单时
                return (
                    <SubMenu key={route.key} title={route.title}>
                        {getMenuItem(route.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={route.key}> <Link to={route.path}>{route.title}</Link> </Menu.Item>
        })
    }

    function sideBarRender() {
        return (
            <Sider width={180} style={{ height: 'calc(100vh-48px)' }}>
                <Menu mode='inline' theme='dark' style={{ height: '100%', borderRight: 0 }}>
                    {getMenuItem(menus)}
                </Menu>
            </Sider>
        )
    }

    useEffect(() => {
        if (location.pathname && location.pathname !== '/') {
            updateTree(routeArray)
            const currenMenu = menuDict[location.pathname];
            const newKeepAliveProps = {
                id: `${currenMenu?.path}`,
                name: currenMenu?.path,
                title: currenMenu.title
            };
            // 404页面处理
            if (!newKeepAliveProps.name) {
                newKeepAliveProps.id = location.pathname;
                newKeepAliveProps.name = location.pathname;
            }
            setKeepAliveProps(newKeepAliveProps);
            if (location.pathname && location.pathname !== '/') {
                history.replace(location.pathname);
            }
        }
    }, [location.pathname, route.routes]);

    if (location.pathname === '/') {
        history.replace('/home');
    }

    return (
        <Layout>
            <Layout >
                {sideBarRender()}
                <Layout.Content>
                    <KeepAliveTabs />
                    <Content>
                        <KeepAlive id={keepAliveProps.id} name={keepAliveProps.id} title={keepAliveProps.title}>
                            {props.children}
                        </KeepAlive>
                    </Content>
                </Layout.Content>
            </Layout>
        </Layout>
    )
})
export default BasicLayout