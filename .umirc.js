import { defineConfig } from 'umi'
import routes from './config/router';
export default defineConfig({
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none'
  },
  // layout: {},
  routes,
})
