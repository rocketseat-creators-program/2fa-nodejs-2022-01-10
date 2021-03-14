const auth = require('../services/auth')

const authenticate = async ctx => {
  const { email, password } = ctx.request.body
  const { accessToken, refreshToken, refreshTokenExpiration } = await auth.authenticate({ email, password })
  ctx.cookies.set('refreshToken', refreshToken, { httpOnly: true, expires: refreshTokenExpiration })
  ctx.body = {
    accessToken,
  }
}

const refreshToken = async ctx => {
  const { accessToken, refreshToken, refreshTokenExpiration } = await auth.refreshToken({ token: ctx.cookies.get('refreshToken') })
  ctx.cookies.set('refreshToken', refreshToken, { httpOnly: true, expires: refreshTokenExpiration })
  ctx.body = {
    accessToken,
  }
}

module.exports = {
  authenticate,
  refreshToken,
}
