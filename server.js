const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Shartga mos yo'l: /something/xolmominovdilshodbek4_gmail_com
app.get('/api/xolmominovdilshodbek4_gmail_com', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return res.send('NaN');
    }

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (x * y) / gcd(x, y);

    res.send(lcm.toString());
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} da ishlamoqda`);
});