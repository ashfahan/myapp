import React, { useMemo, useState } from "react";
import Tree from "../components/Tree";
import { useStore } from "../store/tree";
import { INode } from "../interfaces/Tree.interface";

export const TreeContainer = () => {
  const treedata = useStore((state) => state.Tree);
  const [search, setSearch] = useState("Cabbage");

  const searchNode = (value: string, nodes: INode[]): INode[] => {
    const node = nodes.map((node) => {
      if (node.attributes.label.toLowerCase().includes(value.toLowerCase())) return node;
      if (node.children) return searchNode(value, node.children)?.length ? node : undefined;
      return undefined;
    });

    return node.filter(Boolean) as INode[];
  };

  const filterData = useMemo(() => {
    let result = treedata;
    if (Array.isArray(treedata)) {
      const found = searchNode(search, treedata);
      if (found) result = found;
    }
    return result;
  }, [search, treedata]);

  return (
    <div>
      <input
        type="text"
        className="input mb-5"
        defaultValue={search}
        placeholder="Search Node"
        onKeyUp={({ target }) => setSearch((target as HTMLInputElement).value)}
      />
      <Tree data={filterData} />
    </div>
  );
};