exports.handler = async (event) => {
    // Faqat GET so'rovlarni qabul qilish
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Method Not Allowed'
        };
    }

    try {
        // Parametrlarni olish
        const x = parseInt(event.queryStringParameters.x);
        const y = parseInt(event.queryStringParameters.y);

        // Natural son tekshirish (1, 2, 3, ...)
        if (isNaN(x) || isNaN(y) || x < 1 || y < 1) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'text/plain',
                    'Cache-Control': 'no-cache'
                },
                body: 'NaN'
            };
        }

        // LCM hisoblash
        function calculateLCM(a, b) {
            function gcd(x, y) {
                if (y === 0) return x;
                return gcd(y, x % y);
            }
            return (a * b) / gcd(a, b);
        }

        const lcm = calculateLCM(x, y);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/plain',
                'Cache-Control': 'no-cache'
            },
            body: lcm.toString()
        };

    } catch (error) {
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: 'NaN'
        };
    }
};