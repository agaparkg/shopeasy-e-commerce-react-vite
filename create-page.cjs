const fs = require("fs");
const path = require("path");

const pageName = process.argv[2];

if (!pageName) {
  console.error("Please provide a page name.");
  process.exit(1);
}

const componentDir = path.join(__dirname, "src", "pages");

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
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

fs.writeFileSync(path.join(componentDir, `${pageName}.jsx`), componentContent);
// fs.writeFileSync(path.join(componentDir, `${pageName}.css`), "");

console.log(`${pageName} component created successfully in ${componentDir}`);
