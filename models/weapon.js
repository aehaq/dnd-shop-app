module.exports = function(sequelize, DataTypes) {
    var Weapon = sequelize.define("Weapon", {
        // Placeholder column
      name: {
        type: DataTypes.STRING
      },
      cost: {
        type: DataTypes.STRING
      },
      damage: {
        type: DataTypes.STRING
      },
      weight: {
        type: DataTypes.STRING
      },
      homebrew: {
        type: DataTypes.BOOLEAN
      },
      weaponId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
    });

    Weapon.associate = models => {
      Weapon.belongsToMany(models.Tag, {
          as: "b",
          through: models.WeaponTag
        }),
      Weapon.belongsToMany(models.Property, {
          as: "b",
          through: models.WeaponProperty
        })
    }
    return Weapon;
};