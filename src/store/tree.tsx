import create from "zustand";
import { InitialTree } from "../constant";
import { INode } from "../interfaces/Tree.interface";

interface StoreState {
  Tree: INode[];
  selectedNode?: INode;
}

export const useStore = create<StoreState>(() => ({
  Tree: InitialTree,
}));

export const setTree = (tree: StoreState["Tree"]) => {
  useStore.setState({ Tree: tree });
};

export const setSelectedNode = (tree: StoreState["selectedNode"]) => {
  useStore.setState({ selectedNode: tree });
};
