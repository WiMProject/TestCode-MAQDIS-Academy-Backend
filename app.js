const express = require('express');
const { variable1, variable2, variable3, variable4, sentence } = require('./config/variables');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: sentence,
    variables: { variable1, variable2, variable3, variable4 }
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Output: ${sentence}`);
  });
}

module.exports = app;