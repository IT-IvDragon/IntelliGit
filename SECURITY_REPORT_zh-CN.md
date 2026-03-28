# IntelliGit 安全性报告

本文档概述了 IntelliGit 中实施的安全措施，并提供项目安全状况的概览。

> **开发工具说明**: 本次修改使用 **Trae SOLO** 模式开发，模型使用 **MiniMax-M2.5**。

## 安全性概览

IntelliGit 是一个为 VS Code 提供 JetBrains 风格 Git 界面的扩展。该项目实施了多项安全措施，以保护用户免受常见漏洞的威胁。

**整体评估**: ✅ 该项目安全状况良好，未发现严重漏洞。

---

## 已实施的安全措施

### 1. 命令注入防护

| 功能 | 实现方式 | 位置 |
|------|---------|------|
| 路径遍历防护 | `assertRepoRelativePath()` 验证所有文件路径 | `src/utils/fileOps.ts` |
| 哈希值验证 | `isValidGitHash()` 验证 git 提交哈希 | `src/services/gitHelpers.ts` |
| 分支名验证 | `isValidBranchName()` 强制执行 git ref 格式 | `src/services/gitHelpers.ts` |
| 标签名验证 | `isValidTagName()` 强制执行 git ref 格式 | `src/services/gitHelpers.ts` |

### 2. Shell 执行安全

| 功能 | 实现方式 | 位置 |
|------|---------|------|
| 禁用 Shell 模式 | 所有 `spawn()` 调用使用 `shell: false` | `src/utils/jetbrainsMergeTool.ts` |
| 受控终端命令 | `terminal.sendText()` 仅用于已验证的操作 | `src/commands/commitCommands.ts` |

### 3. 输入验证

| 功能 | 实现方式 | 位置 |
|------|---------|------|
| 控制字符拒绝 | 拒绝空字节、CR、LF 等字符 | `src/utils/fileOps.ts` |
| 前缀碰撞防护 | 40位哈希使用精确比较 | `src/services/gitHelpers.ts` |
| ReDoS 防护 | grep 操作使用 `--fixed-strings` 参数 | `src/git/operations.ts` |

### 4. 信息泄露防护

| 功能 | 实现方式 | 位置 |
|------|---------|------|
| 凭证清理 | 从错误消息中清除 Git 凭证 | `src/utils/errors.ts` |
| CSS 注入防护 | `escapeCssString()` 清理 CSS 值 | `src/webviews/react/shared/components/ThemeIconFontFaces.tsx` |

### 5. WebView 安全

| 功能 | 实现方式 | 位置 |
|------|---------|------|
| 无 Inner HTML | 项目仅使用 React JSX | 所有 React 组件 |
| 内容安全策略 | WebView HTML 中配置了 CSP | `src/views/webviewHtml.ts` |

---

## 安全功能详解

### 路径遍历防护

```typescript
// src/utils/fileOps.ts
export function assertRepoRelativePath(filePath: string): string {
    if (!filePath || path.isAbsolute(filePath)) {
        throw new Error(`Rejected non-relative path: ${filePath}`);
    }
    if (filePath.includes("\0") || filePath.includes("\r") || filePath.includes("\n")) {
        throw new Error(`Rejected path containing control characters: ${filePath}`);
    }
    const normalized = path.normalize(filePath);
    if (normalized === ".") {
        throw new Error(`Rejected repo root path: ${filePath}`);
    }
    const segments = normalized.split(path.sep);
    if (segments.some((seg) => seg === "..")) {
        throw new Error(`Rejected path escaping repo root: ${filePath}`);
    }
    return normalized.split(path.sep).join("/");
}
```

### 分支名验证

```typescript
// src/services/gitHelpers.ts
export function isValidBranchName(value: string): boolean {
    if (!value || value.length > 255) return false;
    if (value.startsWith("-") || value.startsWith(".")) return false;
    if (value.endsWith(".") || value.endsWith("/") || value.endsWith(".lock")) return false;
    if (value.includes("..") || value.includes("//")) return false;
    if (GIT_REF_INVALID_CHARS.test(value)) return false;
    if (containsControlChars(value)) return false;
    if (value.includes("@{")) return false;
    const segments = value.split("/");
    if (segments.some((seg) => !seg || seg.startsWith(".") || seg.endsWith(".lock"))) return false;
    return true;
}
```

### 凭证清理

```typescript
// src/utils/errors.ts
export function sanitizeErrorMessage(message: string): string {
    return message.replace(/\b(?:https?:\/\/)?[\w.-]+:[\w.-]+@[\w.-]+\.\S+/gi, "[credentials redacted]");
}
```

---

## 低风险项目说明

以下项目已审查，确认风险较低：

| 项目 | 原因 |
|------|------|
| `terminal.sendText()` 使用 | 仅用于交互式变基，使用预先验证的哈希输入 |
| `process.env` 访问 | 仅读取标准环境变量（ProgramFiles、APPDATA 等） |

---

## 第三方依赖

IntelliGit 使用以下关键依赖：

| 依赖 | 用途 | 版本 |
|------|------|------|
| simple-git | Git 操作 | ^3.32.3（最新补丁版本） |
| React | UI 框架 | 18.x |

### 依赖安全性

- **simple-git**: 更新至 `^3.32.3` 以解决 GHSA-r275-fr43-pm7q（远程代码执行绕过）
- 依赖通过 `bun.lockb` 锁定

---

## 遵循的安全最佳实践

1. ✅ 对所有用户控制的数据进行输入验证
2. ✅ 文件操作前进行路径规范化
3. ✅ 子进程执行遵循最小权限原则
4. ✅ 显示前清理错误消息
5. ✅ 无 `eval()` 或 `new Function()` 使用
6. ✅ 无 `innerHTML` 或 `dangerouslySetInnerHTML` 使用
7. ✅ WebView 中强制执行内容安全策略

---

## 文档

更多文档请参阅：
- [README.md](README.md) - 主要文档
- [README_zh-CN.md](README_zh-CN.md) - 中文文档
- [CHANGELOG.md](CHANGELOG.md) - 版本历史
- [SECURITY_REPORT.md](SECURITY_REPORT.md) - 英文安全性报告

---

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE)。
