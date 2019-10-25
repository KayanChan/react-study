const routes = [
  {
    title: '数据',
    icon: 'database',
    key: '/home'
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
            icon: ''
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
        title: '项目介绍',
        key: '/home/about/project',
        icon: 'project'
      }
    ]
  }
]
export default routes