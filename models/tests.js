const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    testID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "testID"
    },
    testName: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "testName"
    },
    testDiff: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "testDiff"
    },
    testQNum: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "testQNum"
    }
  };
  const options = {
    tableName: "tests",
    comment: "",
    indexes: []
  };
  const TestsModel = sequelize.define("tests_model", attributes, options);
  return TestsModel;
};