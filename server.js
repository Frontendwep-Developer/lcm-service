const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 10000;

// LCM funksiyasi
function calculateLCM(a, b) {
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }
    return (a * b) / gcd(a, b);
}

// Server yaratish
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Faqat kerakli yo'lni qayta ishlash
    if (req.method === 'GET' && pathname === '/xolmominovdilshodbek4_gmail_com') {
        const x = parseInt(parsedUrl.query.x);
        const y = parseInt(parsedUrl.query.y);

        // Headers ni o'rnatish
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Cache-Control', 'no-cache');

        // Natural son tekshirish
        if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
            res.end('NaN');
            return;
        }

        // LCM hisoblash
        const result = calculateLCM(x, y);
        res.end(result.toString());

    } else {
        // Boshqa yo'llar uchun 404
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server ${PORT} da ishlamoqda`);
});