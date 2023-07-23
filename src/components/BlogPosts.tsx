import { sql } from '@vercel/postgres';
import Image from 'next/image';

export default async function BlogPosts(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from posts ORDER BY created_at DESC`;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid gap-6">
        {rows.map((row) => (
          <div key={row.id} className="bg-white rounded-lg shadow-md flex">
            <div className="h-40 w-40 relative rounded-l-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt={row.title}
                width={160}
                height={160}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{row.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                Published on: {new Date(row.created_at).toLocaleString()}
              </p>
              <p className="text-gray-600 line-clamp-3">{row.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
