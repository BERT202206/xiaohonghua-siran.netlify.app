# 小红花奖励册

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/deploy-status)](https://xiaohonghua-siran.netlify.app)

> 一个用于帮助孩子养成好习惯的精美可打印奖励卡生成器

**两个版本可用：**
- 📄 **A4版** (`index.html`) - 大尺寸，每行20格
- 📋 **A5版** (`a5.html`) - 便携尺寸，每行24格

## 功能特点

- 全年12个月份支持，自动计算每月天数
- 周末日期自动标红
- **A4版**：每行20个贴纸位，自适应铺满
- **A5版**：每行24个贴纸位，小巧便携
- A4/A5纸张完美适配，支持直接打印
- 优雅的动画效果和响应式设计
- 支持导出PDF（通过浏览器打印功能）

## 在线体验

访问在线演示：[https://xiaohonghua-siran.netlify.app](https://xiaohonghua-siran.netlify.app)

## 快速开始

### 本地使用

1. 克隆仓库
```bash
git clone https://github.com/yourusername/xiaohonghua-reward.git
cd xiaohonghua-reward
```

2. 直接在浏览器中打开 `index.html` 文件

### 部署到 Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/xiaohonghua-reward)

## 使用方法

1. **选择版本**：
   - 打开 `index.html` 使用 **A4版**（210mm × 297mm，每行20格）
   - 打开 `a5.html` 使用 **A5版**（148mm × 210mm，每行24格）
2. **选择月份**：点击左侧边栏选择要打印的月份
3. **预览效果**：右侧会实时显示纸张预览
4. **打印**：
   - 点击「打印当前月」打印选中月份
   - 点击「打印全年」打印12个月份
5. **保存PDF**：在打印对话框中选择「另存为PDF」

## 版本对比

| 特性 | A4版 | A5版 |
|------|------|------|
| 尺寸 | 210mm × 297mm | 148mm × 210mm |
| 每行格子数 | 20格 | 24格 |
| 适用场景 | 挂墙展示 | 随身携带 |
| 文件 | `index.html` | `a5.html` |

## 自定义配置

如需修改每行贴纸数量，编辑 `assets/js/app.js`：

```javascript
const SLOTS_PER_ROW = 20;  // 修改为你想要的数量
```

## 项目结构

```
xiaohonghua-reward/
├── index.html          # A4版主页面
├── a5.html             # A5便携版
├── assets/
│   ├── css/
│   │   └── style.css   # A4版样式文件
│   ├── js/
│   │   └── app.js      # A4版应用逻辑
│   └── images/         # 图片资源
├── docs/               # 文档
├── LICENSE             # 许可证
└── README.md           # 项目说明
```

## 浏览器兼容性

- Chrome / Edge / Firefox / Safari 最新版本
- 支持打印功能的现代浏览器

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## 许可证

[MIT License](LICENSE)

## 致谢

- 字体：[ZCOOL KuaiLe](https://fonts.google.com/specimen/ZCOOL+KuaiLe) by ZCOOL
- 图标：[Font Awesome](https://fontawesome.com/)

---

Made with ❤️ for kids
