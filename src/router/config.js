import { lazy } from 'react'
import AsyncComponent from '@/components/HOC/AsyncComponent'

const Database = lazy(() => import(/* webpackChunkName: "Database" */'@/components/Database'))
const BasicForm = lazy(() => import(/* webpackChunkName: "BasicForm" */'@/components/General/Form/BasicForm'))
const Info = lazy(() => import(/* webpackChunkName: "Info" */'@/components/About/Info'))

const routes = [
  {
    title: '数据',
    icon: 'pie-chart',
    key: '/home/database',
    component: AsyncComponent(Database)
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
            component: AsyncComponent(BasicForm)
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
        component: AsyncComponent(Info)
      }
    ]
  }
]
export default routes