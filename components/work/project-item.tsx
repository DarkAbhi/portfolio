import Image from "next/image";
import { openInNewTab } from "../../utils/window-utils";

export interface ProjectItemProps {
  title: string;
  description: string;
  viewLink: string | null;
  sourceLink: string | null;
}

function ProjectItem({
  title,
  description,
  viewLink,
  sourceLink,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col my-6 dark:bg-[#29282B] mr-6 lg:w-fit shadow-md rounded-b-lg">
      <div
        className={`${
          title === "COVID Relief"
            ? "bg-blue-400 dark:bg-[#586EDF]"
            : "bg-purple-600 dark:bg-[#A057DE]"
        } h-14 lg:text-2xl text-white font-semibold rounded-t-lg flex items-center pl-3 pr-4 `}
      >
        {title}
      </div>
      <div
        className="text-black px-2 py-2 text-sm dark:text-white"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
      <div className="flex flex-row px-2">
        {viewLink !== null ? (
          <button
            type="button"
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => openInNewTab(viewLink)}
          >
            VIEW
          </button>
        ) : (
          ""
        )}
        {sourceLink !== null ? (
          <button
            type="button"
            className="text-blue-700 mt-4 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 "
            onClick={() => openInNewTab(sourceLink)}
          >
            GITHUB
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
