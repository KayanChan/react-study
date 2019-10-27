import React, { Component } from 'react'
import style from './style'
import injectSheet from 'react-jss'
import { Checkbox, Card, Icon } from 'antd'

@injectSheet(style)
class Data extends Component {
  state = {
    controls: [
      {id: 1, checked: true, disabled: false, label: 'panel 1'},
      {id: 2, checked: true, disabled: false, label: 'panel 2'},
      {id: 3, checked: true, disabled: false, label: 'panel 3'}
    ]
  }

  _onChange = (e, idx) => {
    let ctrls = [...this.state.controls]
    ctrls[idx].checked = e.target.checked
    this.setState({
      controls: ctrls
    })
  }
  _closePanel = (ctrlId) => {
    let ctrls = [...this.state.controls]
    let idx = ctrls.findIndex((value) => {
      return value.id === ctrlId
    })
    ctrls[idx].checked = false
    this.setState({
      controls: ctrls
    })
  }
  render() {
    const { classes } = this.props
    const { controls } = this.state
    return (
      <div className={classes.widgetPanel}>
        <div className={classes.checkboxBar}>
          {
            controls.map((ctrl, index) => {
              return <Checkbox key={ctrl.id} checked={ctrl.checked} disabled={ctrl.disabled}
                onChange={(e) => this._onChange(e, index)}>
                {ctrl.label}
              </Checkbox>
            })
          }
        </div>
        <div className={classes.cardPanel}>
          <div className={classes.cardItem} style={controls[0].checked ? {display: 'block'} : {display: 'none'}}>
            <Card title="Panel 1" extra={<Icon type="close" className={classes.pointer} onClick={() => this._closePanel(1)}/>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className={classes.cardItem} style={controls[1].checked ? {display: 'block'} : {display: 'none'}}>
            <Card title="Panel 2" extra={<Icon type="close" className={classes.pointer} onClick={() => this._closePanel(2)}/>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
          <div className={classes.cardItem} style={controls[2].checked ? {display: 'block'} : {display: 'none'}}>
            <Card title="Panel 3" extra={<Icon type="close" className={classes.pointer} onClick={() => this._closePanel(3)}/>}>
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