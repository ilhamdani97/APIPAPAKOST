'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        user_name: "ilham97",
        password: "ilham",
        email: "ramadani@dani.com",
        full_name:"Ilham Ramadani",
        no_tlp:"08192910192",
      },
      {
        user_name: "aris96",
        password: "aris",
        email: "aris@dot.com",
        full_name:"Aris Kurniawan",
        no_tlp:"081929101733",
      },
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
