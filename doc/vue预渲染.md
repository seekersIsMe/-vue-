## 安装prerender-spa-plugin
* (插件使用见npm官网)[https://www.npmjs.com/package/prerender-spa-plugin]
* npm install prerender-spa-plugin --save-dev
***
## 配置prerender-spa-plugin插件
```
const PrerenderSpaPlugin = require('prerender-spa-plugin')
 plugins: [
    // 预加载
    new PrerenderSpaPlugin(
      // 输出目录的绝对路径
      path.join(__dirname, '../dist'),
      // 预渲染的路由
      ['/home', '/a', '/b' ], 这里加home是为了做首页路由是`/`的预渲染，将`/`根目录重定向到`/home`
      {
        // 监听到自定事件时捕获
        renderAfterDocumentEvent: 'sketelon-render-event',// 呈现预渲染页面的时间，例如document.dispatchEvent(new Event('sketelon-render-event'))
      }
    ),
 ]
```
***
## 设置路由,模式为history
```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ssss from '../components/mode';
const a = () => import('../components/a')
const b = () => import('../components/b')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'HelloWorld',
      component: ssss(a, 'a')
    },
    {
      path: '/b',
      name: 'HelloWorld',
      component: ssss(b, 'b')
    }
  ]
})
```
****
## 配置nginx
```
    location / {
           # 本地vue项目打包后的目录
            root   C:\Users\admin\Desktop\init\my-project\dist; 
			try_files $uri $uri/ /index.html;
        }
```
****
## 触发 
* 该例子中是以自定义事件的形式来触发
```
 document.dispatchEvent(new Event('sketelon-render-event'))
```

