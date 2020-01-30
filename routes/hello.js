
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToShow = req.params.Username;
	console.log("name is " + nameToShow);
  	res.render("hello", {
  	'name': nametoShow,
  });
};
