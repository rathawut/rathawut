import Link from 'next/link';
import Navigation from '@/components/Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/">Rathawut.com</Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
