const app = require('./app.js');
require('./database.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log("Server on port", PORT);
