const TOKEN_NAME = 'app_token'

// 获取权限
export function isAuthenticated() {
    return _getToken(TOKEN_NAME)
}

// 设置权限
export function authenticateSuccess(token) {
    _setToken(TOKEN_NAME, token)
}

// 退出
export function logout() {
    _setToken(TOKEN_NAME, '')
}

function _getToken() {
    return localStorage.getItem(TOKEN_NAME)
}

function _setToken(name, value) {
    localStorage.setItem(name, value)
}