# 💪 健身助手 - 肌肉模型展示小程序

一款面向健身人群的微信小程序，通过3D人体模型展示肌肉结构，提供专业的训练指导。

## ✨ 功能特性

- 🧍 **3D人体模型** - 可拖动旋转查看肌肉模型
- 🔢 **个性化参数** - 根据身高、体重、年龄生成专属模型
- 📋 **完整肌肉库** - 覆盖全身主要肌肉群（含胸大肌、前锯肌、肋间肌等）
- 💪 **训练指导** - 每个肌肉配套详细的训练动作说明
- 🎨 **精美UI** - 现代化设计，流畅的交互体验

## 🛠️ 技术栈

- **前端框架**: Vue 3 + TypeScript
- **状态管理**: Pinia
- **样式**: SCSS
- **构建工具**: Vite
- **3D引擎**: Three.js（预留集成位置）

## 📦 项目结构

```
/workspace
├── src/
│   ├── components/          # 组件目录
│   │   ├── UserForm.vue    # 用户信息表单
│   │   ├── CharacterModel.vue    # 3D人物模型
│   │   ├── MuscleInfoCard.vue    # 肌肉信息卡片
│   │   └── ExerciseCard.vue      # 训练动作卡片
│   ├── pages/              # 页面目录
│   │   └── HomePage.vue    # 首页
│   ├── stores/             # 状态管理
│   │   └── userStore.ts
│   ├── data/               # 模拟数据
│   │   └── muscles.ts      # 肌肉数据
│   ├── types/              # TypeScript类型
│   │   └── index.ts
│   ├── styles/             # 全局样式
│   │   └── main.scss
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── .trae/documents/        # 开发文档
│   ├── PRD.md              # 产品需求文档
│   └── TechnicalArchitecture.md  # 技术架构文档
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 📊 肌肉分组

本项目包含以下肌肉分组，每组都有详细的肌肉信息：

1. **胸肌** - 胸大肌、胸小肌、前锯肌、肋间肌
2. **背部肌群** - 背阔肌、斜方肌、竖脊肌、菱形肌、大圆肌、小圆肌
3. **肩部肌群** - 三角肌前束/中束/后束、冈上肌、冈下肌
4. **手臂肌群** - 肱二头肌、肱三头肌、肱肌、前臂屈肌、前臂伸肌
5. **腹部肌群** - 腹直肌、腹外斜肌、腹内斜肌、腹横肌、髂腰肌
6. **臀部肌群** - 臀大肌、臀中肌、臀小肌
7. **腿部肌群** - 股四头肌、腘绳肌、缝匠肌、小腿三头肌、胫前肌

## 📝 开发说明

### 当前状态

- ✅ 已完成产品需求文档(PRD)
- ✅ 已完成技术架构文档
- ✅ 已创建项目基础结构
- ✅ 已创建完整的肌肉和训练动作Mock数据
- ✅ 已实现核心UI组件
- ⏳ 3D模型展示：当前为演示版本，预留Three.js集成位置

### 数据结构

所有肌肉数据存储在 `src/data/muscles.ts` 中，包含：
- 肌肉基本信息（名称、描述、位置、功能）
- 训练动作（名称、难度、步骤、建议组数次数）

## 📄 相关文档

- [产品需求文档(PRD)](file:///workspace/.trae/documents/PRD.md)
- [技术架构文档](file:///workspace/.trae/documents/TechnicalArchitecture.md)

## 📄 许可证

MIT License
