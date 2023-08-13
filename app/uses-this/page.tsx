import { Metadata } from "next";
import { usesThisData } from "@/data/uses-this-data";
import UsesThisCategory from "@/components/uses-this/uses-this-item";

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
      <div className="flex-col dark:bg-background-dark lg:h-screen pl-11 py-11 lg:overflow-auto pr-8">
        <div className="font-bold text-3xl dark:text-green-500 text-blue-800 tracking-widest">
          USES THIS
        </div>
        <div className="mt-4 dark:text-white text-base">
          Inspired by <a href="https://usesthis.com/">Uses This</a>, these are
          the tools/services I use to get things done.
        </div>
        {usesThisData.map((item) => (
          <UsesThisCategory
            key={item.category}
            category={item.category}
            items={item.items}
          />
        ))}
      </div>
    </div>
  );
}
