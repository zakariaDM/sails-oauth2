module.exports.security = {
    oauth: {
        version: '2.0',
        token: {
            length: 32,
            expiration: 3600
        }
    },
    admin: {
        email: {
            address: 'xxxxxxx@gmail.com',
            password: 'xxxxxxxxxxxxx'
        }

    },
    server: {
        url: 'http://localhost:1337'
    }
};
