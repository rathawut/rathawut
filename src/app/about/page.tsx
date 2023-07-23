import ProfileCard from "@/components/ProfileCard";

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <ProfileCard />
      </div>
      <h1 className="text-center text-4xl font-bold mb-8">About Me</h1>
      <p className="text-center text-lg text-gray-950">
        My name is Rathawut Lertsuksakda. I&apos;m a Muslim and I also go by my Arabic name, Ilyas.
        As a Tech Lead and Full Stack Developer, my area of expertise lies in Natural Language Processing.
        I have a strong educational background in the field, with both bachelor&apos;s and master&apos;s degrees in Information Technology from King Mongkut&apos;s Institute of Technology Ladkrabang, located in Bangkok, Thailand.
      </p>
    </div>
  );
};

export default AboutPage;
