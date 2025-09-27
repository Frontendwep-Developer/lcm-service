const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Hech qanday middleware, faqat kerakli kod
app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    // Avval headers ni o'rnatamiz
    res.setHeader('Content-Type', 'text/plain');

    // Parametrlarni olish
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    // Natural son tekshirish
    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }

    // LCM hisoblash
    function calculateLCM(a, b) {
        function gcd(x, y) {
            return y === 0 ? x : gcd(y, x % y);
        }
        return (a * b) / gcd(a, b);
    }

    const result = calculateLCM(x, y);
    res.send(result.toString());
});

// Boshqa hech narsa yo'q
app.listen(PORT, () => {
    console.log('Server ishga tushdi');
});