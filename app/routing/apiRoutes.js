

var friends = require("../data/friends");

module.exports = function(app) {
	// API GET requests
	app.get("/api/friends", function(req, res) {
		res.json(friends);
  //   console.log("Here");
	});

	// API POST request
	app.post("/api/friends", function(req, res) {
   console.log(req.body.userGrade);
   var userFinalScore = req.body.userGrade;

   var resultsArray = [];

   for (var i = 0; i < friends.length; i++) {
     if (userFinalScore == friends[i].userGrade) {
       resultsArray.push(friends[i]);
     };
   };
   res.json(resultsArray);
    
    
    


		// compatibility logic goes here
   
    
	})
};

  // app.post("/api/tables", function(req, res) {
  //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //   // It will do this by sending out the value "true" have a table
  //   if (tableData.length < 5) {
  //     tableData.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     waitListData.push(req.body);
  //     res.json(false);
  //   }
  // });