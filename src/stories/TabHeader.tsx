import { Button } from "rebass";
import "./TabHeader.css";

interface TabHeaderProps {
  newHeaderState: (tab: string) => void;
  headerName?: string;
  tabKey: string;
  activeTab?: string;
}

const TabHeader = ({
  headerName,
  tabKey,
  newHeaderState,
  activeTab,
}: TabHeaderProps) => {
  return (
    <Button
      className={activeTab === tabKey ? "active" : "css-vhv7r1"}
      onClick={() => newHeaderState(tabKey)}
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "15px",
        alignItems: "center",
      }}
    >
      {headerName}
    </Button>
  );
};

export default TabHeader;
