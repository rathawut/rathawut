'use client';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="px-4 py-3">
      <div className="flex">
        <Link href="/" className="px-4 py-2 text-gray-700">
          Home
        </Link>
        <Link href="/about" className="px-4 py-2 text-gray-700">
          About Me
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
