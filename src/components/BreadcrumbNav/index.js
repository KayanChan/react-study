import React, { Component } from 'react'
import { Breadcrumb } from 'antd'

class BreadcrumbNav extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Application Center</Breadcrumb.Item>
                <Breadcrumb.Item>Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadcrumbNav