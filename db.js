 var mongoose = require('mongoose');
//  mongoose.connect('mongodb://nodetest1:7JQOMkR0dQJT11Ny@cluster0-shard-00-00-rpzyp.gcp.mongodb.net:27017,cluster0-shard-00-01-rpzyp.gcp.mongodb.net:27017,cluster0-shard-00-02-rpzyp.gcp.mongodb.net:27017/nodetest1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true })
 mongoose.connect('mongodb+srv://nodetest1:7JQOMkR0dQJT11Ny@cluster0-rpzyp.gcp.mongodb.net/nodetest1?retryWrites=true' , { useNewUrlParser: true });
 var userSchema = new mongoose.Schema({
                                        username: String,
                                        email: String
                                    }, {collection: 'usercollection'}
                                    );

module.exports = {Mongoose: mongoose, UserSchema: userSchema}
