import React from "react";
import { INode } from "../interfaces/Tree.interface";

import Branch from "./Branch";

interface Props<T = INode> {
  data: T[] | T;
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
      {Array.isArray(data) ? (
        data.map((item) => <Branch key={item.id} item={item} />)
      ) : (
        <Branch key={data.id} item={data} />
      )}
    </div>
  );
};

export default Tree;
