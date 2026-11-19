
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
    const response = http.get('http://localhost:3002/api/items');

    console.log(`Items API Status: ${response.status}`);

    check(response, {
        'Get all items returns 200': (res) => res.status === 200,
    });
}
