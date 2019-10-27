import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
class NotFound extends Component {
  state = {
    seconds: 3
  }
  _count = () => {

    clearInterval(this.timer)

    this.timer = setInterval(()=>{
        this.setState({
          seconds: this.state.seconds-1
        },() => {
            if(this.state.seconds <= 0){
                 // 结束定时器循环
                clearInterval(this.timer)
                return this.props.history.goBack()
                // this.props.history.push({pathname: '/'})
            }
            // 循环自调用
            this._count()
        })
    }, 1000)
  }
  componentDidMount() {
    this._count();
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return <div>404~ 页面不存在哦！{this.state.seconds}秒后回到上一页</div>
  }
}

export default NotFound