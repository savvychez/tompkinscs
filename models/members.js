const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    student_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "student_id",
      unique: "student_id"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    grade: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "grade"
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    parent_email: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "parent_email"
    },
    kva: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "kva"
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "admin"
    }
  };
  const options = {
    tableName: "members",
    comment: "",
    indexes: []
  };
  const MembersModel = sequelize.define("members_model", attributes, options);
  return MembersModel;
};