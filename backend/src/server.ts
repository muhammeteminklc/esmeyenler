import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Esenler GSHM API');
});

// Placeholder auth routes
app.post('/login', (_req, res) => {
  res.json({ message: 'login - not implemented' });
});

app.post('/register', (_req, res) => {
  res.json({ message: 'register - not implemented' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
