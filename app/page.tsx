import { Metadata } from "next";
import { projectData, workData } from "@/data/work-data";
import ProjectItem from "@/components/work/project-item";
import WorkItem from "@/components/work/work-item";
import TopNav from "@/components/top-nav";
import Image from "next/image";

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
    <div className="h-full w-full px-32">
      <TopNav />
      <div className="grid auto-rows-[192px] grid-cols-3 gap-4 mt-4">
        <div className="row-span-1 rounded-3xl   bg-[#131315]">
          
        </div>
        <div className="row-span-1 rounded-3xl   bg-[#131315]"></div>
        <div className="row-span-1 rounded-3xl   bg-[#131315] col-span-2"></div>
      </div>
    </div>
  );
}
