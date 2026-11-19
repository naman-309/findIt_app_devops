
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 2 },
        { duration: '20s', target: 2 },
        { duration: '10s', target: 0 },
    ],

    thresholds: {
        checks: ['rate==1'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    const email = `k6test.${Date.now()}.${__VU}.${__ITER}@example.com`;

    const payload = JSON.stringify({
        name: 'K6 Load Test User',
        email: email,
        password: 'TestUser12345',
    });

    const response = http.post(
        'http://localhost:3001/api/auth/register',
        payload,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    check(response, {
        'Register successful': (res) =>
            res.status >= 200 && res.status < 300,
    });

    sleep(1);
}
