// 安装  
// 配置 git config --global user.name "yxx"  git config --global user.email "yxx@xx.com"
// 初始化 git init
// 放入文件至git入口(暂存区) git add '要放入的文件路径'
// 将文件放置git内(版本库) git commit -m "文件说明"
// git status 查看当前状态 当前工作区于版本区文件内容一致时表示。。。
// git diff 来查看执行 git status 的结果的详细信息
// 尚未缓存的改动：git diff
// 查看已缓存的改动： git diff --cached
// 查看已缓存的与未缓存的所有改动：git diff HEAD
// 显示摘要而非整个 diff：git diff --stat

// git reset 返回上一个版本文件
// git add ./ 将所有修改的代码文件直接放置暂停区中
// git commit --all -m "" 将所有修改的代码文件直接放置版本区中
// git reset HEAD hello.php 取消git add的缓存文件
// git rm <file> 删除工作区文件若该文件处于暂存区则需要先清除暂存区文件git rm --cached <file>再执行命令 或者 git rm -f <file> 强制删除 
// git rm –r * 删除文件夹 
// git mv <oldfilename>  <newfilename> 用于更改暂存区内文件名 

// .gitignore 设置git忽略配置的文件 在配置文件中写入 要忽略的文件路径 

// git log 查看历史提交日志  git log --oneline 简洁版日志

// git reset --hard Head~0 回退版本回退几次并显示该文件内容 上一次为1
// git reset --hard 版本标识    可以到指定版本

// git reflog   可以看见之前版本号 

// git branch dev(分支名字)  开启分支 
// git branch -d dev    删除分支 
// git checkout dev 切换分支  主分支名为 master 
// git merge dev(分支名字)  在主支中合并分支  合并时若有冲突 需要手动处理
// git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作 


// git push 服务器仓库的地址 master    上传文件

// git pull 服务器仓库的地址 master     下载网址的文件  需要初始化

// git clone 服务器仓库的地址 // 不需要初始化


// ssh方式上传代码
// ssh-keygen -t rsa -C "yxx@xx.com"  // 创建公钥(pub) 私钥(rsa)
// 找到存放密钥的文件夹 复制公钥代码 打开 GitHub -> + 右边竖点 -> settings -> SSh -> New SSH key 粘贴公钥
// 若想他人上传代码 则需要将他人的公钥同上方法粘贴一次即可  上传代码时地址为SSh地址 上传方法同上

// git remote add origin('地址名字') 地址           后续上传或下载代码就可用 origin代替地址
// git remote add origin('地址名字') -u 地址        第一次上传或下载代码用 origin代替地址加入u参数(自动关联库) 后续操作可直接 git push/
