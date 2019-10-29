import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip as ChartTooltip } from 'bizcharts'
import { Icon, Tooltip } from 'antd'
import injectSheet from 'react-jss'
import style from './style'
import { inject, observer } from 'mobx-react'
import { random } from '@/utils/math'

const EmptyData = (props) => {
  const { classes } = props
  return <div className={classes.emptyData}>暂无数据</div>
}


@injectSheet(style)
@inject('chartData')
@observer
class ColumneChart extends Component {
  state = {
    clos: {
      dataValue: { alias: '数值' },
      kind: { alias: '类型' }
    }
  }
  componentDidMount() {
    this._loadData()
  }
  _loadData = () => {
    // mock data to update
    this.props.chartData.updateColumnData([
      { kind: 'A类', dataValue: random(1, 100)},
      { kind: 'B类', dataValue: random(1, 100)},
      { kind: 'C类', dataValue: random(1, 100)}
    ])
  }
  _toJS = (columnData) => {
    let _tmp = []
    if(columnData.length) {
      columnData.forEach(item => {
        const { kind, dataValue } = item
        _tmp.push({
          kind,
          dataValue
        })
      })
    }
    return _tmp
  }
  render() {
    const { clos } = this.state
    const { classes, chartData } = this.props
    return (
      <div>
        <div className={classes.actionBar}>
          <Tooltip placement="bottomLeft" title={'刷新数据'} onClick={this._loadData}>
            <div className={classes.action}><Icon type="reload" /></div>
          </Tooltip>
        </div>
        <Chart
          height={300} scale={clos} forceFit
          data={this._toJS(chartData.columnData)}
          placeholder={<EmptyData {...this.props}/>}
          padding={[50, 'auto', 'auto', 'auto']}>
          <Axis name="kind" title/>
          <Axis name="dataValue" title/>
          <ChartTooltip />
          <Geom type="interval" position="kind*dataValue" color="kind" />
        </Chart>
      </div>
    )
  }
}

export default ColumneChart