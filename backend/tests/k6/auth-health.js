
// // import http from 'k6/http';
// // import { check } from 'k6';

// // // Test configuration
// // // export const options = {
// // //     vus: 1,
// // //     iterations: 100000,
// // // };
// // export const options = {
// //     vus: 5,
// //     duration: '30s',
// // };

// // // Test execution
// // export default function () {
// //     const response = http.get('http://localhost:3001/health');

// //     check(response, {
// //         'Status code is 200': (res) => res.status === 200,
// //     });
// // }


// import http from 'k6/http';
// import { check, sleep } from 'k6';

// export const options = {
//     vus: 1,

//     stages: [
//         // Ramp-up: 1 to 3 users
//         { duration: '10s', target: 3 },

//         // Steady state: maintain 3 users
//         { duration: '20s', target: 3 },

//         // Ramp-down: 3 to 0 users
//         { duration: '10s', target: 0 },
//     ],
// };

// export default function () {
//     const response = http.get('http://localhost:3001/health');

//     check(response, {
//         'Status code is 200': (res) => res.status === 200,
//     });

//     sleep(1);
// }



import http from 'k6/http';
import { check } from 'k6';

export const options = {
    // Dheere-dheere load badhana taaki server ki limit pata chale
    stages: [
        { duration: '15s', target: 50 },   // 15s mein 50 users tak le jaayein
        { duration: '20s', target: 150 },  // Agle 20s mein 150 users tak badhayein
        { duration: '20s', target: 300 },  // Peak load: 300 users ek saath
        { duration: '15s', target: 0 },    // Wapas 0 par laayein (Cool-down)
    ],

    // Pass/Fail rules (agar limit cross hui toh test khud fail mark ho jayega)
    thresholds: {
        http_req_failed: ['rate<0.01'],   // 1% se kam requests fail honi chahiye
        http_req_duration: ['p(95)<200'], // 95% requests 200ms se kam mein aani chahiye
    },
};

export default function () {
    // Apna exact port aur URL check kar lein (3001 ya 3002)
    const res = http.get('http://localhost:3001/health');

    check(res, {
        'Status is 200': (r) => r.status === 200,
    });

    // Note: Yahan sleep() nahi lagaya hai taaki har user bina ruke maximum speed se hit kare
}
