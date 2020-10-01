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
    testID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "testID"
    },
    questionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "questionID"
    },
    questionNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "questionNum"
    },
    answerID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "answerID"
    },
    userCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userCorrect"
    }
  };
  const options = {
    tableName: "useranswers",
    comment: "",
    indexes: []
  };
  const UseranswersModel = sequelize.define("useranswers_model", attributes, options);
  return UseranswersModel;
};