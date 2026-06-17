# A股复盘页面发布步骤

仓库地址：

```text
https://github.com/Toristricky/a-share-daily-review.git
```

## 方式一：网页上传

1. 打开仓库首页。
2. 点击 `uploading an existing file`。
3. 把本目录下除 `share/`、`__pycache__/`、`*.zip`、`*.log` 以外的文件和文件夹拖进去。
4. 点击 `Commit changes`。
5. 进入 `Settings -> Pages`。
6. 在 `Build and deployment` 里把 `Source` 设为 `GitHub Actions`。
7. 进入 `Actions -> Daily A Share Review Refresh -> Run workflow`，手动运行一次。
8. 运行成功后，在 `Settings -> Pages` 查看公网地址。

## 方式二：命令行上传

在本目录打开 PowerShell，执行：

```powershell
git init
git branch -M main
git remote add origin https://github.com/Toristricky/a-share-daily-review.git
git add .
git commit -m "initial a-share review page"
git push -u origin main
```

然后同样进入 `Settings -> Pages`，把 `Source` 设置为 `GitHub Actions`，再到 `Actions` 手动运行一次。

## 自动刷新时间

工作流配置为周一到周五北京时间 19:17 自动刷新：

```text
17 11 * * 1-5
```

GitHub Actions 使用 UTC 时间，所以这里的 11:17 对应北京时间 19:17。
