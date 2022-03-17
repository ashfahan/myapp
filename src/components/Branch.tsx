import React, { useState } from "react";
import { INode } from "../interfaces/Tree.interface";
import { setSelectedNode } from "../store/tree";
import Node from "./Node";

interface Props {
  item: INode;
  depth?: number;
}

const Branch: React.FC<Props> = (props) => {
  const { item, depth = 0 } = props;

  const [expand, setExpand] = useState(item.expanded ?? false);

  const hasChildren = item.children && item.children.length !== 0;

  const handleNodeClick = (node: INode) => {
    setSelectedNode({ ...node, expanded: expand, depth: depth });
    if (hasChildren) setExpand((prev) => !prev);
  };

  return (
    <div className="Branch after:content-end after:bg-slate-900 after:absolute after:bottom-0 after:ml-5 after:h-[0.45rem] after:w-2">
      <div className="w-full relative leading-tight pl-[1.2rem] border-l-2">
        <div className="flex relative border-l-2">
          <div className="mr-2">─</div>
          {hasChildren && (
            <div
              className="translate-x-3/4 absolute left-0 leading-normal"
              onClick={() => handleNodeClick(item)}
            >
              <i className={`inline-block ri-arrow-right-s-fill ${expand && "rotate-90"}`} />
            </div>
          )}
          <Node node={item} onClick={handleNodeClick} />
        </div>
        {hasChildren &&
          expand &&
          item.children?.map((child) => <Branch key={child.id} item={child} depth={depth + 1} />)}
      </div>
    </div>
  );
};

export default Branch;
