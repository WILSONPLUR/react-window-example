import { FixedSizeList, FixedSizeList as List } from "react-window";
import Item from "./Item";
import Column from "./Column";
import "./App.css";

function App(props) {
  return (
    <div className="container">
      <List
        useIsScrolling
        {...props}
        height={150}
        itemSize={35}
        width={300}
        itemCount={1001}
      >
        {Item}
      </List>
      <List
        className="h-list"
        layout="horizontal"
        height={75}
        itemSize={100}
        width={300}
        itemCount={501}
      >
        {Column}
      </List>
    </div>
  );
}

export default App;
