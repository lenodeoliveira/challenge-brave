const Contact = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return Contact;
};

module.exports = Contact;