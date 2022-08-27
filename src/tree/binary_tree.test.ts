import { assertEquals } from "../deps.ts";
import { BinaryTreeInput, BinaryTreeOutput, main } from "./binary_tree.ts";

Deno.test("binary tree", () => {
  const input: BinaryTreeInput = [
    [0, 1, 4],
    [1, 2, 3],
    [2, -1, -1],
    [3, -1, -1],
    [4, 5, 8],
    [5, 6, 7],
    [6, -1, -1],
    [7, -1, -1],
    [8, -1, -1],
  ];

  const ouput: BinaryTreeOutput = [
    {
      node: 0,
      parent: -1,
      sibling: -1,
      degree: 2,
      depth: 0,
      height: 3,
      kind: "root",
    },
    {
      node: 1,
      parent: 0,
      sibling: 4,
      degree: 2,
      depth: 1,
      height: 1,
      kind: "internal node",
    },
    {
      node: 2,
      parent: 1,
      sibling: 3,
      degree: 0,
      depth: 2,
      height: 0,
      kind: "leaf",
    },
    {
      node: 3,
      parent: 1,
      sibling: 2,
      degree: 0,
      depth: 2,
      height: 0,
      kind: "leaf",
    },
    {
      node: 4,
      parent: 0,
      sibling: 1,
      degree: 2,
      depth: 1,
      height: 2,
      kind: "internal node",
    },
    {
      node: 5,
      parent: 4,
      sibling: 8,
      degree: 2,
      depth: 2,
      height: 1,
      kind: "internal node",
    },
    {
      node: 6,
      parent: 5,
      sibling: 7,
      degree: 0,
      depth: 3,
      height: 0,
      kind: "leaf",
    },
    {
      node: 7,
      parent: 5,
      sibling: 6,
      degree: 0,
      depth: 3,
      height: 0,
      kind: "leaf",
    },
    {
      node: 8,
      parent: 4,
      sibling: 5,
      degree: 0,
      depth: 2,
      height: 0,
      kind: "leaf",
    },
  ];
  assertEquals(main(input), ouput);
  main(input);
});
