//user model created using sequelize
//talks to the table user
module.exports = function(sequelize, DataTypes){
	var User = sequelize.define("user", {
	username: Sequelize.STRING,
	passwordHash: Sequelize.STRING
		});
		return User;
};