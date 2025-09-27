const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Cache ni to'liq o'chirish
app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (x * y) / gcd(x, y);

    res.send(lcm.toString());
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Server is ready');
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} da ishlamoqda`);
});