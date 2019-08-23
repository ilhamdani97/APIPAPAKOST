'use strict';
module.exports = (sequelize, DataTypes) => {
  const dorm = sequelize.define('dorm', {
    name_kost: DataTypes.STRING,
    address_kost: DataTypes.STRING,
    detail_kost: DataTypes.STRING,
    stock_room: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    booking_availabel: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    created_by: DataTypes.INTEGER
  }, {});
  dorm.associate = function(models) {
    dorm.belongsTo(models.user, {
      as: 'createdBy',
      foreignKey: 'created_by',
    })
  };
  return dorm;
};