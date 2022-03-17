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
      {Array.isArray(data) ? (
        data.map((item) => <Branch key={item.id} item={item} />)
      ) : (
        <Branch key={data.id} item={data} />
      )}
    </div>
  );
};

export default Tree;
