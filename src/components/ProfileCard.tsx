import Image from 'next/image';
import { FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const ProfileCard: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-900 my-2">Rathawut Lertsuksakda</h2>
        <p className="text-sm text-gray-700">Tech Lead / Full Stack Developer</p>
        <p className="text-sm text-gray-700">30SecondsToFly - acquired by American Express GBT</p>
        <div className="flex my-2">
          <a
            href="https://www.linkedin.com/in/rathawut/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-600 hover:text-blue-800 mr-2"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=xjQ2_dPJ2osC"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-600 hover:text-blue-800 mr-2"
          >
            <FaGraduationCap size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard
