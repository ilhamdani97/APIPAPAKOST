'use strict';
module.exports = (sequelize, DataTypes) => {
  const dorm = sequelize.define('dorm', {
    name_kost: DataTypes.STRING,
    address_kost: DataTypes.STRING,
    detail_kost: DataTypes.STRING,
    stock_room: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
    image: DataTypes.STRING,
    // facility: DataTypes.INTEGER,
    size: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    booking_availabel: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  dorm.associate = function(models) {
    // associations can be defined here
    dorm.belongsTo(models.user, {
      as: 'createdBy',
      foreignKey: 'created_by',
    })
  };
  return dorm;
};