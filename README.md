# Job Recommendation Backend Service

## Project Overview
This is a backend service for a job recommendation system that matches users to relevant job postings based on their profiles, skills, and preferences. The API is built using Node.js and SQL for data storage.

## Features
- User profile management
- Job postings database
- Recommendation algorithm to match users with jobs based on their skills, experience, and preferences
- RESTful API implementation

## Project Structure

```
root
│   app.js             # Main server file
│   package.json       # Project metadata and dependencies
│   README.md          # Documentation (this file)
│
├───config             # Database configuration
├───controllers        # Business logic for handling API requests
├───routes             # API routes
└───services           # Core recommendation logic
```

## Setup Instructions

### Prerequisites
- Node.js
- MySQL (or your choice of SQL database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-recommendation-service.git
   ```

2. Navigate into the project directory:
   ```bash
   cd job-recommendation-service
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the MySQL database:
   - Create a MySQL database.
   - Import the SQL schema from `database/schema.sql`.

5. Update database configuration in `config/db.js`:
   ```js
   const db = mysql.createConnection({
     host: 'localhost',
     user: 'your-username',
     password: 'your-password',
     database: 'your-database-name'
   });
   ```

### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The API will run on `http://localhost:3000/`.


## API Endpoints

### Get Job Recommendations
**Endpoint:** `/api/recommendations`

**Method:** `POST`

**Description:** Returns a list of job postings based on the user's profile.

**Sample Request:**
```json
{
  "name": "Bob Smith",
  "skills": ["Python", "Data Analysis"],
  "experience_level": "Intermediate",
  "preferences": {
    "desired_roles": ["Data Scientist"],
    "locations": ["Remote"],
    "job_type": "Full-Time"
  }
}
```

**Sample Response:**
```json
[
  {
    "job_id": 2,
    "job_title": "Data Scientist",
    "company": "Data Analytics Corp.",
    "required_skills": "Python, Data Analysis, Machine Learning",
    "location": "Remote",
    "job_type": "Full-Time",
    "experience_level": "Intermediate"
  }
]
```

## License
[MIT](LICENSE)