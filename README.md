# ClinixSphere  Live Url-https://clinix-sphere-khpt.vercel.app/

Clinix Sphere is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to track and monitor their heart rate and blood pressure. Users can keep a detailed log of their vitals, view previous records, and update their health data over time. This tool serves as a personal health tracker.

Features
Add Health Data: Record heart rate and blood pressure readings.
View History: View previously recorded data for trends or personal health analysis.
Edit/Delete Records: Modify or remove outdated records.
Responsive Design: Mobile and desktop-friendly interface.
Tech Stack
Frontend: React.js
Hooks for managing state and effects
React Router for navigation
Context API for sharing user data across components
Backend: Node.js and Express.js
REST API for interacting with MongoDB
User authentication using JWT
Database: MongoDB
Stores user data, heart rate, and blood pressure records
Authentication: JWT for session management
Styling: CSS (or any CSS framework like Bootstrap/Tailwind)
Installation
Prerequisites
Ensure you have the following installed:

Node.js
MongoDB (running locally or on a cloud service like MongoDB Atlas)
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/clinix-sphere.git
cd clinix-sphere

Usage

Add your heart rate and blood pressure data.
View your past records by navigating to the history page.
Edit/Delete records as needed to keep your health data up-to-date.
API Endpoints
POST /health-records: Create a new health record.
GET /health-records: Retrieve a list of all health records.
GET /health-records/:id: Retrieve a specific health record by its ID.
PUT /health-records/:id: Update a health record.
DELETE /health-records/:id: Delete a health record.
