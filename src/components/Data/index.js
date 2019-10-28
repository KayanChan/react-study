import React, { Component } from 'react'
import style from './style'
import injectSheet from 'react-jss'
import { Checkbox, Card, Icon, Tooltip, Menu, Dropdown } from 'antd'

const CardContent = () => {
  return <div>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
  </div>
}
@injectSheet(style)
class Data extends Component {
  state = {
    controls: [
      {id: 1, checked: true, disabled: false, label: 'panel 1'},
      {id: 2, checked: true, disabled: false, label: 'panel 2'},
      {id: 3, checked: true, disabled: false, label: 'panel 3'}
    ],
    cards: [
      {id: 'card1', ctrlId: 1, title: 'Panel 1', isShowMore: false, component: CardContent},
      {id: 'card2', ctrlId: 2, title: 'Panel 2', isShowMore: true, component: CardContent},
      {id: 'card3', ctrlId: 3, title: 'Panel 3', isShowMore: false, component: CardContent}
    ]
  }
  _getCtrlIdxById = (ctrlId) => {
    let ctrls = [...this.state.controls]
    return ctrls.findIndex((value) => {
      return value.id === ctrlId
    })
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
    ctrls[this._getCtrlIdxById(ctrlId)].checked = false
    this.setState({
      controls: ctrls
    })
  }
  _moreAction = (ctrlId) => {
    console.log(ctrlId)
  }
  render() {
    const { classes } = this.props
    const { controls, cards } = this.state
    const menu = (
      <Menu>
        <Menu.Item>操作1</Menu.Item>
        <Menu.Item>操作2</Menu.Item>
        <Menu.Item>操作3</Menu.Item>
      </Menu>
    );
    const renderCard = cards.map(card => {
      return <div
        key={card.id}
        className={classes.cardItem}
        style={controls[this._getCtrlIdxById(card.ctrlId)].checked ? {display: 'block'} : {display: 'none'}}>
      <Card title={card.title} extra={
        <div className={classes.cardHandler}>
          {card.isShowMore && (<Dropdown overlay={menu} placement="bottomLeft"><div className={classes.action}>
            <Icon type="more" onClick={() => this._moreAction(card.ctrlId)}/>
          </div></Dropdown>)}
          <Tooltip placement="bottom" title={'关闭'}>
            <div className={classes.action}>
              <Icon type="close" onClick={() => this._closePanel(card.ctrlId)}/>
            </div>
          </Tooltip>
        </div>
        }>
          <card.component></card.component>
      </Card>
    </div>
    })
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
          {renderCard}
        </div>
      </div>
    )
  }
}

export default Data