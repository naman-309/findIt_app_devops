
const path = require('path');

module.exports = {
    apps: [
        {
            name: 'findit-auth',
            script: 'src/index.js',

            cwd: path.resolve(__dirname, 'apps/auth-service'),

            instances: 1,
            exec_mode: 'fork',

            autorestart: true,
            watch: false,

            env: {
                NODE_ENV: 'development',
            },
        },

        {
            name: 'findit-items',
            script: 'src/index.js',

            cwd: path.resolve(__dirname, 'apps/items-service'),

            instances: 1,
            exec_mode: 'fork',

            autorestart: true,
            watch: false,

            env: {
                NODE_ENV: 'development',
            },
        },
    ],
};
