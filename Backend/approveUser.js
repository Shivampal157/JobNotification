import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function approveUser() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB Connected');

  const result = await mongoose.connection.collection('users').updateMany(
    { status: 'Pending' },
    { $set: { status: 'Active' } }
  );

  if (result.modifiedCount > 0) {
    console.log('✅ Account approved! User can now login.');
  } else {
    console.log('⚠️ User not found or already active.');
  }
  process.exit(0);
}

approveUser().catch(err => { console.error(err); process.exit(1); });
