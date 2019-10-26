import React, { Component } from 'react'
import style from './style'
import injectSheet from 'react-jss'
import { Checkbox, Card, Icon } from 'antd'

@injectSheet(style)
class Data extends Component {
  state = {
    panel1: {
      checked: false,
      disabled: false,
      label: 'Panel 1'
    },
    panel2: {
      checked: false,
      disabled: false,
      label: 'Panel 2'
    },
    panel3: {
      checked: false,
      disabled: false,
      label: 'Panel 3'
    }
  }
  onChangePanel1 = e => {
    // console.log('checked = ', e.target.checked);
    let panel1 = {...this.state.panel1, checked: e.target.checked}
    this.setState({
      panel1: panel1
    })
  }
  onChangePanel2 = e => {
    // console.log('checked = ', e.target.checked);
    let panel2 = {...this.state.panel2, checked: e.target.checked}
    this.setState({
      panel2: panel2
    })
  }
  onChangePanel3 = e => {
    // console.log('checked = ', e.target.checked);
    let panel3 = {...this.state.panel3, checked: e.target.checked}
    this.setState({
      panel3: panel3
    })
  }
  render() {
    const { classes } = this.props
    const { panel1, panel2, panel3 } = this.state
    return (
      <div className={classes.widgetPanel}>
        <div className={classes.checkboxBar}>
          <Checkbox
            checked={panel1.checked}
            disabled={panel1.disabled}
            onChange={this.onChangePanel1}>
            {panel1.label}
          </Checkbox>
          <Checkbox
            checked={panel2.checked}
            disabled={panel2.disabled}
            onChange={this.onChangePanel2}>
            {panel2.label}
          </Checkbox>
          <Checkbox
            checked={panel3.checked}
            disabled={panel3.disabled}
            onChange={this.onChangePanel3}>
            {panel3.label}
          </Checkbox>
        </div>
        <div className={classes.cardPanel}>
          <div className={classes.cardItem}>
            <Card title="Panel 1" extra={<Icon type="close" className={classes.pointer}/>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className={classes.cardItem}>
            <Card title="Panel 2" extra={<Icon type="close" className={classes.pointer}/>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className={classes.cardItem}>
            <Card title="Panel 3" extra={<Icon type="close" className={classes.pointer}/>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Data