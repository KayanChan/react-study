## React Project

基于React、Ant-Design、Mobx和JSS的React应用

项目由[Create React App](https://github.com/facebook/create-react-app)启动

### 开发步骤
1. 新建项目`react-study`
    ```bash
    create-react-app react-study
    ```
2. 配置使用装饰器(路由、mobx、jss都需要)
    * 暴露项目的配置项(保证已经git commit)
        ```bash
        npm run eject
        ```
    * 安装`babel`插件
        ```bash
        yarn add @babel/plugin-proposal-decorators @babel/plugin-transform-react-jsx @babel/plugin-transform-react-jsx-self @babel/plugin-transform-react-jsx-source --dev
        ```
    * 修改`package.json`文件的`babel`配置项
        ```json
        "babel": {
            "plugins": [
                ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ],
            "presets": [
                "react-app"
            ]
        }
        ```
3. 配置`webpack`，使用`@`来`import`模块
    ```json
    // webpack.config.js
    alias: {
        '@': path.resolve(__dirname, '../src'),
        ...
    }
    ```
4. CSS Reset
    > `src/index.css`: 标签重置
    > `src/App.css`: 自定义样式、覆盖antd样式
5. React路由: [react-router-dom](https://react-router.docschina.org/)
    * 安装`react-router-dom`
        ```bash
        yarn add react-router-dom
        ```
    * router/config.js: 路由配置表
    * router/index.js：路由处理
    * 路由重定向(404，默认路由)、路由渲染、菜单高亮展开
    * `React(Suspense/Lazy)`实现路由懒加载
    * `react-transition-group`实现路由跳转过渡动画 [文档](https://reactcommunity.org/react-transition-group/)
6. UI组件库：[ant-design](https://ant.design/index-cn)
    * 安装
        ```bash
        yarn add antd
        ```
    * 按需加载，只需从`antd`引入模块,不用单独引入样式
        ```bash
        yarn add babel-plugin-import
        ```
        package.json添加配置
        ```json
        "babel": {
            "plugins": [
                [
                    "import",
                    {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "css"
                    }
                ]
            ]
        }
        ```
7. CSS-in-JS: [JSS](https://github.com/cssinjs/react-jss)
    * 安装`jss`
        ```bash
        yarn add react-jss
        ```
    * 公共部分提取到文件夹`styles/`下，组件内部通过`object spread`操作符或者`Object.assign`获取
        ```javascript
        subRoutes: {
            ...style.ul,
            paddingLeft: 10
        }
        ```
    * 组件内部通过`injectSheet`来绑定
        ```javascript
        import injectSheet from 'react-jss';
        import styles from './style';

        @injectSheet(styles)
        class Mainbox extends Component {
        render() {
            const { classes } = this.props;
            return <div className={classes.mainContainer}>
            <Router />
            </div>
        }
        }
        ```
8. react的状态存储(store): [Mobx](https://cn.mobx.js.org/)
    * 安装
        ```bash
        yarn add mobx mobx-react
        ```
    * 全局挂载store
        ```javascript
        import { Provider } from 'mobx-react'
        function App() {
            return (
                <Provider {...store}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
                </Provider>
            )
        }
        ```
9. 图表库：[bizcharts](https://bizcharts.net/)
    * 安装
        ```bash
        yarn add bizcharts
        ```

### 文件目录
1. config: 存放webpack的配置参数
2. api: 根据模块来存放api的接口地址
3. assets: 存储静态文件，如图片、字体、svg图标等
4. components: 公共组件
5. router: 路由的配置和挂载渲染
6. store: 数据状态存储
7. styles: 公共样式
8. utils: 工具类函数
    * token.js: 对token的读写操作
    * math.js: 数学类的工具函数
    * helper.js：异步请求fetch的封装
9. views: 页面级别的组件

### 文档输出
1. [React心得](https://github.com/KayanChan/react-study/blob/master/REACT.MD)
2. [Mobx笔记](https://github.com/KayanChan/react-study/blob/master/MOBX.MD)