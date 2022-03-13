import { assertEquals } from "../deps.ts";
import { InputType, main } from "./queue.ts";

Deno.test("Queue", () => {
  const input: InputType = [
    [5, 100],
    ["p1", 150],
    ["p2", 80],
    ["p3", 200],
    ["p4", 350],
    ["p5", 20],
  ];
  const omitInput = input.filter((_, i) => i !== 0) as [string, number][];

  assertEquals(main(100, omitInput), [
    ["p2", 180],
    ["p5", 400],
    ["p1", 450],
    ["p3", 550],
    ["p4", 800],
  ]);
});
