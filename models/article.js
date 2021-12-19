const Article = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    url: DataTypes.STRING,
    big: DataTypes.STRING,
    hot: DataTypes.STRING
  });

  return Article;
};

module.exports = Article;