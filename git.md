# git使用方法，及远程操作

### 1.设置签名

目级别/仓库级别：仅在当前本地库范围内有效 

（1）用户名

`git config user.name chenyan `

（2）邮箱

`git config user.email [ [inputt@class.com]`

(3)查看

`cat .git/config`

系统用户级别：登录当前操作系统的用户范围 

（1）用户名

`git config --global user.name chenyan` 

（2）邮箱

`git config --global user.email [ [inputt@class.com]`

(3)查看

`cat .git/config`

### 2.git使用方法

（1）git初始化：

`git init`

（2）git状态 

`gitstatus`

（3）工作区 添加到缓存区

`git add 文件名`

（4）缓存区添加到本地

`git commmit -m '说明' 文件名`

（5）查看历史记录（git日志）

`git log`

`git reflog`

（6）删除文件并找回

前提：删除前，文件存在时的状态提交到了本地库。

操作：git reset --hard [指针位置]

1. 删除操作已经提交到本地库：指针位置指向历史记录
2. 删除操作尚未提交到本地库：指针位置使用 HEAD

`git reset --hard a6ace91`

`git reset --hard HEAD~0`

注：表示后退 n 步

(7)比较文件差异

`git diff [文件名]`

`git diff [本地库中历史版本] [文件名] `

![](C:\Users\Administrator\Desktop\img\11.png)

### 3.分支操作

（1）创建分支

`git branch [分支名] `

（2）查看分支 

`git branch -v `

（3）切换分支 

`git checkout [分支名] `

![](C:\Users\Administrator\Desktop\img\33.png)

### 4.远程操作

(1)查看当前所有远程地址别名 

`git remote -v `

(2)

`git remote add [别名] [远程地址] `

`$ git remote add green https://github.com/xiaoxiaoyile/mygit11.git`

（3）推送

`git push [别名] [分支名] `

例子：`$ git push -u green master`

（4）克隆

`git clone [远程地址] `

`$ git clone  https://github.com/xiaoxiaoyile/mygit11.git`

![](C:\Users\Administrator\Desktop\img\22.png)

合并分支：

1. 第一步：切换到接受修改的分支（被合并，增加新内容）上 git checkout [被合并分支名]
2. 第二步：执行 merge 命令 git merge [有新内容分支名]

（5）解决冲突

表现

![](C:\Users\Administrator\Desktop\img\解决冲突.png)

冲突的解决

- 第一步：编辑文件，删除特殊符号

- 第二步：把文件修改到满意的程度，保存退出

- 第三步：git add [文件名]

- 第四步：git commit -m "日志信息"

  注意：此时 commit 一定不能带具体文件名

  ![](C:\Users\Administrator\Desktop\img\44.png)