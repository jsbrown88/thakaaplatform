const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const chatRoutes = require('./routes/chatRoutes');
const investorRoutes = require('./routes/investorRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const supportRoutes = require('./routes/supportRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const forumRoutes = require('./routes/forumRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const verificationRoutes = require('./routes/verificationRoutes');
const adminRoutes = require('./routes/adminRoutes');
const seoRoutes = require('./routes/seoRoutes');
const dbConfig = require('./config/db');

const app = express();

// Connect to MongoDB
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/investors', investorRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/forums', forumRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/verification', verificationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/seo', seoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
