const express = require('express');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(express.json());

app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
