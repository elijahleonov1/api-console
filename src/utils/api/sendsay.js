import Sendsay from 'sendsay-api'

class SendsayDecorator {
    constructor() {
        this._sendsay = new Sendsay()
    }

    async login({ login = '', sublogin = '', password = '' }) {
        return await this._sendsay
            .login({ login, sublogin, password })
            .then(() => ({
                isAuth: true,
                errorMessage: null,
            }))
            .catch(({ id, explain }) => ({
                isAuth: false,
                errorMessage: JSON.stringify({ id, explain }),
            }))
    }

    async request(req) {
        return await this._sendsay
            .request(req)
            .then((data) => data)
            .catch((e) => e)
    }
}

export default new SendsayDecorator()
