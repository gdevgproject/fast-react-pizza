# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Bước 1: Cài các package liên quan ESLint và Prettier
chạy lệnh: yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
prettier: code formatter chính

eslint-config-prettier: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.

eslint-plugin-prettier: Dùng thêm 1 số rule Prettier cho ESLint

Bước 2: Config ESlint để chuẩn hóa code
Mở file eslint.config.js lên

Thêm đoạn giá trị này vào mảng ignores, mục đích là mình không muốn ESLint check file vite.config.ts

'vite.config.ts'
Các bạn import cái này vào đầu file eslint.config.js

import eslintPluginPrettier from 'eslint-plugin-prettier'
Thêm đoạn code sau vào object plugins

prettier: eslintPluginPrettier
Thêm đoạn code sau vào object rules để thêm các rule của Prettier

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
