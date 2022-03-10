// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/yancheng/Downloads/umi-keep-alive-tabs-demo (1)/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts' */'@/layouts')}),
    "exact": false,
    "routes": [
      {
        "path": "/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'@/pages/home')}),
        "title": "概览",
        "exact": true
      },
      {
        "path": "/mdm/chart",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__mdm__chart' */'@/pages/mdm/chart')}),
        "title": "业务表概览",
        "exact": true
      },
      {
        "path": "/mdm/setting",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__mdm__setting' */'@/pages/mdm/setting')}),
        "title": "设置",
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
