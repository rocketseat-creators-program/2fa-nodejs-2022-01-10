module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('tokens', ['token'])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('tokens')
  },
}
