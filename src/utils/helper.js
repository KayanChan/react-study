import { message } from 'antd'
let BASE_URL = ''

function parseJSON(response) {
  return JSON.parse(response)
}

function checkStatus(response) {
  if(response.status >= 200 && response.status < 500){
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export default  function request(options = {}){
  const { data, url } = options
  options = {...options}
  options.mode = 'cors'
  delete options.url
  if(data){
    delete options.data
    options.body = JSON.stringify({
      data
    })
  }
  options.headers={
    'Content-Type':'application/json'
  }
  // credentials让浏览器发送包含凭据的请求（即使是跨域源）
  return fetch(BASE_URL + url, options, {credentials: 'include'})
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => (
      message.error('请求失败(error:${err})')))
}