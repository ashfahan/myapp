import { useState } from "react";
import { INode } from "../interfaces/Tree.interface";
import { setTree, useStore } from "../store/tree";

export const TreeField = () => {
  const [error, setError] = useState<boolean>(false);

  const tree = useStore((state) => state.Tree);

  return (
    <>
      <div className="mb-2">Enter a valid Json Node below:</div>
      <textarea
        cols={30}
        className="input w-full is-white"
        rows={10}
        onKeyUp={({ target }) => {
          try {
            const data: INode[] = JSON.parse((target as HTMLTextAreaElement).value);

            if (!Array.isArray(data) || !data) throw new Error("invalid data");

            setTree(data);
          } catch (error) {
            setError(true);
          }
        }}
        defaultValue={JSON.stringify(tree, null, 4)}
      />
      {error && <div className="text-red-500 mt-2">Invalid Json Object</div>}
    </>
  );
};
