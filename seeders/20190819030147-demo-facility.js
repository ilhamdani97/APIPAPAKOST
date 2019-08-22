'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('facilities', [
      {
        wifi: true,
        wc: true,
        ac: false,
        access_key:true,
      },
      {
        wifi: true,
        wc: true,
        ac: true,
        access_key:true,
      },
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('facilities', null, {});
  }
};
