import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const NEW_PEOPLE_CSV_PATH = path.join(__dirname, "../data/new_people.csv");
const EMPTY_LINES_CSV_PATH = path.join(__dirname, "../data/empty_lines.csv");
const WHITESPACE_CSV_PATH = path.join(__dirname, "../data/whitespace.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("", async () => {
  const results = await parseCSV(NEW_PEOPLE_CSV_PATH)
  expect(results).toHaveLength(4);
  expect(results[0]).toEqual(["name", "age", "quote"]);
  expect(results[1]).toEqual(["Alice", "23", '"hello, nice to meet you"']);
  expect(results[2]).toEqual(["Bob", "eighty", '"who are you"']);
  expect(results[3]).toEqual(["Professor", "40", '"wait, what is your name?"']);
});

test("how does parseCSV handles empty lines", async () => {
  const results = await parseCSV(EMPTY_LINES_CSV_PATH)
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Bob", "23"]);
  expect(results[2]).toEqual(["George", "97"]);
  expect(results[3]).toEqual(["Kelly", "twenty"]);
  expect(results[4]).toEqual(["Luke", "43"]);
});

test("parseCSV handles whitespace", async() => {
  const results = await parseCSV(WHITESPACE_CSV_PATH)
  expect(results).toHaveLength(3);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["George", "293"]);
  expect(results[2]).toEqual(["Bobert", "32"]);
});
