import { useState } from "react";
import Tab from "./Tab";
import TabHeader from "./TabHeader";
import { Card } from "./Card";

const TabPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const data = [
    {
      id: 1,
      header: "Header 1",
      description: "Mô tả 1",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      header: "Header 2",
      description: "Mô tả 2",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      header: "Header 3",
      description: "Mô tả 3",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      header: "Header 4",
      description: "Mô tả 4",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      header: "Header 5",
      description: "Mô tả 5",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      header: "Header 6",
      description: "Mô tả 6",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 7,
      header: "Header 7",
      description: "Mô tả 7",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 8,
      header: "Header 8",
      description: "Mô tả 8",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 9,
      header: "Header 9",
      description: "Mô tả 9",
      img: "https://picsum.photos/200/300",
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

  let filteredData: any = [];
  switch (header) {
    case "tab1":
      filteredData = data.slice(0, 3);
      break;
    case "tab2":
      filteredData = data.slice(3, 6);
      break;
    case "tab3":
      filteredData = data.slice(6, 9);
      break;
    default:
      filteredData = [];
  }

  return (
    <div>
      <TabHeader newHeaderState={newHeaderState} />
      {filteredData.map((item: any) => (
        <Card
          key={item.id}
          header={item.header}
          description={item.description}
          imageSrc={item.img}
        ></Card>
      ))}
    </div>
  );
};

export default TabPage;
