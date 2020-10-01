const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "userID"
    },
    rankCorrect: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "rankCorrect"
    },
    rankTotal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "rankTotal"
    }
  };
  const options = {
    tableName: "userrank",
    comment: "",
    indexes: []
  };
  const UserrankModel = sequelize.define("userrank_model", attributes, options);
  return UserrankModel;
};