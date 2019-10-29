import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import sharedStyle from '@/styles/shared'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react'

const style = {
  infoLayout: {
    ...sharedStyle.contentPadding
  }
}
const useStyles = createUseStyles(style)

function Info(props) {
  const [btnText, setBtnText] = useState('loading出现')

  let timer = null

  const { appStore } = props

  function _showLoading() {
    // 待解决的问题：存在内存泄露，组件销毁后，异步的操作还是继续
    appStore.showLoading()
    setBtnText('5秒后关闭')
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      appStore.hideLoading()
      setBtnText('loading出现')
    }, 5000)
  }

  const classes = useStyles()
  return <div className={classes.infoLayout}>
    <Button type="primary" onClick={_showLoading}>{btnText}</Button>
  </div>
}

export default inject('appStore')(observer(Info))