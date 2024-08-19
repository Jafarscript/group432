const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tlsAllowInvalidCertificates: true // Add this line
        });
        console.log('Db Connected');
    } catch (error) {
        console.log('DB Connection Error:', error.message);
    }
};

module.exports = { db };
