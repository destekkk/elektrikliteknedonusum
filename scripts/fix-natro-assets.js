const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const fromDir = path.join(outDir, "_next");
const toDir = path.join(outDir, "assets");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) rmDir(full);
    else fs.unlinkSync(full);
  }
  fs.rmdirSync(dir);
}

if (!fs.existsSync(fromDir)) {
  console.error("_next folder not found");
  process.exit(1);
}

if (fs.existsSync(toDir)) rmDir(toDir);
copyDir(fromDir, toDir);
rmDir(fromDir);

const replaceable = new Set([".html", ".js", ".css", ".txt", ".json", ".xml"]);
for (const file of walk(outDir)) {
  const ext = path.extname(file).toLowerCase();
  if (!replaceable.has(ext)) continue;
  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("/_next/") && !content.includes("\\/_next\\/")) continue;
  content = content
    .replaceAll("/_next/", "/assets/")
    .replaceAll("\\/_next\\/", "\\/assets\\/");
  fs.writeFileSync(file, content);
}

// Inline CSS into HTML so it works even if the host serves .css as text/html
const linkRegex = /<link[^>]+rel="stylesheet"[^>]*>/gi;
for (const file of walk(outDir)) {
  if (path.extname(file).toLowerCase() !== ".html") continue;
  let html = fs.readFileSync(file, "utf8");
  const links = html.match(linkRegex);
  if (!links) continue;
  for (const link of links) {
    const hrefMatch = link.match(/href="([^"]+)"/i);
    if (!hrefMatch) continue;
    let href = hrefMatch[1];
    if (!href.includes("/assets/") && !href.includes("/_next/")) continue;
    const rel = href.replace(/^\//, "").split("?")[0];
    const cssPath = path.join(outDir, rel);
    if (!fs.existsSync(cssPath)) continue;
    const css = fs.readFileSync(cssPath, "utf8");
    html = html.replace(link, `<style>${css}</style>`);
  }
  fs.writeFileSync(file, html);
}

console.log("Renamed _next -> assets, updated references, inlined CSS");
