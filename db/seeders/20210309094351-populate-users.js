const bcrypt = require('bcrypt')
const { crypto: config } = require('../../config')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [{
      name: 'Teste user',
      email: 'teste@user.com',
      password: await bcrypt
        .hash('1234', config.hashSaltRounds),
      role: 'USER',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Teste admin',
      email: 'teste@admin.com',
      password: await bcrypt
        .hash('1234', config.hashSaltRounds),
      role: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
    await queryInterface.bulkInsert('users', users, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  },
}
