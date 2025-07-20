import { useEffect } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Navigation from "../components/Navigation";
import ContactModal from "../components/ContactModal";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import ContributionCard from "../components/ContributionCard";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import { contributions } from "../data/contributions";
import { socialLinks, resumeLink } from "../data/socials";
import DownloadIcon from "../assets/svg/download.svg?react";
import {
  useContactModal,
  useNavigationTab,
  useCubeIndex,
} from "../store/useStore";

const Portfolio: React.FC = () => {
  const titles = ["SOFTWARE", "BACKEND", "FULLSTACK", "AI/ML"];
  const { isContactOpen, setIsContactOpen } = useContactModal();
  const { activeTab, setActiveTab } = useNavigationTab();
  const { cubeIndex, setCubeIndex } = useCubeIndex();

  useEffect(() => {
    const handleRotation = setInterval(() => {
      setCubeIndex((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(handleRotation);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Experience":
        return experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ));
      case "Projects":
        return projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ));
      case "Contributions":
        return contributions.map((cont) => (
          <ContributionCard key={cont.id} contribution={cont} />
        ));
      default:
        return experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ));
    }
  };

  return (
    <>
      <div className="bg-gray-100">
        <Header />

        <div className="flex">
          <div className="w-1/2 py-4 px-12 flex flex-col justify-between bg-gray-100">
            <div>
              <div className="relative h-[72px] overflow-hidden perspective-1000">
                <div
                  className="absolute inset-0 transition-transform duration-1000 ease-in-out transform-style-preserve-3d"
                  style={{
                    transform: `rotateX(${cubeIndex * -90}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {titles.map((text, index) => (
                    <div
                      key={index}
                      className="absolute inset-0  text-7xl font-bold text-black"
                      style={{
                        transform: `rotateX(${index * 90}deg) translateZ(64px)`,
                        backfaceVisibility: "hidden",
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="text-7xl text-right font-bold">ENGINEER</h1>
              <p className="pt-8 pb-16 font-normal text-base text-center text-gray-700">
                I am a developer of digital dreams. I build seamless
                <br />
                software solutions, pushing the boundaries of
                <br />
                technology, and crafting elegant code that defies
                <br />
                limits. From designing captivating user interfaces to
                <br />
                optimizing intricate distributed systems.
              </p>
            </div>
            <div className="py-2 flex flex-row items-start justify-between">
              <div className="flex flex-col items-start gap-1">
                <h4 className="font-bold">INTERESTS</h4>
                <p className="font-normal text-xs text-gray-700">
                  Creative Development
                  <br />
                  Technical Content
                  <br />
                  Gaming / Sport
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <a
                  target="_blank"
                  href={resumeLink.url}
                  className="flex items-center gap-2 font-normal text-sm text-black hover:stroke-black hover:font-semibold"
                >
                  <DownloadIcon className="h-6 w-6" />
                  View Full Resume
                </a>
                <div className="flex gap-2">
                  {socialLinks.map(({ id, url, icon: Icon }) => (
                    <a
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border border-black rounded-full hover:bg-black hover:border-white 
                        text-black hover:text-white transition-colors"
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 pt-4 pb-2 px-12 bg-gray-100">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            {renderContent()}
          </div>
        </div>

        <Footer />
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Portfolio;
