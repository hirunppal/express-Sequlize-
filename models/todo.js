module.exports = (sequelize, Datatypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      title: { type: Datatypes.STRING, allowNull: false },
      completed: {
        type: Datatypes.BOOLEAN,
        allowNull: false,
        defaultvalues: false,
      },
      dueDate: { type: Datatypes.DATEONLY },
    },
    { timestape: true, paranoid: true }
  );
  Todo.associate = (db) => {
    Todo.belongsTo(db.User, {
      foreignKey: {
        allowNull: false,
        name: "userId",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  };
  return Todo;
};
