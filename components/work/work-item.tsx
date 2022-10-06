import Image from "next/image";
import { openInNewTab } from "../../utils/window-utils";

export interface WorkItemProps {
  image: string;
  role: string;
  title: string;
  description: string;
  playStoreLink: string | null;
  websiteLink: string | null;
}

function WorkItem({
  image,
  role,
  title,
  description,
  playStoreLink,
  websiteLink,
}: WorkItemProps) {
    
  return (
    <div className="flex flex-row my-6">
      <div className="flex relative">
        <div className="flex flex-col m-auto min-w-[140px]">
          <Image className="items-center" src={image} width={122} height={55} />
          <div className="text-black dark:text-white mt-6 text-center">
            {role}
          </div>
        </div>
      </div>
      <div className="flex-1 flex-col ml-10">
        <div className="text-black dark:text-white italic">{title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-black mt-6 dark:text-white"
        ></div>
        {playStoreLink !== null ? (
          <button
            type="button"
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => openInNewTab(playStoreLink)}
          >
            GOOGLE PLAY
          </button>
        ) : (
          ""
        )}
        {websiteLink !== null ? (
          <button
            type="button"
            className="text-blue-700 mt-4 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 "
            onClick={() => openInNewTab(websiteLink)}
          >
            WEBSITE
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default WorkItem;
