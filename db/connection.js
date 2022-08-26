import mongoose from 'mongoose';
import colors from 'colors';


const connectDB = () => (
	new Promise(async (resolve, reject) => {
		try {
			const conn = await mongoose.connect(process.env.MONGO_URI, {
				useUnifiedTopology: true,
				useNewUrlParser: true
			});
			console.log(`Mongo is connected ! host:${conn.connection.host}`.cyan.underline);
			resolve(true)
		} catch (error) {
			console.log(`Mongo Connection failed ! `.red.underline.bold);
			console.log(`Reason : ${error}`.red.underline.bold);
			reject(false)
		}
	})
)


export default connectDB;