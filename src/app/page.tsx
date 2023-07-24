import ProfileCard from "@/components/ProfileCard";
import AboutMe from "@/components/AboutMe";
import BlogPosts from "@/components/BlogPosts";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <ProfileCard />
      </div>
      <div className="pb-6">
        <AboutMe />
      </div>
      <div className="pb-6">
        <BlogPosts />
      </div>
    </div>
  );
};

export default HomePage;
