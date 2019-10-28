import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import sharedStyle from '@/styles/shared'

const style = {
  infoLayout: {
    ...sharedStyle.contentPadding
  }
}
const useStyles = createUseStyles(style)

function Info() {
  useEffect(() => {
    fetch('http://tag.dev.dtedu.com/tag/app-init-data', {
      method: 'GET',
      headers: {
        'Content-Type':'application/json;charset=UTF-8'
      },
      mode: 'cors',
      cache: 'default'
    })
    .then(res =>res.json())
    .then((data) => {
       console.log(data) 
    })
  })
  const classes = useStyles()
  return <div className={classes.infoLayout}>Info</div>
}

export default Info