import { Button } from "rebass";
import "./TabHeader.css";
import { useState } from "react";

interface TabHeaderProps {
  newHeaderState: (tab: string) => void;
}

const TabHeader = ({ newHeaderState = () => {} }: TabHeaderProps) => {
  const [active, setActive] = useState<string>("tab1");
  console.log(typeof newHeaderState);
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
          className={active === "tab1" ? "active" : "css-vhv7r1"}
          onClick={() => {
            newHeaderState("tab1");
            setActive("tab1");
          }}
        >
          Prevention
        </Button>
        <Button
          className={active === "tab2" ? "active" : "css-vhv7r1"}
          onClick={() => {
            newHeaderState("tab2");
            setActive("tab2");
          }}
        >
          Symptoms
        </Button>
        <Button
          className={active === "tab3" ? "active" : "css-vhv7r1"}
          onClick={() => {
            newHeaderState("tab3");
            setActive("tab3");
          }}
        >
          Diagnosis
        </Button>
      </div>
    </div>
  );
};

export default TabHeader;
