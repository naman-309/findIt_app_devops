
import http from 'k6/http';
import { check } from 'k6';

const TEST_RUN_ID = __ENV.TEST_RUN_ID;

if (!TEST_RUN_ID) {
    throw new Error('Please provide TEST_RUN_ID when running k6');
}

export const options = {
    scenarios: {
        register_load: {
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
    // Each VU gets its own predictable email
    const email = `k6test.load.${TEST_RUN_ID}.${__VU}@example.com`;

    const payload = JSON.stringify({
        name: `K6 Load User ${__VU}`,
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
        'Registration successful': (res) =>
            res.status >= 200 && res.status < 300,
    });

    console.log(`VU ${__VU} | ${email} | Status: ${response.status}`);
}
