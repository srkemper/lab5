exports.view = function(req, res) { 
	var profileData = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': req.query.imageURL
	};
	console.log(profileData);
	res.render('profile', profileData);
 }