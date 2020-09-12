# 随机名生成器

起源：在使用了某 xx 软件的随机名几次后，发现了一个简单的名字规则，就是 `xx的xx`，所以我基于这个规则写了这个玩玩。

## 用法

```js
import RandomName from "index"
let name = new RandomName()

for (let i = 0; i < 10; i++) {
	console.log(name.getName())
}

// 细心的癞皮狗
// 聪明的帅哥
// 细心的高富帅
// 迷人的高富帅
// 开心的马屁精
// 耿直的高富帅
// 潇洒的癞皮狗
// 谦虚的高富帅
// 聪明的癞皮狗
// 谦虚的癞皮狗
```

## 规则

默认值为男性，从男性列表中获取并返回随机名。如果名字重复了，则会根据配置在重复名字的**前面**或者**后面**添加提示，默认为`重复-xxx`。如果所有值都匹配过后，则算重复。

## 配置

接收一个 ` options` 参数，所有的配置都基于此。

```
例：
let name = new RandomName({
    gender: 1
})
```

性别：用来选择重男性列表或者女性列表中取值

-   options.gender
    -   `1`：男性
    -   `0`： 女性

重复的值

-   options.repeat
    -   options.repeat.position
        -   `before` 在随机名的**前面**添加指定的内容
        -   `after` 在随机名的**后面**添加指定的内容
    -   options.repeat.content
        -   'xxx' 指定添加的内容
