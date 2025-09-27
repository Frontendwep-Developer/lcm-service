const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Yo'lni tekshirish
    if (req.method === 'GET' && parsedUrl.pathname === '/app/xolmominovdilshodbek4_gmail_com') {
        const x = parseInt(parsedUrl.query.x);
        const y = parseInt(parsedUrl.query.y);

        // Headers ni aniq o'rnatish
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Cache-Control', 'no-cache');

        // Natural son tekshirish
        if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
            res.end('NaN');
            return;
        }

        // LCM hisoblash
        const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        const lcm = (x * y) / gcd(x, y);

        // Faqat raqam qaytarish
        res.end(lcm.toString());
        return;
    }

    // Boshqa yo'llar uchun
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log('Server ishlamoqda');
});