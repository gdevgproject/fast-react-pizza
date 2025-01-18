# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Step 1: Install ESLint and Prettier Packages

Run the following command to install the necessary packages:

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

### Package Descriptions

- **prettier**: A code formatter.
- **eslint-config-prettier**: Disables ESLint rules that conflict with Prettier.
- **eslint-plugin-prettier**: Adds Prettier rules to ESLint.

## Step 2: Configure ESLint for Code Standardization

1. Open the `eslint.config.js` file.
2. Add the following value to the `ignores` array to exclude `vite.config.ts` from ESLint checks:

   ```javascript
   'vite.config.ts'
   ```

3. Import the Prettier plugin at the top of the `eslint.config.js` file:

   ```javascript
   import eslintPluginPrettier from 'eslint-plugin-prettier'
   ```

4. Add the Prettier plugin to the `plugins` object:

   ```javascript
   prettier: eslintPluginPrettier
   ```

5. Add the following Prettier rules to the `rules` object:

   ```javascript
   'prettier/prettier': [
     'warn',
     {
       arrowParens: 'always',
       semi: false,
       trailingComma: 'none',
       tabWidth: 2,
       endOfLine: 'auto',
       useTabs: false,
       singleQuote: true,
       printWidth: 120,
       jsxSingleQuote: true
     }
   ]
   ```

## Step 3: Configure Prettier for Code Formatting

1. Create a `.prettierrc` file in the root directory with the following content:

   ```json
   {
     "arrowParens": "always",
     "semi": false,
     "trailingComma": "none",
     "tabWidth": 2,
     "endOfLine": "auto",
     "useTabs": false,
     "singleQuote": true,
     "printWidth": 120,
     "jsxSingleQuote": true
   }
   ```

   This file configures Prettier for consistent code formatting. Install the "Prettier - Code formatter" extension in VS Code for better integration.

2. Create a `.prettierignore` file in the root directory to exclude unnecessary files from Prettier formatting:

   ```
   node_modules/
   dist/
   ```

## Step 4: Configure Editor for Standardized Settings

1. Create a `.editorconfig` file in the root directory to synchronize editor settings across team members:

   ```ini
   [*]
   indent_size = 2
   indent_style = space
   ```

   Install the "EditorConfig for VS Code" extension in VS Code to enable this configuration.

## Step 5: Add Scripts to `package.json`

1. Open the `package.json` file in the root directory.
2. Add the following scripts under the `"scripts"` section:

   ```json
   "scripts": {
     "lint:fix": "eslint . --fix",
     "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
     "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.css|*.scss)\""
   }
   ```

   These scripts help you automate code linting and formatting tasks:

   - **lint:fix**: Fixes linting errors automatically.
   - **prettier**: Checks the formatting of specified files.
   - **prettier:fix**: Formats the specified files automatically.

---

By following these steps, you ensure that your project maintains consistent formatting and coding standards across all contributors.
