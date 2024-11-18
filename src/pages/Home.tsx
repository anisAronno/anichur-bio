import { motion } from 'framer-motion';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Profile from '../components/Profile';
import SkillWithMotion from '../components/SkilslWithMition';
import UserCreationListener from '../components/UserCreationListener';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="w-full mx-auto grid md:grid-cols-7 gap-8">
        {/* Left Column - Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2"
        >
          <Profile />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5"
        >
          {/* About Section */}
          <AboutMe />
          <UserCreationListener />
          {/* Experience Section */}
          <Experience />
          {/* Skills Section */}
          <SkillWithMotion />
          {/* Education Section */}
          <Education />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
