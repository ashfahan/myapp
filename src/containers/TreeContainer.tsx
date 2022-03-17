import React, { useMemo, useState } from "react";
import Tree from "../components/Tree";
import { useStore } from "../store/tree";
import { INode } from "../interfaces/Tree.interface";

export const TreeContainer = () => {
  const treedata = useStore((state) => state.Tree);
  const [search, setSearch] = useState("");

  const searchNode = (value: string, nodes: INode[]): INode[] => {
    const node = nodes.map((node) => {
      if (node.attributes.label.toLowerCase().includes(value.toLowerCase())) return node;
      if (node.children) return searchNode(value, node.children)?.length ? node : undefined;
      return undefined;
    });

    return node.filter(Boolean) as INode[];
  };

  const filterData = useMemo(() => {
    const textToFind = search.trim();
    let result = treedata;

    if (textToFind && Array.isArray(treedata)) {
      const found = searchNode(textToFind, treedata);
      if (!!found.length) result = found;
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
