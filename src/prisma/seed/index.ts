import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

// import { User as userInterface } from '../../app/interfaces/user';

import { Users as usersData } from './data/users';
import { Posts as postsData } from './data/posts';
import { Informations as informationData } from './data/information';
import { Photos as photoData } from './data/photos';


async function runSeeders() {
    await deleteMany()

    await seed_informations()
    await seed_photos()
    await seed_users()
    await seed_posts()
}
async function seed_photos() {
    // console.log(await bcrypt.hash('password', 10))
    await Promise.all(
        photoData.map(async (photo: any) =>
            await prisma.photo.create({
                data: {
                    title: photo.title,
                    url: photo.url,
                }
            })
        )
    );
}


async function seed_informations() {
    // console.log(await bcrypt.hash('password', 10))
    await Promise.all(
        informationData.map(async (information: any) =>
            await prisma.information.create({
                data: {
                    content: information.content,
                }
            })
        )
    );
}

async function seed_users() {
    // console.log(await bcrypt.hash('password', 10))
    await Promise.all(
        usersData.map(async (user: any) =>
            await prisma.user.create({
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    avatar: user.avatar,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                }
            })
        )
    );
}

async function seed_posts() {
    await Promise.all(
        postsData.map(async (post: any) =>
            await prisma.post.create({
                data: {
                    id: post.id,
                    user_id: post.user_id,
                    title: post.title,
                    content: post.content,
                    image_url: post.image_url,
                    published: post.published
                }
            })
        )
    );
}


async function deleteMany() {
    const deletePhotos = prisma.photo.deleteMany({})
    const deletePosts = prisma.post.deleteMany({})
    const deleteUsers = prisma.user.deleteMany({})
    const deleteInformation = prisma.information.deleteMany({})

    // The transaction runs synchronously so deleteUsers must run last.
    await prisma.$transaction([deletePhotos, deleteInformation, deletePosts, deleteUsers])
}

runSeeders()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
        process.exit(1);
    })
    .finally(async () => {
        console.log('Successfully seeded database. Closing connection.');
        await prisma.$disconnect();
    });