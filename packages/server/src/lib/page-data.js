import superagent from "superagent";
import { parse } from "node-html-parser";
import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

export async function fetchPageData(url) {
  const response = await superagent.get(url);
  // console.log(response.text);
  return response.text;
}

export function parsePageData(html) {
  const root = parse(html);
  const link = root.querySelector("link[rel='canonical']");

  let canonicalUrl = null;
  if (link) {
    canonicalUrl = link.getAttribute("href");
  }

  return {
    canonicalUrl,
  };
}

export function readable(html) {
  var doc = new JSDOM(html);
  const reader = new Readability(doc.window.document);
  const article = reader.parse();
  return article;
}

export async function parseAll(url) {
  const html = await fetchPageData(url);
  const { canonicalUrl } = parsePageData(html);
  const article = readable(html);

  return {
    canonicalUrl,
    article,
  };
}
