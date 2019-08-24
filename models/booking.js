'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    dateIn: DataTypes.DATE,
    durationRent: DataTypes.INTEGER,
    dateOut: DataTypes.DATE,
    booking_dorms: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  booking.associate = function (models) {
    // associations can be defined here
    booking.belongsTo(models.user, {
      as: 'bookingUser',
      foreignKey: 'user_id',
      attributes: {
        exlude: ['password']
      }
    });
    booking.belongsTo(models.dorm, {
      as: 'bookingDorm',
      foreignKey: 'booking_dorms',
    });
  };
  return booking;
};