module.exports = function(sequelize, DataTypes) {
	//with define, the first argument is going to represent a column in the db table

		return sequelize.define("definition", {
			description: Datatypes.STRING,
			logType: DataTypes.STRING, //by time, reps, weight, etc
			owner: DataTypes.INTEGER
		},{

		});
};