module.exports = function(req, res, next){
	res.header("access-control-allow-origin", "*");
		//overrides allowing cross origin requests
	res.header("access-control-allow-methods", "GET, POST, PUT, DELETE");
		//allows headers to have get, post, put, delete requests on it
	res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
		//sets what will be happening within the header to handle authorization in our app
		next();
		//tells server to go to next middleware or keep request going until it becomes handled
};