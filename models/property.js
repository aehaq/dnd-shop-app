module.exports = function(sequelize, DataTypes) {
    var Property = sequelize.define("Property", {
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      homebrew: {
        type: DataTypes.BOOLEAN
      },
      propertyId: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true
      }
    });

    Property.associate = models => {
      Property.belongsToMany(models.Weapon, {
          as: "a",
          through: models.WeaponProperty
        })
    }
    return Property;
};