import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { Layout } from 'antd'
import style from './style'
import Collapsebar from '@/components/Collapsebar'

const { Header, Content, Sider } = Layout;

@injectSheet(style)
class Home extends Component {
  render() {
    const { classes } = this.props
    return <Layout className={classes.homeLayout}>
      <Header>头部</Header>
      <div className={classes.collapsebar}>
        <Collapsebar />
      </div>
      <Layout>
        <Sider theme='light' className={classes.homeSider}>侧边栏</Sider>
        <Layout className={classes.homeContentLayout}>
          <Content className={classes.homeContent}>主内容</Content>
        </Layout>
      </Layout>
    </Layout>
  }
}

export default Home