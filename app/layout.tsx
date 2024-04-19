import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: `Yui Sato's Blog.`,
  description: `A blog about software development and other things.`,
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

function Header() {
  return (
    <header className="bg-accent-1 border-b border-accent-2 p-4 shadow-sm">
      <h1 className="text-2xl font-bold">
        <Link href="/">Yui Sato's Blog</Link>
      </h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 p-4">
      <small>&copy; 2024 - Copyright yuisato, All Rights Reserved.</small>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
