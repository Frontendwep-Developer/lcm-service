const express = require('express');
const app = express();
const PORT = 3000;

// EKUK funksiyasi
function calculateLCM(a, b) {
    function gcd(x, y) {
        if (y === 0) return x;
        return gcd(y, x % y);
    }
    return (a * b) / gcd(a, b);
}

// ✅ SIZNING EMAIL MANZILINGIZGA MOS YO'L
app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    // Content-Type ni plain text qilish
    res.setHeader('Content-Type', 'text/plain');

    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    // Natural son tekshirish (1, 2, 3, ...)
    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }

    // LCM hisoblash
    const lcm = calculateLCM(x, y);

    // Faqat raqam qaytarish
    res.send(lcm.toString());
});

// Test qilish uchun asosiy sahifa
app.get('/', (req, res) => {
    res.send(`
        <h1>LCM Service - Xolmominov Dilshodbek</h1>
        <p>Email: xolmominovdilshodbek4@gmail.com</p>

        <h3>Testlar:</h3>
        <ul>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=4&y=6">/xolmominovdilshodbek4_gmail_com?x=4&y=6</a> (12)</li>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=5&y=7">/xolmominovdilshodbek4_gmail_com?x=5&y=7</a> (35)</li>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=12&y=18">/xolmominovdilshodbek4_gmail_com?x=12&y=18</a> (36)</li>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=0&y=5">/xolmominovdilshodbek4_gmail_com?x=0&y=5</a> (NaN)</li>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=abc&y=def">/xolmominovdilshodbek4_gmail_com?x=abc&y=def</a> (NaN)</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`✅ Server http://localhost:${PORT} da ishlamoqda`);
    console.log(`📧 Email: xolmominovdilshodbek4@gmail.com`);
    console.log(`🔗 Test URL: http://localhost:${PORT}/xolmominovdilshodbek4_gmail_com?x=4&y=6`);
});