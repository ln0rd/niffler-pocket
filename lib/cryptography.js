import CryptoJS from 'crypto-js'

const encrypt = (value, masterPassword) => {
    return CryptoJS.AES.encrypt(value, masterPassword).toString()
}

const decrypt = (value, masterPassword) => {
    const bytes = CryptoJS.AES.decrypt(value, masterPassword)
    return bytes.toString(CryptoJS.enc.Utf8)    
}

export { encrypt, decrypt }