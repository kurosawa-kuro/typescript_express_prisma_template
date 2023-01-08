import { faker } from '@faker-js/faker';

export const Posts = [
    {
        id: 1,
        user_id: 1,
        title: 'title 1',
        content: 'content 1',
        image_url: 'image_url 1',
        createdAt: new Date(faker.date.past()),
        updatedAt: new Date(faker.date.past()),
    },
    {
        id: 2,
        user_id: 1,
        title: 'title 2',
        content: 'content 2',
        image_url: 'image_url 2',
        createdAt: new Date(faker.date.past()),
        updatedAt: new Date(faker.date.past()),
    },
];