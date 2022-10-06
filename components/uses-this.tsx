import { usesThisData } from "../data/uses-this-data";
import UsesThisCategory from "./uses-this/uses-this-item";

const UsesThis = () => {
  return (
    <div className="flex-col dark:bg-background-dark h-screen pl-11 py-11 overflow-auto pr-8">
      <div className="font-bold text-3xl dark:text-green-500 text-blue-800 tracking-widest">
        USES THIS
      </div>
      <div className="mt-4 dark:text-white text-base">
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
};

export default UsesThis;
