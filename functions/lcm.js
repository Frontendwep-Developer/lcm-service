exports.handler = async (event, context) => {
    // Faqat GET so'rovlarni qabul qilish
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // Parametrlarni olish
    const x = parseInt(event.queryStringParameters.x);
    const y = parseInt(event.queryStringParameters.y);

    // LCM funksiyasi
    function calculateLCM(a, b) {
        function gcd(x, y) {
            if (y === 0) return x;
            return gcd(y, x % y);
        }
        return (a * b) / gcd(a, b);
    }

    // Natural son tekshirish
    if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: 'NaN'
        };
    }

    // Hisoblash
    const lcm = calculateLCM(x, y);

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/plain' },
        body: lcm.toString()
    };
};