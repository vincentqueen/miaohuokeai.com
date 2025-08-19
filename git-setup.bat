@echo off
echo 正在初始化Git仓库...
git init
git add .
git commit -m "Initial commit: 秒获客AI网站备份"

echo.
echo Git仓库已初始化完成！
echo.
echo 要推送到GitHub，请执行以下步骤：
echo 1. 在GitHub上创建新仓库 'miaohuoke'
echo 2. 运行以下命令：
echo    git remote add origin https://github.com/YOUR_USERNAME/miaohuoke.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 替换 YOUR_USERNAME 为你的GitHub用户名
pause