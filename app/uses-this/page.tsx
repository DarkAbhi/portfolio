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
    <div className="flex-col lg:h-screen py-11 px-8">
      <div className="font-bold text-3xl text-green-500 tracking-widest">
        USES THIS
      </div>
      <div className="mt-4 text-white text-base">
        Inspired by <a href="https://usesthis.com/">Uses This</a>, these are the
        tools/services I use to get things done.
      </div>
      {usesThisData.map((item) => (
        <UsesThisCategory
          key={item.category}
          category={item.category}
          items={item.items}
        />
      ))}
    </div>
  );
}
