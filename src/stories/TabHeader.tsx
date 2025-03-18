import { Button } from "rebass";
import "./TabHeader.css";

interface TabHeaderProps {
  activeTab: string;
  setActiveTab: any;
}

const TabHeader = ({ activeTab, setActiveTab }: TabHeaderProps) => {
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "25px",
      }}
    >
      <div style={{ padding: "5px" }}>
        <Button
          className={activeTab === "tab1" ? "active" : "css-vhv7r1"}
          onClick={() => setActiveTab("tab1")}
        >
          Prevention
        </Button>
        <Button
          className={activeTab === "tab2" ? "active" : "css-vhv7r1"}
          onClick={() => setActiveTab("tab2")}
        >
          Symptoms
        </Button>
        <Button
          className={activeTab === "tab3" ? "active" : "css-vhv7r1"}
          onClick={() => setActiveTab("tab3")}
        >
          Diagnosis
        </Button>
      </div>
    </div>
  );
};

export default TabHeader;
