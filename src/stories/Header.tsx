import { useState } from "react";
import TabHeader from "./TabHeader";
import "./TabPage.css";

const Header = () => {
  const headerData = [
    {
      id: 1,
      headerName: "Prevention",
      tabKey: "tab1",
    },
    {
      id: 2,
      headerName: "Symptoms",
      tabKey: "tab2",
    },
    {
      id: 3,
      headerName: "Diagnosis",
      tabKey: "tab3",
    },
  ];

  const [header, setHeader] = useState<string>("tab1");

  const newHeaderState = (state: string) => {
    setHeader(state);
  };

  console.log({ header });

  // const filteredData =
  //   header === "tab1"
  //     ? data.slice(0, 3)
  //     : header === "tab2"
  //     ? data.slice(3, 6)
  //     : [];

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
        className="header-tab-container"
      >
        {headerData.map((item) => (
          <TabHeader
            tabKey={item.tabKey}
            key={item.id}
            headerName={item.headerName}
            activeTab={header}
            newHeaderState={() => newHeaderState(item.tabKey)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
