import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((file) =>
      file.isDirectory()
        ? walk(path.join(dir, file.name))
        : path.join(dir, file.name)
    )
    .filter((file) => path.extname(file) === ".html");
}

const filepaths = walk(path.dirname(fileURLToPath(import.meta.url)));
for (const file of filepaths) {
  const fileContent = fs.readFileSync(file).toString();
  const prompt = `Context: You are an accessibility expert reviewing HTML for accessibility issues. Analyze the following code in the context of WCAG (Web Content Accessibility Guidelines) 2.2, listing any issues that may violate these guidelines. You will only be analyzing the HTML, ignoring any included or missing styles and scripts.
Code: 
\`\`\`${fileContent}\`\`\`
Response format: 
Snippet with error: …
Location of error: …
WCAG Guideline violated: …
Detection Algorithm: …
Explanation of Error: …`;

  fs.writeFileSync(file.replace(".html", ".txt"), prompt);
}
