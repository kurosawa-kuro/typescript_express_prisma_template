import { faker } from '@faker-js/faker';

export const Users = [
    // User 1
    {
        id: 1,
        name: 'test admin',
        email: 'admin@admin.com',
        password: '$2b$10$6daMkc2N.9Rt6zdmoYYU1eRcmGFFB.p6HkGtrMjH787ScqPqO26AO', // password
        role: 'admin',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3251/3251650.png',
        createdAt: new Date(
            faker.date.past(),
        ),
        updatedAt: new Date(
            faker.date.past(),
        ),
    },
    {
        id: 2,
        name: 'test user',
        email: 'user@user.com',
        password: '$2b$10$6daMkc2N.9Rt6zdmoYYU1eRcmGFFB.p6HkGtrMjH787ScqPqO26AO', // password
        role: 'user',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        createdAt: new Date(
            faker.date.past(),
        ),
        updatedAt: new Date(
            faker.date.past(),
        ),
    },

    {
        id: 3,
        name: 'test user',
        email: 'user2@user.com',
        password: '$2b$10$6daMkc2N.9Rt6zdmoYYU1eRcmGFFB.p6HkGtrMjH787ScqPqO26AO', // password
        role: 'user',
        avatar: 'https://cdn-icons-png.flaticon.com/512/236/236832.png',
        createdAt: new Date(
            faker.date.past(),
        ),
        updatedAt: new Date(
            faker.date.past(),
        ),
    }, {
        id: 4,
        name: 'test user',
        email: 'user3@user.com',
        password: '$2b$10$6daMkc2N.9Rt6zdmoYYU1eRcmGFFB.p6HkGtrMjH787ScqPqO26AO', // password
        role: 'user',
        avatar: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
        createdAt: new Date(
            faker.date.past(),
        ),
        updatedAt: new Date(
            faker.date.past(),
        ),
    },

    // User 2
    // {
    //     id: '9371f314-1c93-11ec-9621-0242ac130002',
    //     createdAt: new Date(
    //         'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
    //     ),
    //     updatedAt: new Date(
    //         'Tue Sep 21 2021 16:16:50 GMT-0400 (Eastern Daylight Time)'
    //     ),
    // }
];