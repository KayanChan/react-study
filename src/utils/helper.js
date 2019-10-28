const BASE_URL = ''

if(process.env.NODE_ENV == 'development'){
  BASE_URL = 'http://localhost:3000'
}else if(process.env.NODE_ENV == 'production'){
  BASE_URL = ''
}

function devHttp() {
  return {
    env: 'dev'
  }
}

function testHttp() {
  return {
    env: 'test'
  }
}

// export default {
//   http: (process.env.NODE_ENV == 'development') ? devHttp : testHttp
// }


// function parseJSON(responese) {
//   return responese.json()
// }

// function checkStatus(responese) {
//   if(response.status >= 200 && response.status < 500){
//     return response
//   }
//   const error = new Error(response.statusText)
//   error.response = response
//   throw error
// }

// export default  function request(options = {}){
//   const { data, url } = options
//   options = {...options}
//   options.mode = 'cors'
//   delete options.url
//   if(data){
//     delete options.data
//     options.body = JSON.stringify({
//       data
//     })
//   }
//   options.headers={
//     'Content-Type':'application/json'
//   }
//   return fetch(BASE_URL + url, options, {credentials: 'include'})
//     .then(checkStatus)
//     .then(parseJSON)
//     .catch(err => ({err}))
// }