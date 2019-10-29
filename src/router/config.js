import { lazy } from 'react'


const Data = lazy(() => import(/* webpackChunkName: "Data" */'@/views/Data'))
const BasicForm = lazy(() => import(/* webpackChunkName: "BasicForm" */'@/views/General/BasicForm'))
const Info = lazy(() => import(/* webpackChunkName: "Info" */'@/views/About/Info'))

const routes = [
  {
    title: '数据页',
    icon: 'pie-chart',
    key: '/home/data',
    component: Data
  },
  {
    title: '常用组件',
    icon: 'laptop',
    key: '/home/general',
    subRoutes: [
      {
        title: '表单',
        icon: 'form',
        key: '/home/general/form',
        subRoutes: [
          {
            title: '基础表单',
            key: '/home/general/form/basic',
            icon: '',
            component: BasicForm
          }
        ]
      }
    ]
  },
  {
    title: '关于',
    icon: 'team',
    key: '/home/about',
    subRoutes: [
      {
        title: '信息',
        key: '/home/about/info',
        icon: 'info',
        component: Info
      }
    ]
  }
]
export default routes