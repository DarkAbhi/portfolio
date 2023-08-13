import { Metadata } from "next";
import { projectData, workData } from "@/data/work-data";
import ProjectItem from "@/components/work/project-item";
import WorkItem from "@/components/work/work-item";

export const metadata: Metadata = {
  title: "Abhishek AN",
  description: "Abhishek AN's portfolio",
  keywords: [
    "Abhishek",
    "Abhishek AN",
    "AgriApp",
    "Appiness",
    "Uses this",
    "BigBasket",
    "Iku",
    "Terrum",
    "Climate action",
    "Communities",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <div className="flex-col dark:bg-background-dark h-auto lg:h-screen pl-11 pt-11 lg:overflow-auto">
        <div className="font-bold text-3xl dark:text-green-500 text-blue-800 tracking-widest">
          WORK
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
    </div>
  );
}
