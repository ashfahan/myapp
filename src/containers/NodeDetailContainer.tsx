import React from "react";
import { NodeDetail } from "../components/NodeDetail";
import { useStore } from "../store/tree";

export const NodeDetailContainer = () => {
  const node = useStore((state) => state.selectedNode);

  return <div>{node && <NodeDetail node={node} />}</div>;
};
