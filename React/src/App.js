import "./styles.css";

import { ListRender } from "./components/ListRendering";
import { Explorer } from "./components/FileExplorer";
import { Counter, FetchData, WindowResize } from "./components/PolyFill";
import { ChildStateChanger } from "./components/ChildStateChanger";
import { DebounceComp } from "./components/Debouncing";
import { ThrottleComp } from "./components/Throttling";
import { Thubnail } from "./components/Thumbnail";

export default function App() {
  return (
    <div className="App">
      {/* <ListRender /> */}
      {/* <Explorer /> */}
      {/* <Counter /> */}
      {/* <FetchData /> */}
      {/* <WindowResize /> */}
      {/* <ChildStateChanger /> */}
      {/* <DebounceComp /> */}
      {/* <ThrottleComp /> */}
      <Thubnail />
    </div>
  );
}
