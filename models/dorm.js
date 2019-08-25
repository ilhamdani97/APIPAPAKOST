'use strict';
module.exports = (sequelize, DataTypes) => {
  const dorm = sequelize.define('dorm', {
    name_kost: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    address_kost: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    stock_room: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    detail_kost: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    booking_availabel: DataTypes.STRING,
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