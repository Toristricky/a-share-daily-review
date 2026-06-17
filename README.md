# 每日A股复盘页面

## 使用方式

1. 运行 `refresh_a_share_review.py` 刷新行情数据与 Excel 表。
2. 运行 `start_page.ps1` 启动本地页面。
3. 打开 `http://127.0.0.1:8765/` 查看复盘页面。

## 自动刷新

Codex 自动任务已设置为周一至周五 19:00 执行刷新脚本。脚本会写入：

- `data/review.json`
- `每日A股复盘表.xlsx`
- `refresh.log`

如果公开行情接口不可用，页面会显示失败原因，并在日志中记录。

## 部署到线上

这个目录是静态页面，可以部署到 GitHub Pages、Cloudflare Pages、Nginx 或任意静态站点服务。部署时需要保留：

- `index.html`
- `styles.css`
- `app.js`
- `data/review.json`
- `每日A股复盘表.xlsx`

如需公网自动刷新，需要服务器、GitHub Actions 或其他定时任务环境来运行 `refresh_a_share_review.py`。
