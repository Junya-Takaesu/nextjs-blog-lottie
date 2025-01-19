import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create a test user
    const user = await prisma.user.create({
        data: {
            email: 'test@example.com',
            name: 'Test User',
            password: 'hashed_password'
        }
    });

    // Create some tags
    const tags = await Promise.all([
        prisma.tag.create({ data: { name: 'Next.js', slug: 'nextjs' } }),
        prisma.tag.create({ data: { name: 'React', slug: 'react' } }),
        prisma.tag.create({ data: { name: 'Prisma', slug: 'prisma' } })
    ]);

    // Create a test post
    await prisma.post.create({
        data: {
            title: 'First Post',
            slug: 'first-post',
            content: 'This is my first post content.',
            published: true,
            userId: user.id,
            tags: {
                connect: tags.map(tag => ({ id: tag.id }))
            }
        }
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });