# Node.js 安全更新指南

## 当前情况

您收到了"vulnerable version"的警告,这意味着当前Node.js版本存在已知的安全漏洞,建议尽快更新。

## 推荐方案:使用官方安装包更新

这是最安全、最简单的方法,不会影响其他配置。

### 方法一:直接安装新版本(推荐)

1. **下载最新LTS版本**
   - 访问 https://nodejs.org/
   - 下载 **LTS版本**(推荐,如v22.x)
   - 或下载 Current版本(最新功能)

2. **运行安装程序**
   - 双击下载的 `.msi` 文件
   - 安装程序会自动覆盖旧版本
   - **保持所有默认选项**
   - 确保勾选 "Automatically install necessary tools"

3. **重启PowerShell**
   - 关闭所有PowerShell窗口
   - 重新打开PowerShell

4. **验证更新**
   ```powershell
   node --version
   npm --version
   ```

### 方法二:使用nvm-windows(高级用户)

如果需要管理多个Node.js版本:

1. **卸载当前Node.js**
   - 控制面板 → 程序和功能
   - 找到Node.js并卸载

2. **安装nvm-windows**
   - 访问 https://github.com/coreybutler/nvm-windows/releases
   - 下载 `nvm-setup.exe`
   - 运行安装

3. **安装Node.js**
   ```powershell
   # 安装最新LTS版本
   nvm install lts
   
   # 使用这个版本
   nvm use lts
   
   # 验证
   node --version
   ```

## 更新后需要做什么?

### 1. 重新安装项目依赖

更新Node.js后,建议重新安装项目依赖:

```powershell
cd e:\Antigravity\code\project1

# 删除旧的node_modules(如果存在)
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# 删除package-lock.json
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# 重新安装
npm install
```

### 2. 测试项目

```powershell
# 启动开发服务器
npm run dev
```

在浏览器中访问 http://localhost:3000 确认一切正常。

## 不会影响的内容

✅ **不会丢失**:
- 项目代码
- package.json配置
- 全局安装的npm包
- Git配置
- 环境变量

✅ **会自动保留**:
- npm配置
- 全局安装的工具
- 用户设置

## 可能需要重新安装的全局包

如果您之前全局安装了一些工具,更新后可能需要重新安装:

```powershell
# 查看当前全局包
npm list -g --depth=0

# 如果缺少某些包,重新安装
npm install -g <package-name>
```

## 常见问题

### Q: 更新会影响其他项目吗?

A: 不会。只要其他项目的 `package.json` 中指定的依赖版本兼容,就不会有问题。

### Q: 需要备份什么吗?

A: 建议备份:
- 整个项目文件夹(以防万一)
- 不过通常不需要,Node.js更新很安全

### Q: v20.x 和 v22.x 有什么区别?

A: 
- v20.x: 当前LTS(长期支持),稳定可靠
- v22.x: 新的LTS版本,更多新特性和性能改进
- 建议使用最新的LTS版本

### Q: 更新后npm命令不可用?

A: 
1. 重启PowerShell
2. 检查环境变量中是否有Node.js路径
3. 重新安装Node.js

## 推荐更新流程

```powershell
# 1. 检查当前版本
node --version
npm --version

# 2. 下载并安装新版本(从nodejs.org)

# 3. 重启PowerShell

# 4. 验证新版本
node --version
npm --version

# 5. 进入项目目录
cd e:\Antigravity\code\project1

# 6. 重新安装依赖
npm install

# 7. 测试项目
npm run dev
```

## 总结

**最简单安全的方法**:
1. 从 https://nodejs.org/ 下载最新LTS版本
2. 直接安装(会自动覆盖旧版本)
3. 重启PowerShell
4. 在项目目录运行 `npm install`
5. 测试 `npm run dev`

整个过程5-10分钟,不会影响任何配置!
