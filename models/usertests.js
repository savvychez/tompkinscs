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
    score: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "score"
    },
    datesub: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "datesub"
    }
  };
  const options = {
    tableName: "usertests",
    comment: "",
    indexes: []
  };
  const UsertestsModel = sequelize.define("usertests_model", attributes, options);
  return UsertestsModel;
};