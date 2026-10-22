---
title: VRChat/Unity 安装指南
published: 2026-10-19
description: 从安装 VRChat Creator Companion 到配置 Unity 项目的完整入门教程
tags: [VRChat, Unity, 安装教程]
category: VRChat
draft: false
---

# VRChat/Unity 安装指南

这篇文章介绍如何安装 VRChat 官方创作工具，并创建第一个 Unity 项目。推荐使用 **VRChat Creator Companion（简称 VCC）** 管理 Unity 版本和项目，尽量不要直接手动安装 SDK。

## 一、准备工作

安装前请确认：

- 已经注册并登录 VRChat 账号。
- Windows 系统有足够的磁盘空间。
- 网络可以正常访问 VRChat 官方网站和下载服务。
- 不要把 Unity 项目放在中文路径、过深的文件夹路径或同步盘中。

建议将项目统一放在类似下面的目录：

```text
D:\VRChatProjects\
```

## 二、下载安装程序

### Unity Hub

[下载 Unity Hub 安装程序](https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup-x64.exe)

### Unity 2022.3.22f1

适用于使用 Unity 2022 版本的项目：

[下载 Unity 2022.3.22f1](https://download.unity3d.com/download_unity/887be4894c44/Windows64EditorInstaller/UnitySetup64-2022.3.22f1.exe?ampDeviceId=e492b9aa-f51b-4986-9e3e-bbfdfeceaa04&SessionId=1770686329699&Timestamp=1770773616206)

### Unity 2019.4.31f1

适用于仍然需要 Unity 2019 的旧项目：

[下载 Unity 2019.4.31f1](https://download.unitychina.cn/download_unity/bd5abf232a62/Windows64EditorInstaller/UnitySetup64-2019.4.31f1.exe?ampDeviceId=e492b9aa-f51b-4986-9e3e-bbfdfeceaa04&SessionId=1770686329699&Timestamp=1770774083637)

### ALcom（VCC 替代工具）

如果不习惯使用官方 VCC，也可以尝试 ALcom：

[下载 ALcom 资源文件](https://xz.lizi.click:12954/down/xmt9F3SW9oxq.txt)

[下载 ALcom 1.1.8](https://release-assets.githubusercontent.com/github-production-release-asset/590790034/12dd6e07-1455-4dbf-af38-0b14b11e1905?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-10-22T14%3A07%3A16Z&rscd=attachment%3B+filename%3DALCOM-1.1.8-setup.exe.zip&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-10-22T13%3A06%3A56Z&ske=2026-10-22T14%3A07%3A16Z&sks=b&skv=2018-11-09&sig=KDt7lgf2B6kfNWo3VHsTkKH%2B8XLfuG2pvh%2FJx4PkP14%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5MjY3NjIxNiwibmJmIjoxNzkyNjc0NDE2LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.vFG4ONDJcJUwpHtR_7eocAqtJQZFGiSatzKaisls37Y&response-content-disposition=attachment%3B%20filename%3DALCOM-1.1.8-setup.exe.zip&response-content-type=application%2Foctet-stream)

> 这个下载地址来自 GitHub Release，带有有效期。链接失效后，请到 ALcom 的 GitHub Release 页面重新获取最新下载地址。

> Unity 2019 和 Unity 2022 不要混用。打开项目之前，先确认项目要求的 Unity 版本。

## 三、安装 VRChat Creator Companion

1. 打开 [VRChat 官方网站](https://hello.vrchat.com/)。
2. 进入 VRChat Creator Companion 下载页面，下载 Windows 安装程序。
3. 运行安装程序并按照提示完成安装。
4. 启动 VCC，并登录自己的 VRChat 账号。
5. 第一次启动时，如果程序提示安装 Unity，请选择官方推荐的 Unity 版本。

> Unity 版本会随着 VRChat SDK 更新而变化。创建项目时，请优先使用 VCC 显示的推荐版本，不要自行选择其他版本。

## 四、安装 Unity

如果 VCC 没有自动安装 Unity，可以在 VCC 的设置页面中检查 Unity 安装状态。

1. 打开 VCC 的设置。
2. 找到 Unity 编辑器或 Unity Hub 相关设置。
3. 按照 VCC 的提示安装推荐版本。
4. 安装完成后重新启动 VCC。
5. 确认 VCC 能够识别 Unity 编辑器路径。

不要在同一个项目中反复切换 Unity 大版本，否则可能导致项目报错或重新导入资源。

## 五、创建 VRChat Unity 项目

1. 在 VCC 中打开 **Projects** 页面。
2. 点击 **Create New Project**。
3. 选择项目类型：
   - **Avatars**：制作 VRChat 角色。
   - **Worlds**：制作 VRChat 世界和地图。
4. 填写项目名称。
5. 选择一个全英文、路径较短的项目位置。
6. 点击创建，等待 Unity 项目初始化完成。
7. 点击 **Open Project**，等待 Unity 第一次导入资源。

第一次打开项目时可能需要等待较长时间，这是正常现象。导入过程中不要强制关闭 Unity。

## 六、导入模型或资源

导入第三方资源时，建议按照以下顺序操作：

1. 确认资源支持当前 Unity 版本。
2. 阅读资源压缩包内的安装说明。
3. 在 Unity 中选择 `Assets > Import Package > Custom Package...`，导入 `.unitypackage` 文件。
4. 如果资源是文件夹，将资源文件夹复制到项目的 `Assets` 目录。
5. 等待 Unity 完成资源导入。
6. 检查 Console 窗口中是否出现红色错误。

如果资源依赖其他插件，应先安装依赖，再导入主资源。

## 七、常见问题

### 1. VCC 找不到 Unity

打开 VCC 设置，重新指定 Unity 编辑器路径。如果仍然无法识别，建议通过 VCC 或 Unity Hub 重新安装官方推荐版本。

### 2. 项目打开后出现大量红色报错

常见原因包括：

- Unity 版本不匹配。
- SDK 或插件版本不兼容。
- 资源导入顺序错误。
- 项目路径包含中文或特殊字符。

可以先关闭 Unity，在 VCC 中检查项目依赖，再重新打开项目。

### 3. 项目一直卡在导入资源

请先等待一段时间。若长时间没有变化，可以关闭 Unity 后重新打开。不要直接删除项目文件夹；如果需要清理缓存，建议先备份项目，再处理项目中的缓存目录。

### 4. 上传按钮不可用

确认已经登录 VRChat 账号，并检查项目是否安装了正确的 VRChat SDK。上传前还需要在 Unity 中打开对应的 Avatar 或 World 场景。

### 5. 上传时提示权限不足

确认账号已经完成邮箱验证，并检查账号是否满足 VRChat 的上传权限要求。新账号可能需要先在 VRChat 中完成一定的使用条件。

## 八、安装完成后的建议

- 定期通过 VCC 更新项目依赖。
- 更新前先备份项目。
- 不要随意删除 SDK 文件夹。
- 不要把多个 Unity 项目合并到同一个目录。
- 导入大型模型前先确认面数、材质和贴图大小。
- 发布 Avatar 或 World 前，先使用 Build & Test 检查效果。

完成以上步骤后，就可以开始制作 VRChat Avatar 或 World 了。
