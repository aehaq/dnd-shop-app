module.exports = function(sequelize, DataTypes) {
    var Tag = sequelize.define("Tag", {
      tagName: {
        type: DataTypes.STRING,
        primaryKey: true
      }
    });

    Tag.associate = models => {
      Tag.belongsToMany(models.Weapon, {
          through: models.WeaponTag
        })
    }
    return Tag;
};