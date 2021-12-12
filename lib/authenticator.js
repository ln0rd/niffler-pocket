import { authenticator } from 'otplib';

const generateToken = (secret) => {
    return authenticator.generate(secret)
}

export { generateToken }