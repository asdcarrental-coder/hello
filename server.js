// 最简 HTTP 服务器 —— 零零九第三方依赖 2026
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="zh">
    <head><meta charset="utf-8"><title>hello</title></head>
    <body>
      <h1>🎉 全流程打通了！</h1>
      <p>本地开发 → GitHub → 服务器 → 公网访问</p>
      <p>当前时间：${new Date().toLocaleString('zh-CN')}</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`✅ 服务已启动：http://localhost:${PORT}`);
});
