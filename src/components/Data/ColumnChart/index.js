import React, { useState } from 'react'
import { Chart, Geom, Axis, Tooltip as ChartTooltip } from 'bizcharts'
import { Icon, Tooltip } from 'antd'
import { createUseStyles } from 'react-jss'
import style from './style'
import { random } from '@/utils/math'
import DataSet from '@antv/data-set'


const useStyles = createUseStyles(style)

const EmptyData = () => {
  return <div style={{ position: 'relative', top: '48%', textAlign: 'center' }}>暂无数据</div>
}
function ColumneChart() {
  // 声明state的变量chartData
  const [chartData, setChartData] = useState([
    { kind: 'A类', dataValue: 25},
    { kind: 'B类', dataValue: 15 },
    { kind: 'C类', dataValue: 10 }
  ])

  const {clos} = useState({
    dataValue: { alias: '数值' },
    kind: { alias: '类型' }
  })

  const classes = useStyles()

  const ds = new DataSet()
  const dv = ds.createView().source(chartData)
  function _reloadData() {
    // mock data
    const mockData = [
      { kind: 'A类', dataValue: random(1, 100)},
      { kind: 'B类', dataValue: random(1, 100)},
      { kind: 'C类', dataValue: random(1, 100)}
    ]

    return mockData
  }

  return (
    <div>
      <div className={classes.actionBar}>
        <Tooltip placement="bottomLeft" title={'刷新数据'} onClick={() => setChartData(_reloadData())}>
          <div className={classes.action}><Icon type="reload" /></div>
        </Tooltip>
      </div>
      <Chart data={dv} height={300} scale={clos} forceFit placeholder={<EmptyData />} padding={[50, 20, 20, 20]}>
        <Axis name="kind" title/>
        <Axis name="dataValue" title/>
        <ChartTooltip />
        <Geom type="interval" position="kind*dataValue" color="kind" />
      </Chart>
    </div>
  )
}

export default ColumneChart