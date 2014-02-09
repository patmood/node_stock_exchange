var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports.mongoose = mongoose
module.exports.Schema = Schema

// Connect to mongolabs
var username = "patnode"
var password = "patnode321"
var address = '@ds027749.mongolab.com:27749/patverdigris'
connect()

// Connect to mongo
function connect(){
  var url = 'mongo://' + username + ':' + password + address
  mongoose.connect(url)
}
function disconnect() { mongoose.disconnect() }
