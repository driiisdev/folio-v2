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
import { socialLinks, resumeLink, bio } from "../data/misc";
import DownloadIcon from "../assets/svg/download.svg?react";
import {
  useContactModal,
  useNavigationTab,
  useCubeIndex,
} from "../store/useStore";

const Portfolio: React.FC = () => {
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
      <div className="bg-gray-100 h-screen flex flex-col">
        <Header />

        <div className="flex flex-1 overflow-hidden">
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
                  {bio.labelA?.map((text, index) => (
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
              <h1 className="text-7xl text-right font-bold">{bio?.labelB}</h1>
              {
                bio.description && (
                  <p className="mx-auto w-[25rem] pt-8 pb-16 font-normal text-base text-center text-gray-700">
                    {bio.description}
                  </p>
                )
              }
            </div>
            <div className="py-2 flex flex-row items-start justify-between">
              <div className="flex flex-col items-start gap-1">
                <h4 className="font-bold">INTERESTS</h4>
                {
                  bio.interests?.length ? (
                    <ul className="list-none">
                      {bio.interests.map((interest, index) => (
                        <li key={index} className="text-xs text-gray-700">
                          {interest}
                        </li>
                      ))}
                    </ul>
                  ) : null
                }
              </div>
              <div className="flex flex-col items-start gap-2">
                <a
                  target="_blank"
                  href={resumeLink.url}
                  rel="noopener noreferrer"
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

          <div className="w-1/2 bg-gray-100 flex flex-col">
            <div className="py-2 px-12 flex-shrink-0">
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            <div className="flex-1 overflow-y-auto px-12 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {renderContent()}
            </div>
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
