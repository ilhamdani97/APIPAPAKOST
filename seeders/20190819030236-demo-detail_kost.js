'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_kosts', [
      {
        name_kost: "Kos Abah Solihin",
        address_kost: "Jalan Abadi No.9 Jakarta Selatan",
        detail_kost: "Kos putra muslim yang indah",
        stock_room:9,
        rate:10,
        image:"./screen/",
        facility:1,
        size:"5 x 3",
        description:"Kos yang indah aman damai sentosa dunia akhirat",
        latitude:0.3888382992,
        longitude:227265252552
      },
      {
        name_kost: "Kos Abah Solihin",
        address_kost: "Jalan Abadi No.9 Jakarta Selatan",
        detail_kost: "Kos putra muslim yang indah",
        stock_room:9,
        rate:10,
        image:"./screen/",
        facility:1,
        size:"5 x 3",
        description:"Kos yang indah aman damai sentosa dunia akhirat",
        latitude:0.3888382992,
        longitude:227265252552
      },
     
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detail_kosts', null, {});
  }
};
