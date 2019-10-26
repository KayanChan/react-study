import React, { Component } from 'react'
import injectSheet from 'react-jss'
import { Layout, Icon } from 'antd'
import style from './style'
import HeaderBar from '@/components/HeaderBar'
import SiderNav from '@/components/SiderNav'
import MainContent from '@/components/MainContent'
import BreadcrumbNav from '../../components/BreadcrumbNav'

const { Header, Content, Sider } = Layout;

@injectSheet(style)
class Home extends Component {
  state = {
    collapsed: false,
    theme: 'light',
    mode: 'inline'
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { classes } = this.props
    const { theme, mode, collapsed } = this.state
    return <Layout className={classes.homeLayout}>
      <Header>
        <HeaderBar />
      </Header>
      <div
        className={classes.homeCollapsebarLayout}
        style={collapsed ? {paddingLeft: 0} : {paddingLeft: 200}}>
        <div className={classes.homeCollapsebar}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}/>
        </div>
      </div>
      <Layout>
        <Sider width={200} theme={theme} mode={mode} className={classes.homeSider} collapsed={collapsed}>
          <SiderNav theme={theme} mode={mode} collapsed={collapsed}/>
        </Sider>
        <Layout className={classes.homeContentLayout}>
          <div className={classes.homeBreadcrumb}>
            <BreadcrumbNav />
          </div>
          <Content className={classes.homeContent}>
            <MainContent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  }
}

export default Home