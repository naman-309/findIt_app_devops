
import http from 'k6/http';
import { check } from 'k6';

const TEST_RUN_ID = __ENV.TEST_RUN_ID;

if (!TEST_RUN_ID) {
    throw new Error('Please provide TEST_RUN_ID');
}

export const options = {
    stages: [
        { duration: '1m', target: 5 },
        { duration: '1m', target: 10 },
        { duration: '1m', target: 20 },
        { duration: '1m', target: 30 },
        { duration: '1m', target: 30 },
        { duration: '1m', target: 0 },
    ],
};

export default function () {
    const email =
        `k6test.load.${TEST_RUN_ID}.${__VU}@example.com`;

    const response = http.post(
        'http://localhost:3001/api/auth/login',
        JSON.stringify({
            email,
            password: 'TestUser12345',
        }),
        {
            headers: {
                'Content-Type': 'application/json',
            },
            tags: {
                name: 'Auth Login',
            },
        }
    );

    check(response, {
        'Login successful': (res) =>
            res.status >= 200 && res.status < 300,
    });
}
