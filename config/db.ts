import mongoose from 'mongoose';

const MONGO_URI:string = process.env.MONGODB_URI!; 

module.exports = () => {
    mongoose.connect(
        MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const db = mongoose.connection;

    db.on('error', (error) => { console.log(error) });
    db.once('open', () => console.log('connected'));
}