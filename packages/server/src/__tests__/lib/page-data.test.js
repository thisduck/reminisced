import fs from "fs";
import path from "path";
import { fetchPageData, parsePageData, readable } from "../../lib/page-data";

const file = path.join(__dirname, "article.html");
const html = fs.readFileSync(file);

// test("it fetches the page data", async () => {
//   const result = await fetchPageData(
//     "https://twitter.com/brainpicker/status/1326364526812540929"
//   );
//   fs.writeFileSync(path.join(__dirname, "tweet.html"), result);
// });

test("it fetches the page data", () => {
  const result = parsePageData(html);
  expect(result.canonicalUrl).toEqual(
    "https://www.politico.com/news/2020/11/11/rashida-tlaib-progressives-election-435877"
  );
});

test("it gets the readable article", () => {
  const result = readable(html);
  console.log(result);
  expect(result.title).toEqual(
    "Tlaib lashes out at centrist Dems over election debacle: 'I can't be silent'"
  );
  expect(result.excerpt).toEqual(
    "In a scathing memo, progressives say centrists are playing into Republicans “divide-and-conquer ra\n" +
      "                  cism.”"
  );
  expect(result.byline).toEqual("By ZACHARY WARMBRODT");
  expect(result.siteName).toEqual("POLITICO");
  expect(result.length).toEqual(9989);
});

