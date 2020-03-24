
![image.png](https://pic.leetcode-cn.com/d5cca7f1ceb712db91703ba6dbf7c36eeb867e7f26b5bacabb7f6c906d6ebea4-image.png)

## What?
大家好！我是德国SAP公司一名开发，主力语言是相对生僻的、TIOBE兵器榜排名常年30名左右的 - ABAP。该语言因更偏DB事务性而显得厚重，缺少灵动快速的特性，也没有桌面级轻量级的IDE支持，不适合拿来刷算法题。工作中逐渐涉及UI5前端，开始学习js语言，借刷leetcode的机会，学习js的一些语言特性，也希望自己在工作上CRUD编程之外，保持自己对用编程变现“逻辑之美”，“数学之美”的最初的那一份喜爱和成就感。

刷题半个多月来，虽说leetcode网页IDE其实做得很好，各种快捷键很人性化，无奈自己太菜，好多简单题提交多次也无法AC，羞愤无比。遂开始寻找本地刷题的解决方案，颇有种“自己在家偷偷努力，再去教室里显摆”的意思;-)

## Why？
- 减少leetcode网页提交次数，提高“提交通过率”
- 轻量级的，易于debug的IDE
- 语法高亮美观
- 方便跑多个测试用例
- 调试链表，二叉树等题目更直观
- 代码，题解，同步到Git，更好地云管理
- 打开vscode -> pull -> code -> stage & commit -> push，神不知鬼不觉，老板再也不担心你上班摸鱼上leetcode啦

## How？
### 准备工作：
- vscode，官网下载
- nodejs，官网下载，勾选“配置环境变量”
- vscode插件推荐：Code Runner(神器！)，Paste Image(类似leetcode编辑器的markdown自动贴图工具)，Git History(optional，vscode自带的git工具就挺好，也可以用terminal嘛)

以上的装完了，也不需要啥特别配置，就能直接跑js了。

### vscode调试js
比如下图最近双周赛的“电影院排座位”的题目。

![image.png](https://pic.leetcode-cn.com/4e3cd34725361560447ed69340c4d38ffd8a6c46c7bc7c60b943c921fb2466de-image.png)

填入js名字。

![image.png](https://pic.leetcode-cn.com/c9d8ce19e3eb34974b29af245649e8410e3bda0aff3faf1ae19b4561de4524de-image.png)

打好断点，直接开跑，可以点开变量看值，可以直接在下方输入变量名来检查，我相信大家看到这个界面，就都轻车熟路知道怎么使用了。

![image.png](https://pic.leetcode-cn.com/e0be8c46166315dd0d3d6cd038f5953e887afd9f95e5739f3409b323557b49ae-image.png)

### 用神器Code Runner直接跑
不用配置launch.json，当前在编辑哪个js，点运行，就直接运行该js，天下武功，唯快不破。我个人习惯是，将leetcode网页提交AC失败的test case都收集在这里，每次运行都console.log一轮出来assert一下实际值和期望值。

![image.png](https://pic.leetcode-cn.com/588585f048e520232717c09340354c4305b01319701a9fcfa68fa4b2d4bdc860-image.png)

### 序列化链表，二叉树等数据结构
在leetcode网上，其实是将抽象数据结构序列化为array之后来显示并传参的，我们借用leetcode第二题，“两数相加”来stdout一下就一目了然了。

传入的参数其实是array [2,3,4]，在leetcode后台被自动解序列为了ListNode对象。

![image.png](https://pic.leetcode-cn.com/4f6b1f6bd8fd68f5527b1b9d93eead0952a51174b242232adce943dd20372d94-image.png)

二叉树也是的，leetcode是层级遍历并序列化为数组的，我们可以参考297题“二叉树的序列化与反序列化”来理解。传参的也是数组，被leetcode自动解序列为二叉树对象，作为参数root传到你的函数“serialize”对二叉树进行处理，return出来后再被序列化为数组呈现。

![image.png](https://pic.leetcode-cn.com/f28c15780f23312b1f49fa616f68998daf8831dcae33131580ed4985e936fd2f-image.png)

同样地，console.log一下。

![image.png](https://pic.leetcode-cn.com/1413da373c883c58f44fd43f298b34b04066c8228269e80d9a888f050ead309e-image.png)

原理了解了，接下来就好办了，在vscode本地也模拟leetcode这个“序列化-解序列”流程即可，完成297题，你即有了二叉树的这个序列解序列工具，再准备链表的两个函数，实现“链表->数组”，“数组->链表”即可。我个人是将这些“工具”函数单独放入一个folder，用nodejs的module来require进来。

![image.png](https://pic.leetcode-cn.com/52e921c98bb5d3b82af7f037c87283aad9a7cbff91aca2b7ac161d6dc4ec71cf-image.png)

方便起见，另外封装一个console.log，Code Runner运行结果如下。

![image.png](https://pic.leetcode-cn.com/8e866980d226074975d3af252767b48cbbb4b171f9ae54ace652afc2e0f07782-image.png)

可以在leetcode题目区对二叉树图形化，也可搜索其他更专业网站，比如http://btv.melezinek.cz/home.html

![image.png](https://pic.leetcode-cn.com/ee9dd61c5747bc12a55a3541c9952f3d483d35a3c8e552ff601bdd52b5c3cb91-image.png)

好了，目前就这些与大家分享，希望能与大家一同进步，提高通过率，提高排名！

Code hard, think harder!

(另外，这篇文章也是在vscode上写的:D)

![image.png](https://pic.leetcode-cn.com/2d413ac416d0441f42f52596f70fa69cf0bb01329f2897a1b2c8386f2eaa04bb-image.png)