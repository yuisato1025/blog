import { Footer, Header } from '../components';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <section className="flex flex-col min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
