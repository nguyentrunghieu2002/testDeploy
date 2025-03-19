import { Card } from "./Card";
import "./Card.css";

export interface TabProps {
  activeTab?: string;
  data: {
    id: number;
    header: string;
    img: string;
    description: string;
  }[];
}

// const data = [
//   {
//     id: 1,
//     header: "Header 1",
//     description: "Mô tả 1",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 2,
//     header: "Header 2",
//     description: "Mô tả 2",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 3,
//     header: "Header 3",
//     description: "Mô tả 3",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 4,
//     header: "Header 4",
//     description: "Mô tả 4",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 5,
//     header: "Header 5",
//     description: "Mô tả 5",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 6,
//     header: "Header 6",
//     description: "Mô tả 6",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 7,
//     header: "Header 7",
//     description: "Mô tả 7",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 8,
//     header: "Header 8",
//     description: "Mô tả 8",
//     img: "https://picsum.photos/200/300",
//   },
//   {
//     id: 9,
//     header: "Header 9",
//     description: "Mô tả 9",
//     img: "https://picsum.photos/200/300",
//   },
// ];

const Tab = () => {
  return (
    <>
      <Card></Card>
    </>
  );
};

export default Tab;
