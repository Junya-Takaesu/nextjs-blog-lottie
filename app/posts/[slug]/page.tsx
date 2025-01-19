// app/posts/[slug]/page.tsx
import { prisma } from '@/app/lib/db/prisma';
import { notFound } from 'next/navigation';

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      user: true,
      tags: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag.id}
            className="bg-gray-900 px-3 py-1 rounded-full text-sm"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <div className="prose lg:prose-xl">{post.content}</div>
      <div className="mt-8 text-gray-600">Posted by {post.user.name}</div>
    </div>
  );
}
