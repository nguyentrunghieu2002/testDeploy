import { useState } from "react";
import Tab from "./Tab";
import TabHeader from "./TabHeader";

const TabPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tab activeTab={activeTab} />
    </div>
  );
};

export default TabPage;
