
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
    const url = 'http://localhost:3001/api/auth/login';

    const payload = JSON.stringify({
        email: 'k6test.login@example.com',
        password: 'TestUser12345',
    });

    const response = http.post(url, payload, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(`Login status: ${response.status}`);

    check(response, {
        'Login successful': (res) =>
            res.status >= 200 && res.status < 300,
    });
}
