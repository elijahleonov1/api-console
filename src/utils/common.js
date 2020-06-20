const validateEmail = (email) => {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(String(email).toLowerCase())
}

const validateSublogin = (sublogin) => {
    var re = /[a-z0-9]/
    return re.test(String(sublogin).toLowerCase())
}

const validatePassword = (password) => {
    var re = /[a-z0-9]/
    return re.test(String(password).toLowerCase())
}

export default {
    validation: {
        email: validateEmail,
        sublogin: validateSublogin,
        password: validatePassword,
    },
}
