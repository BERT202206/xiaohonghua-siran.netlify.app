# 小红花奖励册 🌸

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/BERT202206/xiaohonghua-siran.netlify.app/releases/tag/v3.0.0)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/xiaohonghua-siran/deploys)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> 🎯 专为儿童设计的习惯养成打卡工具 - A5 尺寸打印模板
>
> 每日奖励小红花，记录孩子成长每一步！

🚀 **[在线预览](https://xiaohonghua-siran.netlify.app)**

![预览图](https://via.placeholder.com/800x400.png?text=小红花奖励册预览图)

---

## ✨ 功能特点

### 🎨 精美卡片式侧边栏
- **药丸式年份选择器** - 渐变背景，悬浮动画
- **月份卡片设计** - 圆角阴影，视觉层次清晰
- **流畅过渡动画** - 精致 Hover 效果

### 🗓️ 智能年份选择
- 支持 **2026-2030** 年份切换
- 自动计算所选年份的周末日期
- 周六、周日日期自动标红显示

### 📄 三页合一设计
- **第1页**: 1-10日
- **第2页**: 11-20日  
- **第3页**: 21-月底（自动适应大小月）

### 🎨 精美设计
- **A5 标准尺寸** (148mm × 210mm)
- **10mm 大格子**，完美匹配 8mm 小红花贴纸
- **五角星定位标记**，贴纸更整齐
- **温暖配色**，儿童友好

### ⚡ 智能功能
- 打开网页**自动定位**到当前月份和日期段
- 支持**全年 36 页**批量打印（12个月 × 3页）
- 响应式侧边栏（350px 宽），操作更便捷

---

## 📐 格式规格

| 参数 | 数值 | 说明 |
|------|------|------|
| 纸张尺寸 | A5 (148mm × 210mm) | 标准 A5 纸张 |
| 格子直径 | 10mm | 完美匹配 8mm 贴纸 |
| 每行格子数 | 10 格 | 横向排列 |
| 格子边框 | 1.5pt | 淡红色边框 |
| 格子背景 | #FFF9F9 | 极淡粉色 |
| 贴纸定位 | 五角星 ★ | 中心定位标记 |

---

## 🚀 快速开始

### 在线使用（推荐）

直接访问 👉 **[https://xiaohonghua-siran.netlify.app](https://xiaohonghua-siran.netlify.app)**

无需安装，打开即用！

### 本地使用

```bash
# 克隆仓库
git clone https://github.com/BERT202206/xiaohonghua-siran.netlify.app.git

# 进入目录
cd xiaohonghua-siran.netlify.app

# 打开 a5.html 文件（用浏览器直接打开）
open a5.html        # macOS
start a5.html       # Windows
```

---

## 📖 使用教程

### 1. 选择年份
在左侧边栏顶部，点击年份按钮（2026-2030）

### 2. 选择月份
点击对应月份下方的日期段按钮：
- 🟢 **1-10日** - 上旬
- 🟡 **11-20日** - 中旬  
- 🔴 **21-月底** - 下旬

### 3. 查看预览
右侧会实时显示 A5 纸张预览，周末日期自动标红

### 4. 打印
- **打印当前**: 打印当前选中的月份和日期段
- **打印全年**: 批量打印全年 36 页（12个月 × 3页）

---

## 🖨️ 打印建议

| 项目 | 建议 |
|------|------|
| **纸张** | A5 尺寸 或 A4 纸对折 |
| **纸张克重** | 120g 以上卡纸（更耐用） |
| **打印设置** | 彩色打印，无边距 |
| **浏览器** | Chrome / Edge / Safari |

### 打印步骤
1. 按 `Ctrl + P` (Windows) 或 `Cmd + P` (Mac)
2. 选择「另存为 PDF」或直接打印
3. 纸张大小选择 A5
4. 勾选「背景图形」选项

---

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - Flexbox 布局、CSS 动画
- **原生 JavaScript** - 无需框架依赖
- **Google Fonts** - 中文卡通字体
- **Font Awesome** - 图标库

---

## 📁 项目结构

```
xiaohonghua-siran.netlify.app/
├── a5.html              # 主页面（A5打印模板）
├── netlify.toml         # Netlify 部署配置
├── README.md            # 项目说明
├── LICENSE              # MIT 许可证
└── .gitignore           # Git 忽略文件
```

---

## 📝 更新日志

### v3.0.0 (2026-04-06)

**🎨 UI 全面升级**

- ✅ **全新卡片式侧边栏** - 渐变背景 + 圆角阴影设计
- ✅ **药丸式年份选择器** - 悬浮动画 + 渐变高亮
- ✅ **月份卡片设计** - 视觉层次更清晰
- ✅ **优化布局** - 移除描述文字，一屏完整显示
- ✅ **精致过渡动画** - Hover 效果更流畅

### v2.0.0 (2026-04-06)

**🎉 重大更新**

- ✅ **年份选择功能** - 支持 2026-2030 年份切换
- ✅ **周末自动标红** - 根据所选年份自动计算周末
- ✅ **自动定位** - 打开网页自动显示当前月份和日期段
- ✅ **10mm大格子** - 完美匹配 8mm 小红花贴纸
- ✅ **五角星定位** - 贴纸更整齐
- ✅ **350px侧边栏** - 操作更便捷
- ✅ **风车动画** - 左上角图标持续旋转
- ✅ **Favicon** - 🌸 樱花图标

### v1.0.0 (2026-04-06)

- ✅ 初始版本发布

---

## 🌐 部署到 Netlify

### 一键部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BERT202206/xiaohonghua-siran.netlify.app)

### 手动部署

1. Fork 本仓库到你的 GitHub 账号
2. 登录 [Netlify](https://app.netlify.com)
3. 点击「Add new site」→「Import an existing project」
4. 选择 GitHub 仓库
5. 构建设置保持默认
6. 点击「Deploy site」

---

## 💝 致谢

感谢使用小红花奖励册！

希望它能帮助孩子们养成好习惯，每天进步一点点 🌱

如果有任何建议或问题，欢迎提交 Issue 或 Pull Request！

---

## 📄 许可证

[MIT License](LICENSE) © 2026 小红花奖励册
