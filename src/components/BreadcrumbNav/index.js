import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'
import routes from '@/router/config'

@withRouter
class BreadcrumbNav extends Component {
    state = {
        breadcrumbData: []
    }
    _renderBreadcrumbItem = () => {
        const { pathname } = this.props.location
        const breadcrumbData = []

        function getMatchMenu(_routes) {
            let tmpRoutes
            tmpRoutes = _routes.filter(route => 
                pathname.indexOf(route.key) !== -1
            )

            const { key, title, subRoutes } = tmpRoutes[0]
            breadcrumbData.push({key, title})
            if(key !== pathname) {
                getMatchMenu(subRoutes)
            }
        }

        getMatchMenu(routes)
        return breadcrumbData
    }
    componentDidMount () {
        this.setState({
            breadcrumbData: this._renderBreadcrumbItem()
        })
    }
    render() {
        const { breadcrumbData } = this.state
        return (
            <Breadcrumb>
                {
                    breadcrumbData.map(breadcrumb => {
                        return <Breadcrumb.Item key={breadcrumb.key}>{breadcrumb.title}</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        )
    }
}

export default BreadcrumbNav