import { observable, action } from 'mobx'
import { isAuthenticated, authenticateSuccess, logout } from '@/utils/token'

class AppStore {
    @observable isLogin = !!isAuthenticated()

    @action toggleLogin(flag) {
        if(flag) {
            this.isLogin = true
            // 登录成功，设置token
            authenticateSuccess('123456')
        } else {
            this.isLogin = false
            // 退登，清空token
            logout()
        }
    }
}

export default new AppStore()