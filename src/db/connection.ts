import { connect, disconnect } from 'mongoose';

export default async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (err) {
    console.log(err);
    throw new Error('Cannot connect to MongoDB.');
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (err) {
    console.log(err);
    throw new Error('Cannot connect to MongoDB.');
  }
}

export { connectToDatabase, disconnectFromDatabase };
