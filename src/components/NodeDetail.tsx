import React, { FC, VoidFunctionComponent } from "react";
import { INode } from "../interfaces/Tree.interface";

interface Props {
  node: INode;
}

export const NodeDetail: VoidFunctionComponent<Props> = (props) => {
  const {
    node: {
      attributes: { label },
      depth,
    },
  } = props;

  return (
    <div>
      <div>Selected Node : {label}</div>
      <div>Depth {depth}</div>
    </div>
  );
};
