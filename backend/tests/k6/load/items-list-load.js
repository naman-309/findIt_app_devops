
import http from 'k6/http';
import { check } from 'k6';

export const options = {
    scenarios: {
        items_list_load: {
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
    const response = http.get(
        'http://localhost:3002/api/items',
        {
            tags: { name: 'Get All Items' },
        }
    );

    check(response, {
        'Items API returns 200': (res) => res.status === 200,
    });
}
