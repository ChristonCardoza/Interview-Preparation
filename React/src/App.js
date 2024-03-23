import "./styles.css";

import { ListRender } from "./components/ListRendering";
import { Explorer } from "./components/FileExplorer";
import { Counter, FetchData, WindowResize } from "./components/PolyFill";
import { ChildStateChanger } from "./components/ChildStateChanger";
import { DebounceComp } from "./components/Debouncing";
import { ThrottleComp } from "./components/Throttling";
import { Thubnail } from "./components/Thumbnail";
import { Pagination } from "./components/Pagination";
import { Progress } from "./components/ProgressBar";
import { Bread } from "./components/Breadcrumbs";
import { PasswordGenerator } from "./components/PasswordGenerator";
import { GridLights } from "./components/GridLights";
import { Theme } from "./components/Theme";

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
      {/* <Thubnail /> */}
      {/* <Pagination /> */}
      {/* <Progress /> */}
      {/* <Bread /> */}
      {/* <PasswordGenerator /> */}
      {/* <GridLights /> */}
      <Theme />
    </div>
  );
}
