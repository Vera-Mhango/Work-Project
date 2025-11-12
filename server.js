const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/main.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/news.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/team.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open your browser`);
});