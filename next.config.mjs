import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.jsx",
  latex: true,
  search: {
    codeblocks: false,
  },
});

export default withNextra({
  reactStrictMode: true,
  output: "export", // 启用静态导出
  trailingSlash: true, // 确保生成的静态文件路径正确 (即生成 /about/index.html 而不是 /about.html)
  images: {
    unoptimized: true, // 禁用 Next.js 的图片优化
  },
});
