import Sendsay from 'sendsay-api'

class SendsayDecorator {
    constructor() {
        this.USER_DATA_AUTH = 'AUTH_DATA'
        this._sendsay = new Sendsay()
    }

    _loadFromLocalStorege() {
        try {
            const userData = window.localStorage.getItem(this.USER_DATA_AUTH)
            return JSON.parse(userData)
        } catch (e) {
            return {}
        }
    }

    _saveToLocalStorege(userData) {
        try {
            window.localStorage.setItem(
                this.USER_DATA_AUTH,
                JSON.stringify(userData)
            )
        } catch (e) {
            throw Error(e)
        }
    }

    async login({ login = '', sublogin = '', password = '' }) {
        const sendsay = new Sendsay()
        return await sendsay
            .login({ login, sublogin, password })
            .then(() => {
                this._saveToLocalStorege({ login, sublogin, password })
                return {
                    isAuth: true,
                    errorMessage: null,
                }
            })
            .catch(({ id, explain }) => ({
                isAuth: false,
                errorMessage: JSON.stringify({ id, explain }),
            }))
    }

    _newSendsayInstance() {
        const {
            login = '',
            sublogin = '',
            password = '',
        } = this._loadFromLocalStorege()
        return new Sendsay({
            auth: {
                login,
                sublogin,
                password,
            },
        })
    }
    async request(req) {
        const sendsay = this._newSendsayInstance()
        return await sendsay
            .request(req)
            .then((data) => data)
            .catch((e) => e)
    }
}

export default new SendsayDecorator()
