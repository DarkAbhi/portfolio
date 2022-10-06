import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import NavigationPanel from "../components/navigation-panel";
import UsesThis from "../components/uses-this";
import Work from "../components/work";

const Home: NextPage = () => {

  const [activeTab, setActiveTab] = useState("work")

  return (
    <div className="flex flex-row bg-white overflow-hidden">
      <Head>
        <title>Abhishek AN</title>
        <meta name="description" content="Abhishek's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationPanel setActiveTab={setActiveTab}/>
      <div className="flex-1 w-full">
        {activeTab == "work" ? <Work /> : <UsesThis />}
      </div>
    </div>
  );
};

export default Home;
