# hello —— 最简全流程演示

从本地开发到公网访问的完整链路：

```
本地(Windows) → GitHub 仓库 → 云服务器(git pull) → 公网 IP 访问
```

## 本地启动

```bash
node server.js
# 或
npm start
```

打开 http://localhost:3000

## 部署到服务器

服务器上执行（首次）：

```bash
git clone <你的仓库地址>
cd hello
node server.js
```

生产环境建议用 pm2 守护进程：

```bash
npm i -g pm2
pm2 start server.js --name hello
```

公网访问：`http://<服务器公网IP>:3000`
