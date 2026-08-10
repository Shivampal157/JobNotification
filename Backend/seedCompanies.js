import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const CompanySchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  status: { type: String, default: 'Active' },
  compensation: String,
  eligibility: {
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    branches: [String],
    years: [Number],
    minCgpa: Number
  },
  jobDescriptionDocs: [{ name: String, url: String }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
}, { timestamps: true });

const Company = mongoose.model('Company', CompanySchema);
const Course = mongoose.model('Course', new mongoose.Schema({ name: String, duration: Number, allowedBranches: [String] }));

async function seedCompanies() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB Connected');

  // Get BTech course ID
  const btech = await Course.findOne({ name: 'BTech' });
  if (!btech) {
    console.log('❌ BTech course not found! Run seedCourses.js first.');
    process.exit(1);
  }

  const companies = [
    {
      name: 'Google',
      role: 'Software Engineer',
      description: 'Join Google as a Software Engineer. Work on large-scale distributed systems, search algorithms, and cutting-edge AI products.',
      compensation: '45 LPA',
      status: 'Active',
      eligibility: {
        course: btech._id,
        branches: ['CSE', 'ECE'],
        years: [4],
        minCgpa: 8.0
      }
    },
    {
      name: 'TCS',
      role: 'Systems Engineer',
      description: 'TCS is hiring Systems Engineers for their flagship digital transformation projects across various domains.',
      compensation: '7 LPA',
      status: 'Active',
      eligibility: {
        course: btech._id,
        branches: ['CSE', 'ECE', 'ME', 'EE', 'CE'],
        years: [4],
        minCgpa: 6.0
      }
    },
    {
      name: 'Infosys',
      role: 'Associate Software Engineer',
      description: 'Infosys is looking for bright minds to join as Associate Software Engineers to work on global client projects.',
      compensation: '6.5 LPA',
      status: 'Active',
      eligibility: {
        course: btech._id,
        branches: ['CSE', 'ECE', 'EE', 'ME'],
        years: [4],
        minCgpa: 6.5
      }
    },
    {
      name: 'Amazon',
      role: 'SDE-1',
      description: 'Amazon is hiring Software Development Engineers. Work on products used by millions of customers worldwide.',
      compensation: '32 LPA',
      status: 'Active',
      eligibility: {
        course: btech._id,
        branches: ['CSE', 'ECE'],
        years: [4],
        minCgpa: 7.5
      }
    },
    {
      name: 'Wipro',
      role: 'Project Engineer',
      description: 'Wipro offers exciting opportunities for fresh graduates to work on cutting-edge technology projects globally.',
      compensation: '6 LPA',
      status: 'Active',
      eligibility: {
        course: btech._id,
        branches: ['CSE', 'ECE', 'ME', 'EE', 'CE', 'CHE'],
        years: [4],
        minCgpa: 6.0
      }
    }
  ];

  let added = 0;
  for (const company of companies) {
    const exists = await Company.findOne({ name: company.name, role: company.role });
    if (!exists) {
      await Company.create(company);
      console.log(`✅ Added: ${company.name} — ${company.role}`);
      added++;
    } else {
      console.log(`⚠️  Already exists: ${company.name}`);
    }
  }

  console.log(`\n🎉 Done! ${added} companies added to database.`);
  process.exit(0);
}

seedCompanies().catch(err => { console.error(err); process.exit(1); });
