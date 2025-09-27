const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // ✅ Heroku uchun o'zgartirildi

function calculateLCM(a, b) {
    function gcd(x, y) {
        if (y === 0) return x;
        return gcd(y, x % y);
    }
    return (a * b) / gcd(a, b);
}

app.get('/xolmominovdilshodbek4_gmail_com', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }

    const lcm = calculateLCM(x, y);
    res.send(lcm.toString());
});

app.get('/', (req, res) => {
    res.send(`
        <h1>LCM Service - Xolmominov Dilshodbek</h1>
        <p>Email: xolmominovdilshodbek4@gmail.com</p>
        <h3>Testlar:</h3>
        <ul>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=4&y=6">/xolmominovdilshodbek4_gmail_com?x=4&y=6</a> (12)</li>
            <li><a href="/xolmominovdilshodbek4_gmail_com?x=5&y=7">/xolmominovdilshodbek4_gmail_com?x=5&y=7</a> (35)</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`✅ Server ${PORT} portda ishlamoqda`);
});