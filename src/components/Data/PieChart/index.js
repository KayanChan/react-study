import React, { useEffect } from 'react'
import { Button } from 'antd'
import { Chart, Coord, Tooltip, Geom } from 'bizcharts'
import { random } from '@/utils/math'

const Pie = (props) => {
  useEffect(() => {
    console.log('effect 在每次渲染的时候都会执行')
  })
  return (
    <Chart data={props.data} padding={'auto'} height={200} width={200} forceFit>
      <Coord type="theta" innerRadius={0.8} />
      <Tooltip showTitle={false} />
      <Geom
        type="intervalStack"
        position="value"
        color="type"
        shape="sliceShape"
      />
    </Chart>
  )
}

class PieChart extends React.Component {
  state = {
    data: [
      {
        type: "分类一",
        value: random(1, 50)
      },
      {
        type: "分类二",
        value: random(1, 50)
      },
      {
        type: "分类三",
        value: random(1, 50)
      }
    ]
  }
  _loadData = () => {
    this.setState({
      data: [
        {
          type: "分类一",
          value: random(1, 50)
        },
        {
          type: "分类二",
          value: random(1, 50)
        },
        {
          type: "分类三",
          value: random(1, 50)
        }
      ]
    })
  }
  render() {
    const { data } = this.state
    return (
      <div style={{textAlign: 'right'}}>
        <Button type="primary" onClick={this._loadData}>更新数据</Button>
        <Pie data={data}/>
      </div>
    )
  }
}

export default PieChart