const express = require('express');
require('dotenv').config({ path: './config.env' });
const app = express();
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

connectDB();

app.use(express.json());
app.use('/api/v1/posts', postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
