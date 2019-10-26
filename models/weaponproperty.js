module.exports = function(sequelize, DataTypes) {

var WeaponProperty = sequelize.define('WeaponProperty', {
    weaponId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    propertyId: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  });
  return WeaponProperty;
};