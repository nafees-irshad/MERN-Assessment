/** @format */

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log('Database connected');
	} catch (error) {
		console.log('Error connecting to database', error);
		process.exit(1);
	}
};

module.exports = connectDB;
