const http = require('http');
const path = require('path');
const dotenv = require('dotenv');

const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

const { app } = require('./app');

const server = http.createServer(app);
const PORT = process.env.PORT || 3978;

server.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});
