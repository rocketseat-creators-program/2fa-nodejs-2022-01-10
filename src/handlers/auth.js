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

const logout = async ctx => {
  const { allDevices } = ctx.request.body
  await auth.logout({ token: ctx.cookies.get('refreshToken'), allDevices })
  ctx.cookies.set('refreshToken', '')
  ctx.body = {}
}

module.exports = {
  authenticate,
  refreshToken,
  logout,
}
