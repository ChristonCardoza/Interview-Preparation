import { useState } from "react";

import explorer from "./data/folderData.js";
import Folder from "./Folder.jsx";

import "./style.css";

import useTraverseTree from "./hooks/use-traverse-tree";

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <div>
      <Folder
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
        key={explorerData.name}
      />
    </div>
  );
};
export default Explorer;
