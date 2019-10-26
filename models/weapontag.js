module.exports = function(sequelize, DataTypes) {
    
var WeaponTag = sequelize.define('WeaponTag', {
    weaponId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    tagName: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  });
  return WeaponTag;
};