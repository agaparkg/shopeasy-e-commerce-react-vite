import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const pageName = process.argv[2];

if (!pageName) {
  console.error("Please provide a page name.");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pageDir = join(__dirname, "src", "pages");

if (!existsSync(pageDir)) {
  mkdirSync(pageDir, { recursive: true });
}

const componentContent = `import React from 'react';
// import './${pageName}.css';

const ${pageName} = () => {
  return (
    <div>
      <h1>${pageName}</h1>
    </div>
  );
};

export default ${pageName};
`;

writeFileSync(join(pageDir, `${pageName}.jsx`), componentContent);
// fs.writeFileSync(path.join(pageDir, `${pageName}.css`), "");

console.log(`${pageName} component created successfully in ${pageDir}`);

// Add the following into eslint.config.js file

// export default [
//     ...,
//     settings: ...,
//     plugins: ...,
//     env: {
//       node: true,
//       commonjs: true,
//     },
//     extends: ...,
//     rules: ...
//   },
// ];
