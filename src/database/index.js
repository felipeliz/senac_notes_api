import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

/** * Models ** */
import Profile from '../app/models/Profile';
import User from '../app/models/User';

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig);

    Profile.init(this.connection);
    User.init(this.connection);
    
    Profile.associate(this.connection.models);
    User.associate(this.connection.models);
  }
}

export default new Database();
