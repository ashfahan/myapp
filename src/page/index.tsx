import { NodeDetailContainer } from "../containers/NodeDetailContainer";
import { TreeContainer } from "../containers/TreeContainer";
import { TreeField } from "../containers/TreeField";

export const Home = () => {
  return (
    <>
      <div className="column w-3/12 bg-slate-900 p-4">
        <TreeContainer />
      </div>
      <div data-theme="light" className="column p-4 bg-white text-black">
        <TreeField />
      </div>
      <div className="column w-3/12 bg-slate-900 p-4">
        <NodeDetailContainer />
      </div>
    </>
  );
};
