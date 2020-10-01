const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ansID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ansID"
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
    testID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "testID"
    },
    ansText: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ansText"
    },
    ansLetter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ansLetter"
    },
    ansCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ansCorrect"
    }
  };
  const options = {
    tableName: "answers",
    comment: "",
    indexes: []
  };
  const AnswersModel = sequelize.define("answers_model", attributes, options);
  return AnswersModel;
};