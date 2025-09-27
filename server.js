const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Hech qanday HTML, faqat plain text
app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    // Avval Content-Type ni o'rnatamiz
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache');

    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    // Natural son tekshirish
    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }

    // LCM hisoblash
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (x * y) / gcd(x, y);

    // Faqat raqam qaytarish
    res.send(lcm.toString());
});

// Root yo'lini olib tashlaymiz yoki plain text qilamiz
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Use: /xolmominovdilshodbek4_gmail_com?x=4&y=6');
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} da ishlamoqda`);
});