module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Post", {
      score: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Score.associate = function(models) {
      
      Score.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Score;
  };
  