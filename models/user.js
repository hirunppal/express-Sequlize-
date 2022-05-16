module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
        validate: { notEmpty: true, len: [6, 12] },
      },
      email: {
        type: Datatypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },

      password: { type: Datatypes.STRING, allowNull: false },

      birthDate: { type: Datatypes.DATEONLY },
    },
    { timestape: true, paranoid: true }
  );

  User.associate = (model) => {
    User.hasMany(model.Todo, {
      foreignKey: {
        allowNull: false,
        name: "userId",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  };
  return User;
};
