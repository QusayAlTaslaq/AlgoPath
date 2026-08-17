import { cp, mkdir, rm } from "node:fs/promises";

await rm("assets", { recursive: true, force: true });
await mkdir("assets", { recursive: true });
await cp("dist/assets", "assets", { recursive: true });
await cp("dist/index.html", "index.html");
await cp("dist/favicon.svg", "favicon.svg");

console.log("GitHub Pages files copied to the repository root.");
