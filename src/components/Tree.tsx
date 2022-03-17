import React from "react";
import { INode } from "../interfaces/Tree.interface";

import Branch from "./Branch";

interface Props<T = INode> {
  data: T[];
}

const Tree: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className="Tree relative">
      <div className="pl-1">
        <span className="p-2 text-primary-500 bg-slate-600 inline-flex rounded-lg mb-2 mr-2">
          <i className="icon ri-git-merge-line" />
        </span>
        Tree Data
      </div>
      {data.map((item) => (
        <Branch expanded={item.expanded} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Tree;
