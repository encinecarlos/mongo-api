import mongoose from 'mongoose';

module.exports = () => {
    const connectionString:any = process.env.MONGODB_URI;
    mongoose.connect(
        connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const db = mongoose.connection;

    db.on('error', (error) => { console.log(error) });
    db.once('open', () => console.log('connected'));
}