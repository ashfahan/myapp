export interface INode {
  id: string;
  attributes: {
    label: string;
  };
  expanded?: boolean;
  children?: INode[];
  depth?: number;
}
