const minCountSymbol = (str = '', count = 3) => str.length >= count

const validateEmail = (email = '', minSymbol = 3) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return (
        minCountSymbol(email, minSymbol) && re.test(String(email).toLowerCase())
    )
}

const validateSublogin = (sublogin = '', minSymbol = 3) => {
    const re = /[a-z0-9]/
    return (
        minCountSymbol(sublogin, minSymbol) &&
        re.test(String(sublogin).toLowerCase())
    )
}

const validatePassword = (password = '', minSymbol = 3) => {
    const re = /[a-z0-9]/
    return (
        minCountSymbol(password, minSymbol) &&
        re.test(String(password).toLowerCase())
    )
}

export default {
    validation: {
        email: validateEmail,
        sublogin: validateSublogin,
        password: validatePassword,
    },
}
