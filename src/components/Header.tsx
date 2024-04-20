import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-accent-1 border-b border-accent-2 shadow-sm h-16 px-8 py-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">Yui Sato's Blog</Link>
      </h1>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
