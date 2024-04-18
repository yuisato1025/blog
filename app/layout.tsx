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

function Footer() {
  return <footer className="bg-accent-1 border-t border-accent-2"></footer>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
