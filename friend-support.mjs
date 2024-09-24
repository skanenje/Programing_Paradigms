const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const GUESTS_DIR = './guests';

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        sendJsonResponse(res, 405, { error: 'Method Not Allowed' });
        return;
    }

    const guestName = path.basename(req.url);
    const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                sendJsonResponse(res, 404, { error: 'guest not found' });
            } else {
                console.error('Server error:', err);
                sendJsonResponse(res, 500, { error: 'server failed' });
            }
            return;
        }

        try {
            const guestData = JSON.parse(data);
            sendJsonResponse(res, 200, guestData);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            sendJsonResponse(res, 500, { error: 'server failed' });
        }
    });
});

function sendJsonResponse(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});