import jwt from 'jsonwebtoken'

export function createAccessToken(payload){
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
    return accessToken
}
export function createRefreshToken(payload){
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '10d'})
    return refreshToken
}