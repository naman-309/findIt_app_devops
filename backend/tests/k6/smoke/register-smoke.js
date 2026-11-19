
import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 1,
    iterations: 1,

    thresholds: {
        checks: ['rate==1'],
        http_req_failed: ['rate==0'],
    },
};

export default function () {
    // Generate a unique email for every test request
    const email = `k6test.${Date.now()}.${__VU}.${__ITER}@example.com`;

    const url = 'http://localhost:3001/api/auth/register';

    const payload = JSON.stringify({
        name: 'K6 Test User',
        email: email,
        password: 'TestUser12345',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    console.log(`Register status: ${response.status}`);
    console.log(`Test email: ${email}`);

    check(response, {
        'Register returns 2xx status': (res) =>
            res.status >= 200 && res.status < 300,
    });
}
