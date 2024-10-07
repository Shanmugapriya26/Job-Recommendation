const db = require('../config/db');

// Get job postings that match the user's profile
const getJobRecommendations = (skills, experience_level, locations, job_type) => {
  const query = `
    SELECT * FROM job_postings
    WHERE required_skills LIKE ? 
    AND experience_level = ? 
    AND location IN (?) 
    AND job_type = ?`;
  
  return new Promise((resolve, reject) => {
    db.query(query, [`%${skills}%`, experience_level, locations, job_type], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = { getJobRecommendations };
