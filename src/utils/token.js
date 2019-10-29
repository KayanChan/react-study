const TOKEN_NAME = 'app_token'

// 获取权限
export function isAuthenticated() {
    return getToken(TOKEN_NAME)
}

// 设置权限
export function authenticateSuccess(token) {
    setToken(TOKEN_NAME, token)
}

// 退出
export function logout() {
    setToken(TOKEN_NAME, '')
}

export function getToken() {
    return localStorage.getItem(TOKEN_NAME)
}

export function setToken(name, value) {
    localStorage.setItem(name, value)
}