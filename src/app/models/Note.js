const { Model, DataTypes } = require('sequelize');

class Note extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        status: DataTypes.INTEGER,
        date: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
  
  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
  }
}

module.exports = Note;