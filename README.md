@[TOC](打造属于自己的项目脚手架工具----Vue CLI)

# 一、初始化——把脚本映射为命令

## 1.vue-cli演示
在这里我们希望可以像vue-cli那样 在终端输入vue 有对应的命令显示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328090555214.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
## 2.创建自己的脚手架文件（pgx-cli）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328090948101.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
**index.js文件中写入**

```js
#!/usr/bin/env node

console.log('pgx-cli脚手架工具');
```
**使用Node开发命令行工具所执行的javascript 脚本必须在顶部加入#!/usr/bin/env node 声明**

接下来，需要在当前文件夹中使用 **npm init -y** 命令 创建pakaage.json文件，并在文件中 加入bin字段，如图所示

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328092159962.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
然后再使用 **npm link**命令 就可以实现 将 该文件映射到全局了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328092409370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
试着在cmd中输入 pgx，发现成功执行index.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328092538402.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)

# 二、使用commander解析命令行参数

## 1.vue-cli演示
在这里，我们希望可以像vue-cli 一样，可以输入对应的参数，实现不同的功能
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328093041428.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
## 2.安装使用commander
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328093546425.png)
我们可以直接复制 commander官网上的实例代码来使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328093815967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
# 三、设计命令行参数
## 在index.js中将复制过来的代码简化。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328095507113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)

接下来 就可以在cmd测试命令是否生效
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328095700329.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
可见生效。

# 四、准备模板
在github创建一个仓库当作模板
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328104618212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
# 五、根据pgx create <projectName>命令 将模板下载到本地
## 1.安装  download-git-repo 插件

```
npm install download-git-repo
```
## 2.在index.js中引入并使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020032811075577.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
接下来 试着在 cmd 输入 `pgx create testDemo`  看看能否成功下载
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328111312714.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328111332249.png)
桌面上成功生成一个文件
可见，成功。

# 六、用ora增加下载中的loading效果
安装

```
npm install ora
```
接下来，在index.js中引入并使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328113553472.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
我们再在cmd中 使用  `pgx create testDemo`  看看效果![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328113701880.png)
可见现在有了loading样式了
# 七、使用chalk 和 logSymbols增加文本样式
## 1.下载chalk

```
npm install chalk
```
引入并使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328115330433.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
接下来可以再试一次![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328115001195.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020032811534753.png)
可见文字提示有颜色了。
接下来，我们希望 文字前面有图标
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328115516102.png)
这时，需要安装 

```
npm install log-symbols
```
然后引入并使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328115805487.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
再次测试
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328115920600.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328115834882.png)
成功。

# npm发布
   

 1. 打开npm官网
 2. 注册一个npm账号
 3. 在npm中检索是否有重复的包名
 4. 将package.json中的name改为发布到npm上的包名
 5. 打开控制台，执行`npm login`
 6. 登陆成功后，在项目下执行`npm publish` 发布![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328140904408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
在npm官网搜索，看看是否发布成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328141037736.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mzk2NDE0OA==,size_16,color_FFFFFF,t_70)
可见发布成功。

接下来
测试拉下来的的pgx能不能用。
我们需要先把使用 `npm unlink` 把之前的映射去除。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328141410400.png)
然后 再`npm install pgx-cli -g`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328141624468.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200328141634393.png)

到此为止就实现了自己的脚手架根据， 想要下载下来的模板跟vue 一样，只需要 把自己做好的模板放在git上就好了，是不是很简单。
