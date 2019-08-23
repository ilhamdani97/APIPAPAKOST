'use strict';
module.exports = (sequelize, DataTypes) => {
  const facility = sequelize.define('facility', {
    wifi: DataTypes.BOOLEAN,
    ac: DataTypes.BOOLEAN,
    wc: DataTypes.BOOLEAN,
    access_key: DataTypes.BOOLEAN
  }, {});
  facility.associate = function(models) {
    // associations can be defined here
  };
  return facility;
};