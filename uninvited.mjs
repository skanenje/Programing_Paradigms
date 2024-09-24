import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;
const GUESTS_DIR = './guests';

const server = http.createServer(async (req, res) => {
    if (req.method !== 'POST') {
        sendJsonResponse(res, 405, { error: 'Method Not Allowed' });
        return;
    }

    const guestName = path.basename(req.url);
    const filePath = path.join(GUESTS_DIR, `${guestName}.json`);

    try {
        let body = '';
        for await (const chunk of req) {
            body += chunk.toString();
        }

        await fs.mkdir(GUESTS_DIR, { recursive: true });
        await fs.writeFile(filePath, body);

        sendJsonResponse(res, 201, body);
    } catch (err) {
        console.error('Server error:', err);
        sendJsonResponse(res, 500, { error: 'server failed' });
    }
});

function sendJsonResponse(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(typeof data === 'string' ? data : JSON.stringify(data));
}

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default server;