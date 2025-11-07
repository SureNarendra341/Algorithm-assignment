#  Node.js + Express + MongoDB (Atlas) Project — File Handling & Aggregation APIs

##  Overview
This project is a backend application built using **Node.js**, **Express**, and **MongoDB (Atlas)**.  
It manages **Organizations**, **Users**, and **Files** with upload/download functionality and provides **Aggregation APIs** for analytics.

---

## ⚙️ Features
-  Create Organizations and Users
-  Upload and Download files using **Multer + fs.createReadStream()**
-  Two Aggregation APIs using `$lookup` and `$group`
-  MongoDB Atlas integration
-  Built with modern **ES6+ syntax**
-  Basic error handling included

##  Project Structure
project/
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── organizationController.js
│ │ ├── userController.js
│ │ └── fileController.js
│ ├── models/
│ │ ├── Organization.js
│ │ ├── User.js
│ │ └── File.js
│ ├── routes/
│ │ ├── organizationRoutes.js
│ │ ├── userRoutes.js
│ │ └── fileRoutes.js
│ ├── app.js
│ └── server.js
├── uploads/ # Stores uploaded files
├── .env
├── package.json
└── README.md

##  Tech Stack
- **Node.js** — Backend runtime
- **Express.js** — Server framework
- **MongoDB Atlas** — Cloud database
- **Mongoose** — ODM for MongoDB
- **Multer** — File upload middleware
- **fs** — For file streaming (download)
- **dotenv** — Manage environment variables

##  Installation & Setup

###  Clone the repository
git clone https://github.com/SureNarendra341/Algorithm-assignment.git

### Install dependencies
npm install

### Create .env file
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

### Run the server
npm run dev

MongoDB connected
Server running on port 5000