import React from "react";
import { INode } from "../interfaces/Tree.interface";

interface Props {
  node: INode;
  onClick: (node: INode) => void;
}

const Node: React.FC<Props> = (props) => {
  const { node: item, onClick } = props;

  return (
    <button className="ml-2 block" onClick={() => onClick(item)}>
      <div>{item.attributes.label}</div>
    </button>
  );
};

export default Node;
