import { INode } from "./interfaces/Tree.interface";

export const InitialTree: INode[] = [
  {
    id: "0",
    attributes: {
      label: "Food",
    },
    children: [
      {
        id: "1",
        attributes: {
          label: "Meat",
        },
      },
      {
        id: "2",
        attributes: {
          label: "Salad",
        },
        children: [
          {
            id: "3",
            attributes: {
              label: "Tomatoes",
            },
          },
          {
            id: "4",
            attributes: {
              label: "Cabbage",
            },
          },
        ],
      },
    ],
  },
  {
    id: "5",
    attributes: {
      label: "Drinks",
    },
    children: [
      {
        id: "6",
        attributes: {
          label: "Beer",
        },
      },
      {
        id: "7",
        attributes: {
          label: "Soft drink",
        },
        children: [
          {
            id: "8",
            attributes: {
              label: "Beer",
            },
          },
          {
            id: "9",
            attributes: {
              label: "Beer",
            },
            children: [
              {
                id: "10",
                attributes: {
                  label: "Beer",
                },
                children: [
                  {
                    id: "11",
                    attributes: {
                      label: "Beer",
                    },
                  },
                  {
                    id: "12",
                    attributes: {
                      label: "Beer",
                    },
                  },
                  {
                    id: "13",
                    attributes: {
                      label: "Beer",
                    },
                  },
                  {
                    id: "14",
                    attributes: {
                      label: "deep",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "15",
            attributes: {
              label: "Beer",
            },
          },
        ],
      },
    ],
  },
  {
    id: "16",
    attributes: {
      label: "Beer",
    },
    children: [
      {
        id: "17",
        attributes: {
          label: "Beer",
        },
        children: [
          {
            id: "18",
            attributes: {
              label: "Beer",
            },
          },
          {
            id: "19",
            attributes: {
              label: "Beer",
            },
          },
          {
            id: "20",
            attributes: {
              label: "Beer",
            },
          },
          {
            id: "21",
            attributes: {
              label: "Beer",
            },
          },
        ],
      },
    ],
  },
];
