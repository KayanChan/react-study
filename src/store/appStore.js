import { observable, action } from 'mobx'

class AppStore {
    @observable isLogin = false

    @action toggleLogin(flag) {
        if(flag) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    }
}

export default new AppStore()