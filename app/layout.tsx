import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className="bg-slate-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <Link href="/">My Blog</Link>
            </h1>
            <div className="space-x-4">
              <Link href="/posts">Posts</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}
