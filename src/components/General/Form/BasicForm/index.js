import React, { Component } from 'react'
import injectsheet from 'react-jss'
import sharedStyle from '@/styles/shared'

const style = {
  basicFormLayout: {
    ...sharedStyle.contentPadding
  }
}
console.log(style)
@injectsheet(style)
class BasicForm extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.basicFormLayout}>BasicForm</div>
    )
  }
}

export default BasicForm