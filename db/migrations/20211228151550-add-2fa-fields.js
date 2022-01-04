module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'twoFaEnabled',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    )
    await queryInterface.addColumn(
      'users',
      'twoFaSecret',
      {
        type: Sequelize.DataTypes.STRING,
      }
    )
    await queryInterface.addColumn(
      'users',
      'recoveryCode',
      {
        type: Sequelize.DataTypes.STRING,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'twoFaEnabled')
    await queryInterface.removeColumn('users', 'twoFaSecret')
    await queryInterface.removeColumn('users', 'recoveryCode')
  },
}
