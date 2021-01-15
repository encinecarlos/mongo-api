import mongoose from 'mongoose';

module.exports = () => {
    mongoose.connect(
        "mongodb+srv://encinecarlos:c6u4CzXw49zs6E5@clusterapi0.v5eym.mongodb.net/avanade_node?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } 
    );
    // mongoose.connect("mongodb://encinecarlos:c6u4CzXw49zs6E5@clusterapi0.v5eym.mongodb.net/avanade_node?retryWrites=true&w=majority", 
    //     {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', (error) => { console.log(error) });
    db.once('open', () => console.log('connected'));
}