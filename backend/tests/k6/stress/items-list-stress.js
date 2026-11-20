
import http from 'k6/http';
import { check } from 'k6';

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
    const response = http.get(
        'http://localhost:3002/api/items',
        {
            tags: {
                name: 'Get All Items',
            },
        }
    );

    check(response, {
        'Items API returns 200': (res) => res.status === 200,
    });
}
