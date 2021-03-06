import Sendsay from 'sendsay-api'

class SendsayDecorator {
    constructor() {
        this.AUTH_DATA = 'AUTH_DATA'
        this._sendsay = new Sendsay()
    }

    _loadFromLocalStorege() {
        try {
            const userData = window.localStorage.getItem(this.AUTH_DATA)
            return JSON.parse(userData)
        } catch (e) {
            return {}
        }
    }

    _saveToLocalStorege(userData) {
        try {
            window.localStorage.setItem(
                this.AUTH_DATA,
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
        try {
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
        } catch (e) {}
    }
    async request(req) {
        try {
            const sendsay = this._newSendsayInstance()
            return await sendsay
                .request(req)
                .then((data) => data)
                .catch((e) => e)
        } catch (e) {
            return {
                isAuth: false,
                errorMessage: JSON.stringify({ errorMessage: e.message }),
            }
        }
    }
}

export default new SendsayDecorator()
