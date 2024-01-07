const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Set up session middleware
app.use(session({
  secret: 'your-secret-key', // Change this to a secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // For development purposes, change to true in a production environment with HTTPS
}));

const dbURI = 'mongodb+srv://johnkennedy3313:johnkennedy12@cluster0.0rpgxjx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema and model
const DataSchema = new mongoose.Schema({
  intensity: Number,
  topic: String,
  url: String,
  region: String,
  year: String,
  country: String,
  relevance: Number,
  title: String,
  likelihood: Number,
});

const DataModel = mongoose.model('Data', DataSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    console.log('Fetched data:', data); // Log the fetched data
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Example login route
app.post('/api/login', (req, res) => {
  // Perform login logic, e.g., check credentials

  // For simplicity, assume login is successful
  req.session.loggedIn = true;

  res.json({ message: 'Login successful' });
});

// Example logout route
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
