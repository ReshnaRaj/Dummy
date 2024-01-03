const express = require('express');
const app = express();

app.set('port', 3000);
const port = app.get('port');
console.log(`Server running on port ${port}`);
