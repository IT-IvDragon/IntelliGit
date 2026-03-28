# IntelliGit 中文版 - 发布指南

> 本文档指导您将 IntelliGit 中文版发布到 VS Code 扩展商店

## 重要说明

本扩展是 **IntelliGit** 的中文本地化版本，基于 MIT License 开源项目修改。

- **原始项目**: [IntelliGit](https://github.com/MaheshKok/IntelliGit)
- **本项目**: [IntelliGit 中文版](https://github.com/IT-IvDragon/IntelliGit)
- **许可证**: MIT License
- **开发工具**: Trae SOLO (MiniMax-M2.5 模型)

---

## 发布前检查清单

### 1. 创建 Publisher 账户 (必需)

1. 访问 [VS Code Marketplace](https://marketplace.visualstudio.com/)
2. 点击右上角 "Publish Extensions"
3. 使用 Microsoft/GitHub 账户登录
4. 创建新的 Publisher：
   - **Publisher ID**: 您的唯一标识符（如 `yourname`）
   - **Publisher Name**: 显示名称（如 `Your Name`）
5. 记录下您的 **Publisher ID**，稍后需要填入 `package.json`

### 2. 更新 package.json (必需)

编辑 `package.json` 文件：

```json
{
    "name": "intelligit-chinese",
    "displayName": "IntelliGit 中文版",
    "description": "IntelliJ-style Git UI for VS Code with Simplified Chinese language support. Forked from IntelliGit with added zh-CN localization.",
    "version": "0.6.2-zh",
    "publisher": "YOUR_PUBLISHER_ID",  // ← 替换为您的 Publisher ID
    ...
}
```

### 3. 准备图标 (可选)

推荐使用中文本地化的图标：

**选项 A**: 使用原始图标（保持不变）
- 位置: `media/intelligit-icon.png`
- 尺寸: 256x256 像素

**选项 B**: 创建中文版图标
- 可以在原始图标基础上添加 "CN" 或 "中" 标识
- 或使用中文主题的新图标

### 4. 测试扩展 (必需)

在发布前，建议在本地测试：

```bash
# 安装依赖
bun install

# 构建
bun run build

# 本地安装测试
code --install-extension intelligit-chinese-*.vsix
```

### 5. 构建发布包 (必需)

```bash
# 清理并重新构建
bun run build

# 打包 VSIX
bun run package
```

这将生成 `intelligit-chinese-x.x.x.vsix` 文件。

---

## 发布到 Marketplace

### 方法一：使用 vsce 命令行工具

```bash
# 登录（首次发布需要）
vsce login YOUR_PUBLISHER_ID

# 发布
vsce publish

# 或发布指定版本
vsce publish --pat YOUR_TOKEN

# 或从 VSIX 文件发布
vsce publish --packagePath intelligit-chinese-0.6.2-zh.vsix
```

### 方法二：网页上传

1. 访问 [VS Code Marketplace](https://marketplace.visualstudio.com/)
2. 登录您的 Publisher 账户
3. 点击 "New Extension"
4. 上传生成的 `.vsix` 文件
5. 填写扩展详情：
   - **Extension name**: `intelligit-chinese`
   - **Short description**: "IntelliGit with Simplified Chinese support"
   - **Selected category**: "SCM Providers"
   - **Tags**: git, chinese, intellij, etc.
6. 点击 "Save" 发布

---

## 发布后检查

发布成功后，请确认：

- [ ] 扩展可以正常安装
- [ ] 中文界面显示正常
- [ ] 所有功能正常工作
- [ ] Marketplace 页面显示正确

---

## 扩展版本管理

### 版本号规则

使用语义化版本 `主版本.次版本.修订版本-标识`

示例:
- `0.6.2-zh` - 中文版第一版
- `0.6.3-zh` - 跟随原项目更新
- `0.7.0-zh` - 大版本更新

### 更新扩展

当原项目有新版本时：

1. 合并原项目的更新
2. 同步新的本地化字符串
3. 更新版本号
4. 重新发布

---

## 常见问题

### Q: 如何获取 Personal Access Token?

A:
1. 访问 [Azure DevOps](https://dev.azure.com)
2. 进入 "User Settings" → "Personal Access Tokens"
3. 创建新令牌，勾选 "Marketplace" 相关权限
4. 使用令牌登录: `vsce login YOUR_PUBLISHER_ID`

### Q: 发布后多久能看到?

A: 通常需要几分钟到几小时。如果长时间未显示，请检查 Marketplace 是否有审核通知。

### Q: 可以和原扩展同时安装吗?

A: 可以，因为使用了不同的扩展名称 (`intelligit` vs `intelligit-chinese`)。

---

## 相关链接

- [VS Code Marketplace](https://marketplace.visualstudio.com/)
- [vsce 工具文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [原项目 IntelliGit](https://github.com/MaheshKok/IntelliGit)
- [IntelliGit 中文版](https://github.com/IT-IvDragon/IntelliGit)
