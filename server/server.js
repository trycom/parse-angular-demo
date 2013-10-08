var app = require('./app');

module.exports = app.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
