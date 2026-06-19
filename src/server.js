const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/db');

const authRoutes = require('./routes/auth.routes');
const recordsRoutes = require('./routes/records.routes');
const notificationsRoutes = require('./routes/notifications.routes');
const remindersRoutes = require('./routes/reminders.routes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/records', recordsRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/reminders', remindersRoutes);

app.get('/', (req, res) => {
  res.send('TrackNest API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`);
});
