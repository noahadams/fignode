/**
 * POST figlet_service - take a JSON request of the form 
 * { 'string': 'to be figged', 'font': 'font name' } 
 * and return an object fo the form 
 * { 'figstring': 'string that has gone through figlet' }
 *
 */
var figlet = require('./figlet_process')


exports.figlet_service = function (req, res) {
  
  var stringToFig = req.body.string;
  var font = req.body.font;

  figlet(stringToFig, font, function(figgedString) {
    var responseObject = {'figstring': figgedString };
    res.json(responseObject);
  });
  
};
