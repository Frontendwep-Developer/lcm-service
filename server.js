const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// LCM funksiyasi
const calculateLCM = (a, b) => {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    return (a * b) / gcd(a, b);
};

// Asosiy endpoint
app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    // Headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache');

    try {
        // Parametrlarni olish
        const x = parseInt(req.query.x, 10);
        const y = parseInt(req.query.y, 10);

        // Natural son tekshirish (1, 2, 3, ...)
        if (!Number.isInteger(x) || !Number.isInteger(y) || x < 1 || y < 1) {
            return res.send('NaN');
        }

        // LCM hisoblash
        const lcm = calculateLCM(x, y);

        // Faqat raqam qaytarish
        return res.send(lcm.toString());

    } catch (error) {
        return res.send('NaN');
    }
});

// Boshqa hech qanday route YO'Q
app.listen(PORT, () => {
    console.log(`Server ${PORT} da ishlamoqda`);
});