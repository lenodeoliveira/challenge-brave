const Hero = (sequelize, DataTypes) => {
  const Hero = sequelize.define("Hero", {
    content: DataTypes.STRING
  });

  return Hero;
};

module.exports = Hero;