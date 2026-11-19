
import http from 'k6/http';
import { check } from 'k6';

const TEST_RUN_ID = __ENV.TEST_RUN_ID;

if (!TEST_RUN_ID) {
    throw new Error('Please provide TEST_RUN_ID');
}

export const options = {
    scenarios: {
        profile_load: {
            executor: 'per-vu-iterations',
            vus: 50,
            iterations: 1,
            maxDuration: '60s',
        },
    },

    thresholds: {
        checks: ['rate==1'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {
    const email = `k6test.load.${TEST_RUN_ID}.${__VU}@example.com`;

    // 1. Login first
    const loginResponse = http.post(
        'http://localhost:3001/api/auth/login',
        JSON.stringify({
            email,
            password: 'TestUser12345',
        }),
        {
            headers: { 'Content-Type': 'application/json' },
            tags: { name: 'Login' },
        }
    );

    const loginSuccessful = check(loginResponse, {
        'Login successful': (res) =>
            res.status >= 200 && res.status < 300,
    });

    if (!loginSuccessful) {
        return;
    }

    // 2. Fetch profile using the login cookie
    const profileResponse = http.get(
        'http://localhost:3001/api/auth/profile',
        {
            tags: { name: 'Profile' },
        }
    );

    check(profileResponse, {
        'Profile fetched successfully': (res) =>
            res.status >= 200 && res.status < 300,
    });
}
