import { Icon } from "@iconify/react";
import { openInNewTab } from "@/utils/window-utils";
import { Dispatch, SetStateAction } from "react";

interface NavigationPanelProps {
  setActiveTab: Dispatch<SetStateAction<any>>;
}

const NavigationPanel = ({ setActiveTab }: NavigationPanelProps) => {
  function checkTheme() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  return (
    <div className="flex dark:bg-[#29282B] relative h-screen overflow-hidden lg:w-[25rem] shadow-lg">
      <div className="m-auto">
        <div className="text-txt dark:text-white font-bold text-5xl">
          Abhishek AN
        </div>
        <div className="text-black dark:text-white text-xl mt-9">
          A <b>Full Stack Android Developer</b>
          <br></br>based in Bangalore, India.
        </div>
        <div className="flex flex-row space-x-4 mt-9 ">
          <Icon
            className="cursor-pointer"
            icon="entypo-social:linkedin-with-circle"
            width={24}
            color={checkTheme() ? "white" : "black"}
            height={24}
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/abhishek-an/")
            }
          />
          <Icon
            className="cursor-pointer"
            icon="entypo-social:twitter-with-circle"
            color={checkTheme() ? "white" : "black"}
            width={24}
            height={24}
            onClick={() => openInNewTab("https://twitter.com/im_abhishekan")}
          />
          <Icon
            className="cursor-pointer"
            icon="akar-icons:github-fill"
            color={checkTheme() ? "white" : "black"}
            width={24}
            height={24}
            onClick={() => openInNewTab("https://github.com/DarkAbhi")}
          />
          <Icon
            className="cursor-pointer"
            icon="akar-icons:discord-fill"
            color={checkTheme() ? "white" : "black"}
            width={24}
            height={24}
            onClick={() =>
              openInNewTab("https://discordapp.com/users/309409028306501635")
            }
          />
          <Icon
            className="cursor-pointer"
            icon="eva:email-fill"
            color={checkTheme() ? "white" : "black"}
            width={24}
            height={24}
            onClick={() => (location.href = "mailto:iamabhishekan@gmail.com")}
          />
        </div>
        <button
          type="button"
          className="mt-6 text-white bg-blue-700 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
        <button
          type="button"
          className="mt-6 text-white bg-blue-700 hover:bg-blue-800 dark:bg-green-600 dark:hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={() => setActiveTab("uses-this")}
        >
          Uses this
        </button>
      </div>
    </div>
  );
};

export default NavigationPanel;
