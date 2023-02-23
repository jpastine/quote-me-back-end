'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quote.belongsTo(models.Profile, { foreignKey: 'profileId' })

      Quote.hasMany(models.Vote, {
        as: 'votesReceived',
        foreignKey: 'voterId'
      })
    }
  }
  Quote.init({
    quote: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    }, 
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};