const jobModel = require('../models/job');

const recommendJobs = async (req, res) => {
  const { skills, experience_level, preferences } = req.body;
  
  try {
    const jobs = await jobModel.getJobRecommendations(
      skills.join(', '),
      experience_level,
      preferences.locations,
      preferences.job_type
    );
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching job recommendations:', error);
    res.status(500).json({ message: 'Error fetching job recommendations', error });
  }
};

module.exports = { recommendJobs };
