import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Rathawut.com" width={48} height={48} />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
