import React from "react";
import { INode } from "../interfaces/Tree.interface";

interface Props {
  node: INode;
  expanded: boolean;
  onClick: (node: INode) => void;
  hasChildren: boolean;
}

const Node: React.FC<Props> = (props) => {
  const { node, onClick, hasChildren, expanded } = props;

  return (
    <div className="flex relative border-l-2 py-1">
      <div className="mr-2">─</div>
      {hasChildren && (
        <div
          className="translate-x-3/4 absolute left-0 leading-normal"
          onClick={() => onClick(node)}
        >
          <i className={`inline-block ri-arrow-right-s-fill ${expanded && "rotate-90"}`} />
        </div>
      )}
      <button className="ml-2 block" onClick={() => onClick(node)}>
        <div>{node.attributes.label}</div>
      </button>
      {/* <div className="ml-2 badge badge-primary">Select</div> */}
    </div>
  );
};

export default Node;
