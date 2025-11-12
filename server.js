const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/main.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/news.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/team.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open your browser`);
});