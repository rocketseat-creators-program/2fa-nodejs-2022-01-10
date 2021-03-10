module.exports = (sequelize, DataTypes) => {
  const schema = {
    user_id: DataTypes.STRING,
    token: DataTypes.STRING,
    valid: DataTypes.BOOLEAN,
    expiresAt: DataTypes.DATE,
  }
  const modelOptions = {
    tableName: 'tokens',
  }
  const Token = sequelize.define('Token', schema, modelOptions)

  return Token
}
