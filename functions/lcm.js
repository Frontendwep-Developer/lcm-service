exports.handler = async (event) => {
    // Faqat GET so'rov
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Parametrlarni olish
    const { x, y } = event.queryStringParameters;

    // Sonlarga o'tkazish
    const numX = parseInt(x);
    const numY = parseInt(y);

    // Natural son tekshirish
    if (isNaN(numX) || isNaN(numY) || numX < 1 || numY < 1) {
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: 'NaN'
        };
    }

    // LCM hisoblash
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (numX * numY) / gcd(numX, numY);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache'
        },
        body: lcm.toString()
    };
};