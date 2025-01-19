// app/posts/page.tsx
import { prisma } from '@/app/lib/db/prisma';
import Link from 'next/link';

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
      tags: true,
    },
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-900 px-3 py-1 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="text-gray-600">By {post.user.name}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
