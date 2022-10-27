"use client";

import { useState } from "react";
import NavigationPanel from "../components/navigation-panel";
import UsesThis from "../components/uses-this";
import Work from "../components/work";

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="flex flex-row bg-white overflow-hidden">
      <NavigationPanel setActiveTab={setActiveTab} />
      <div className="flex-1 w-full">
        {activeTab == "work" ? <Work /> : <UsesThis />}
      </div>
    </div>
  );
};
