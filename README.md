<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=2563EB&center=true&vCenter=true&width=600&lines=Job+Notification+Platform;College+Placement+Portal;Stay+Ahead+in+Placements!" alt="Typing SVG" />

<br/>

![GitHub repo size](https://img.shields.io/github/repo-size/Shivampal157/JobNotification?color=2563eb&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Shivampal157/JobNotification?color=16a34a&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Shivampal157/JobNotification?color=f59e0b&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Shivampal157/JobNotification?color=8b5cf6&style=for-the-badge)

<br/>

> 🎓 A full-stack **College Job Notification Platform** that keeps students informed about placement opportunities, deadlines, and company visits — in real time.

</div>

---

## ✨ Features

### 👨‍🎓 Student Panel
- 📋 Register with academic details (Branch, CGPA, Year, Scholar No.)
- 🏢 View **eligible companies** based on profile
- 📢 Read **announcements** from admin
- ✅ Track **pending tasks** and deadlines
- 📧 Get **email notifications** for new jobs & reminders
- 👤 Update personal profile

### 🛡️ Admin Panel
- 👥 Approve/Reject student registrations
- 🏢 Add & manage companies with eligibility criteria
- 📢 Post announcements
- 📝 Assign tasks with deadlines to students
- 📊 View all registered students

### ⚙️ System
- 🔐 JWT-based Authentication
- ⏰ Automated email reminders (1 day & 6 hours before deadline)
- 🌐 Role-based access control (Student / Admin)
- ☁️ MongoDB Atlas cloud database

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Vite, TailwindCSS, React Router v6 |
| **Backend** | Node.js, Express.js 5 |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Auth** | JWT (JSON Web Tokens), bcryptjs |
| **Email** | Nodemailer + Mailjet |
| **Scheduling** | node-cron |
| **HTTP Client** | Axios |
| **UI Components** | Lucide React, React Hot Toast |
| **Forms** | React Hook Form |

</div>

---

## 📁 Project Structure

```
JobNotification/
│
├── 📂 Backend/
│   ├── 📂 config/          # Database connection
│   ├── 📂 controllers/     # Route logic (auth, company, task, admin...)
│   ├── 📂 middleware/       # JWT auth middleware
│   ├── 📂 models/          # Mongoose schemas
│   ├── 📂 routes/          # Express routes
│   ├── 📂 utils/           # Email service, scheduler, helpers
│   ├── 📂 validators/      # Input validation
│   └── server.js           # Entry point
│
└── 📂 FrontEnd/
    ├── 📂 src/
    │   ├── 📂 components/  # Reusable UI components
    │   ├── 📂 pages/       # Route-level pages
    │   ├── 📂 context/     # Auth context (global state)
    │   └── 📂 utils/       # API helper, eligibility logic
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free)
- Mailjet account (free)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shivampal157/JobNotification.git
cd JobNotification
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` folder:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/jobnotification
JWT_SECRET=your_super_secret_key
PORT=5000
MAILJET_API_KEY=your_mailjet_api_key
MAILJET_SECRET_KEY=your_mailjet_secret_key
MAILJET_FROM=your_verified_email@example.com
FRONTEND_URL=http://localhost:5173
```

Seed initial data:

```bash
# Seed courses (BTech, MTech, MCA)
node utils/seedCourses.js

# Create admin account
node createAdmin.js
```

Start backend:

```bash
node server.js
```

✅ Backend running at `http://localhost:5000`

---

### 3️⃣ Frontend Setup

```bash
cd FrontEnd
npm install
```

Create a `.env` file in the `FrontEnd/` folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

✅ Frontend running at `http://localhost:5173`

---

### 4️⃣ Login

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@jobnotify.com` | `Admin@1234` |
| **Student** | Register → wait for admin approval | - |

---

## 🔗 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/signup` | Register student | ❌ |
| `POST` | `/api/auth/login` | Login | ❌ |
| `GET` | `/api/auth/me` | Get current user | ✅ |
| `GET` | `/api/companies` | List all companies | ✅ |
| `POST` | `/api/companies` | Add company | 🛡️ Admin |
| `GET` | `/api/announcements` | List announcements | ✅ |
| `POST` | `/api/announcements` | Create announcement | 🛡️ Admin |
| `GET` | `/api/tasks` | List tasks | ✅ |
| `POST` | `/api/tasks` | Create task | 🛡️ Admin |
| `GET` | `/api/admin/students` | All students | 🛡️ Admin |
| `PATCH` | `/api/admin/approve/:id` | Approve student | 🛡️ Admin |

---

## 📧 Email Notifications

The platform automatically sends emails for:

| Event | Trigger |
|-------|---------|
| 🏢 New Company Added | Eligible students notified |
| ✅ Account Approved | Student gets welcome email |
| ⏰ Task Deadline (1 day) | Automated reminder |
| 🚨 Task Deadline (6 hours) | Urgent reminder |

> Powered by **Mailjet** via Nodemailer. Free plan supports 200 emails/day.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. 🍴 Fork the repo
2. 🌿 Create a new branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔃 Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by [Shivam Pal](https://github.com/Shivampal157)

⭐ **Star this repo if you found it helpful!** ⭐

</div>
