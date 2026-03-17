//封装token的相关方法

const TOKENKEY = 'token_key';

const setToken = (token) => {
    localStorage.setItem(TOKENKEY, token);
}

const getToken = () => {
    const token = localStorage.getItem(TOKENKEY);
}

const removeToken = () => {
    localStorage.removeItem(TOKENKEY);
}

export {
    setToken,
    getToken,
    removeToken,
}