const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hech qanday HTML, faqat plain text
app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    // Avval Content-Type ni o'rnatamiz
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store');

    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    console.log('Request:', x, y); // Log qo'shamiz

    // Natural son tekshirish
    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        console.log('NaN qaytarilyapti');
        return res.send('NaN');
    }

    // LCM hisoblash
    function calculateLCM(a, b) {
        function gcd(x, y) {
            return y === 0 ? x : gcd(y, x % y);
        }
        return (a * b) / gcd(a, b);
    }

    const result = calculateLCM(x, y).toString();
    console.log('Result:', result);
    res.send(result);
});

// Boshqa HECH QANDAY route QO'YMAYMIZ!
app.listen(PORT, () => {
    console.log(`Server ${PORT} da ishlamoqda`);
});