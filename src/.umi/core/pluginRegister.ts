// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/yancheng/Downloads/umi-keep-alive-tabs-demo (1)/src/app.js';
import * as Plugin_1 from '@@/plugin-keep-alive/runtime';
import * as Plugin_2 from '../plugin-initial-state/runtime';
import * as Plugin_3 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/yancheng/Downloads/umi-keep-alive-tabs-demo (1)/src/app.js',
  });
  plugin.register({
    apply: Plugin_1,
    path: '@@/plugin-keep-alive/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-model/runtime',
  });

export const __mfsu = 1;
