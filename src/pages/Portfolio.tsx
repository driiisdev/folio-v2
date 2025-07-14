import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ContactModal from "../components/ContactModal";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import Navigation from "../components/Navigation";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";
import GithubIcon from "../assets/svg/github.svg?react";
import LinkedinIcon from "../assets/svg/linkedin.svg?react";
import HashnodeIcon from "../assets/svg/hashnode.svg?react";
import YoutubeIcon from "../assets/svg/youtube.svg?react";
import DownloadIcon from "../assets/svg/download.svg?react";
import { useContactModal, useNavigationTab } from "../store/useStore";

const Portfolio: React.FC = () => {
  // const title = ["SOFTWARE", "AI", "BACKEND", "FULLSTACK"];
  const { isContactOpen, setIsContactOpen } = useContactModal();
  const { activeTab, setActiveTab } = useNavigationTab();
  // const { cubeIndex, setCubeIndex } = useCubeIndex();

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
      default:
        return (
          <div className="text-center text-gray-500 py-12">
            Contributions content coming soon...
          </div>
        );
    }
  };

  // useEffect(()=> {
  //   const handleRotation = setInterval(()=> {
  //     setCubeIndex(()=>{
  //       return (cubeIndex + 1) % title.length;
  //     })
  //   })
  // })

  // useEffect(() => {
  //   const handleCubeRotation = () => {
  //     setCubeIndex((prevIndex: number) => (prevIndex + 1) % title.length);
  //   };

  //   const interval = setInterval(handleCubeRotation, 3000);
  //   return () => clearInterval(interval);
  // });

  return (
    <>
      <div className="bg-gray-100">
        <Header />

        <div className="flex">
          
          <div className="w-1/2 py-4 px-12 flex flex-col justify-between bg-gray-100">
            <div>
              <h1 className="text-7xl text-left font-bold">SOFTWARE</h1>
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
                <button className="flex items-center gap-2 font-normal text-sm text-black hover:stroke-black hover:font-semibold">
                  <DownloadIcon className="h-6 w-6" />
                  View Full Resume
                </button>
                <div className="flex gap-2">
                  {[GithubIcon, LinkedinIcon, HashnodeIcon, YoutubeIcon].map(
                    (Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="p-1 border border-black rounded-full hover:bg-black hover:border-white 
                        text-black hover:text-white transition-colors"
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 py-4 px-12 bg-gray-100 overflow-y-auto">
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
