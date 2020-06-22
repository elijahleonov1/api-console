import Sendsay from 'sendsay-api'

class SendsayDecorator {
    constructor() {
        this.LOCAL_STOREGE_NAME = 'USER_AUTH_DATA'
        this._sendsay = null
    }

    async login({ login = '', sublogin = '', password = '' }) {
        const sendsay = new Sendsay()
        return await sendsay
            .login({ login, sublogin, password })
            .then(() => {
                this._newSendsayInstance({ login, sublogin, password })
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

    _newSendsayInstance({ login = '', sublogin = '', password = '' }) {
        this._sendsay = new Sendsay({
            auth: {
                login,
                sublogin,
                password,
            },
        })
        return this._sendsay
    }

    async request(req) {
        return await this._sendsay
            .request(req)
            .then((data) => data)
            .catch((e) => e)
    }
}

export default new SendsayDecorator()
