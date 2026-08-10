import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true },
  passwordHash: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  branch: String,
  year: Number,
  cgpa: Number,
  scholarNo: { type: String, unique: true },
  role: { type: String, default: 'student' },
  status: { type: String, default: 'Pending' },
}, { timestamps: true, versionKey: false });

const User = mongoose.model('User', userSchema);

async function createAdmin() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB Connected');

  const email = 'admin@jobnotify.com';
  const password = 'Admin@1234';
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin already exists! Email:', email);
    process.exit(0);
  }

  await User.create({
    name: 'Admin',
    email,
    passwordHash,
    branch: 'CSE',
    year: 1,
    cgpa: 10,
    scholarNo: 'ADMIN001',
    role: 'admin',
    status: 'Active'
  });

  console.log('✅ Admin created successfully!');
  console.log('📧 Email: admin@jobnotify.com');
  console.log('🔑 Password: Admin@1234');
  process.exit(0);
}

createAdmin().catch(err => { console.error(err); process.exit(1); });
