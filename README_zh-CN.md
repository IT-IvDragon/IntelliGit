# IntelliGit - VS Code 的 JetBrains 风格 Git 工具

IntelliGit 将 JetBrains 风格的 Git 工作流引入 VS Code，让您可以在不切换工具的情况下完成暂存、提交、查看历史记录和管理分支等操作。

> **开发工具说明**: 本次修改使用 **Trae SOLO** 模式开发，模型使用 **MiniMax-M2.5**。

## 文档

| 文档 | 语言 | 描述 |
|------|------|------|
| [README.md](README.md) | English | 主要项目文档 |
| [README_zh-CN.md](README_zh-CN.md) | 简体中文 | 中文项目文档 |
| [CHANGELOG.md](CHANGELOG.md) | English | 版本历史和变更记录 |
| [SECURITY_REPORT.md](SECURITY_REPORT.md) | English | 安全措施与最佳实践 |
| [SECURITY_REPORT_zh-CN.md](SECURITY_REPORT_zh-CN.md) | 简体中文 | 安全措施与最佳实践 |

### 本地化文件

| 文件 | 语言 | 描述 |
|------|------|------|
| `package.nls.json` | English | VS Code 扩展命令和视图（英文） |
| `package.nls.zh-cn.json` | 简体中文 | VS Code 扩展命令和视图（中文） |
| `src/webviews/react/shared/i18n.ts` | 双语 | WebView UI 字符串国际化模块 |

![alt text](image.png)

## 用户收益

- 通过统一的提交、历史记录和分支操作界面，加快日常 Git 工作速度。
- 通过在 IntelliGit 面板中保留暂存区、差异视图、提交图和提交详情，减少上下文切换。
- 通过安全防护措施（确认提示和操作可用性规则）处理危险的 Git 操作（如已推送的提交或合并提交）。
- 如果您熟悉 IntelliJ/PyCharm 的 Git 工具，将获得相似的使用体验。

## 核心工作流程

### 1) 提交和暂存工作流（侧边栏）

- 提交标签页：文件树结构，支持选择性地暂存（按部分/文件夹/文件级别），点击文件打开差异视图，提交消息区域
- 工具栏操作：刷新、回滚、按目录分组、暂存、显示差异预览、全部展开、全部折叠
- 支持提交、提交并推送、修正提交
- 暂存标签页：基于 stash 的"shelf"工作流，保存全部或部分更改，然后应用、弹出或删除

优势说明：
- 即使在大规模变更集中，您也可以快速构建清晰的提交。
- 您可以安全地暂停未完成的工作，稍后继续而不会丢失进度。

### 2) 提交图和历史记录（底部面板）

- 三栏布局：分支列、提交列表/图、提交详情面板
- 基于 Canvas 的车道图，具有大历史记录的无限滚动分页功能
- 文本/哈希搜索和分支过滤器
- 选中提交后显示变更文件、文件统计和提交元数据

优势说明：
- 您可以更快地理解分支历史和合并路径。
- 您可以在不离开图谱上下文的情况下检查任何提交。

### 3) 分支管理（从分支列上下文菜单）

可用操作：

| 操作 | 适用范围 |
|--------|------------|
| 检出 | 本地分支、远程分支 |
| 从...创建新分支 | 当前分支、本地分支、远程分支 |
| 检出并变基到当前 | 本地分支、远程分支 |
| 将当前变基到所选 | 本地分支、远程分支 |
| 合并到当前 | 本地分支、远程分支 |
| 更新 | 当前分支、本地分支 |
| 推送 | 当前分支、本地分支 |
| 重命名... | 当前分支、本地分支 |
| 删除 | 本地分支、远程分支 |

优势说明：
- 大多数分支操作可以在您浏览历史记录的地方直接进行。
- 减少了常见分支维护任务的命令行开销。

### 4) 提交上下文操作（从提交行上下文菜单）

- 复制修订号
- 创建补丁
- 挑选提交
- 检出修订版
- 重置当前分支到此处
- 还原提交
- 撤销提交（仅限未推送的）
- 编辑提交消息（仅限未推送的）
- 删除提交（仅限未推送的）
- 从此处开始交互式变基（仅限未推送的）
- 新建分支
- 新建标签

优势说明：
- 高级历史编辑可直接在原地使用，具有更安全的可用性规则。

### 5) 工作区变更徽章

- 活动栏徽章显示工作区中当前变更文件的数量

优势说明：
- 在推送或切换上下文之前，您始终可以了解工作区是否干净。

## 快速开始

1. 在 VS Code 中打开一个 Git 仓库。
2. 从活动栏打开 IntelliGit。
3. 使用"提交"标签页暂存文件、编写消息并提交。
4. 打开底部 IntelliGit 面板检查图谱历史、按分支筛选和查看提交详情。
5. 使用分支或提交上下文菜单进行高级操作。

## JetBrains 合并工具设置（可选）

IntelliGit 可以在 JetBrains IDE 合并工具（PyCharm、IntelliJ IDEA、WebStorm 等）中打开合并冲突。

1. 打开 VS Code 设置，搜索 `IntelliGit: JetBrains Merge Tool Path`。
2. 将 `intelligit.jetbrainsMergeTool.path` 设置为您的 JetBrains 应用路径。
3. 在 macOS 上，您可以直接粘贴 `.app` 路径（IntelliGit 会自动解析内部可执行文件）。
4. 如果您希望 IntelliGit 优先使用 JetBrains，请保持 `intelligit.jetbrainsMergeTool.preferExternal` 启用（默认）。

示例（macOS）：

- `/Applications/PyCharm.app`
- `/Applications/IntelliJ IDEA.app`
- `/Applications/WebStorm.app`
- `/Users/<your-user>/Applications/PyCharm.app`

示例（Windows）：

- `C:\\Program Files\\JetBrains\\PyCharm 2025.1\\bin\\pycharm64.exe`
- `C:\\Program Files\\JetBrains\\IntelliJ IDEA 2025.1\\bin\\idea64.exe`
- `C:\\Program Files\\JetBrains\\WebStorm 2025.1\\bin\\webstorm64.exe`

有用命令：

- 从命令面板运行 `IntelliGit: Detect JetBrains Merge Tool` 可以自动检测已安装的 JetBrains IDE 并保存路径。

如果未配置 JetBrains IDE 路径，IntelliGit 将回退到 VS Code 内部合并编辑器。

## 系统要求

- VS Code `1.96.0` 或更高版本
- 已安装 Git 并在 `PATH` 中可用

## 安装

### 从应用商店安装

在 VS Code 扩展中搜索 **IntelliGit**，或从以下地址安装：

- [VS Code 应用商店](https://marketplace.visualstudio.com/items?itemName=MaheshKok.intelligit)
- [Open VSX 注册表](https://open-vsx.org/extension/MaheshKok/intelligit)

## 开发

```bash
# 安装依赖
bun install

# 构建（开发）
bun run build

# 监听模式
bun run watch

# 运行 linter
bun run lint

# 类型检查
bun run typecheck

# 运行测试
bun run test

# 格式化代码
bun run format
```

### 手动测试更改

```bash
bun install
bun run build
bun run package
code --install-extension intelligit-*.vsix
```

### 运行测试套件

```bash
# 运行所有单元测试和集成测试
bun run test

# 在监听模式下运行测试（文件更改时重新运行）
bun run test -- --watch

# 运行特定的测试文件
bun run test -- tests/unit/gitops.test.ts

# 运行匹配模式的测试
bun run test -- -t "CommitPanelApp"
```

## 架构（高级概述）

```text
GitExecutor (simple-git 包装器)
    |
GitOps（操作层）
    |
视图提供者（扩展主机编排）
    |
Webviews（用于提交面板 + 提交图谱面板的 React 应用）
```

数据流要点：

1. 图谱中的提交选择从扩展主机请求提交详情并更新详情面板。
2. 分支选择过滤图谱并清除过时的提交详情状态。
3. 提交面板文件计数更新活动徽章。
4. 刷新操作一起重新加载分支状态、历史记录和提交面板数据。

## 技术栈

| 组件 | 技术 |
|-----------|--------|
| 扩展主机 | TypeScript（严格模式），ES2022 |
| Git 操作 | simple-git v3 |
| Webviews | React 18 |
| 图谱渲染 | HTML5 Canvas |
| 打包工具 | esbuild |
| 包管理器 | Bun |
| 测试 | Vitest |
| 代码检查 | ESLint |
| 代码格式化 | Prettier |

## 许可证

[MIT](LICENSE)
