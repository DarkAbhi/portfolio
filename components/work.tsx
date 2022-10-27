import { projectData, workData } from "../data/work-data";
import ProjectItem from "./work/project-item";
import WorkItem from "./work/work-item";

const Work = () => {
  return (
    <div className="flex-col dark:bg-background-dark h-auto lg:h-screen pl-11 pt-11 lg:overflow-auto">
      <div className="text-black dark:text-white font-semibold text-3xl">
        Work
      </div>
      {workData.map((item) => (
        <WorkItem
          key={item.title}
          image={item.image}
          role={item.role}
          title={item.title}
          description={item.description}
          playStoreLink={item.playStoreLink}
          websiteLink={item.websiteLink}
        />
      ))}
      <div className="text-black dark:text-white font-semibold text-3xl">
        Projects
      </div>
      <div className="flex flex-col lg:flex-row">
        {projectData.map((item) => (
          <ProjectItem
            key={item.title}
            title={item.title}
            description={item.description}
            viewLink={item.viewLink}
            sourceLink={item.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
