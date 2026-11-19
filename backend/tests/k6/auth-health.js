
import http from 'k6/http';
import { check } from 'k6';

// Test configuration
// export const options = {
//     vus: 1,
//     iterations: 100000,
// };
export const options = {
    vus: 5,
    duration: '30s',
};

// Test execution
export default function () {
    const response = http.get('http://localhost:3001/health');

    check(response, {
        'Status code is 200': (res) => res.status === 200,
    });
}
