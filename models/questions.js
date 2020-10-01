const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    questionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
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
    questionNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "questionNum"
    },
    questionBlockEncoded: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "questionBlockEncoded"
    },
    questionText: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "questionText"
    },
    questionExplanation: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "questionExplanation"
    }
  };
  const options = {
    tableName: "questions",
    comment: "",
    indexes: []
  };
  const QuestionsModel = sequelize.define("questions_model", attributes, options);
  return QuestionsModel;
};