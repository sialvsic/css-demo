## What is this?
这个submodule是学习如何写一个modal

## Analysis
要实现一个modal，需要考虑的几个问题：
- modal的宽度和高度是否固定
- modal打开时的位置是否垂直居中且水平居中
- modal内的内容如果超过屏幕高度(mobile)时该如何显示，是内部滚动？还是modal滚动？
- 注意浏览器的兼容性（IE>=11）

实现的思路就是，开始设置一个div为display为none的，当有一个事件（一般情况下为button的打开）时，设置这个div的display的状态为block，此时modal就是显示出来。

关于modal的定位：
常见的定位有4种方式

- static(默认的)
- relative(相对定位)  这里明显不适合
- absolute
- fixed

这里使用fixed定位因为要相对于viewpoint定位，且要显示在最上层

## Feature

存在几种方式的Modal：

第一种(垂直居上modal-短)
- 宽度固定，高度固定(水平宽度考虑mobile最小宽度320px)
- modal水平居中，垂直不居中(偏上)
- 内容高度超出modal高度时，modal内部滚动

缺陷：在modal内部滚动

实例：modal-V1
V1 实现：
```
width: 320px;
height: 500px;
margin: 20px auto 20px;
```

第二种(垂直居上modal-短/长)
- 宽度响应式变化，高度响应式变化
- modal水平居中，垂直不居中(偏上)
- 内容高度超出modal高度时，整体modal会滚动，而非modal内部滚动

实例：
- modal-V2：短/长  `Trello`的实现
- modal-V3：短/长  `Bootstrap`的实现


V2 实现：
```
display: flex;
align-items: flex-start;
justify-content: center;
```

V3 实现：
```
max-width: 500px;
margin: 1.75rem auto;
transform: translate(0,0);  //感觉此行代码没什么用
```

第三种(垂直居中modal-短/长)
- 宽度响应式变化，高度响应式变化
- modal水平居中，垂直居中
- 内容高度超出modal高度时，整体modal会滚动，而非modal内部滚动

实例：
- modal-V4：短/长  `Bootstrap`的实现
- modal-V5：短/长  `自己`的实现 `推荐`

V4 实现：
```
display: flex;
align-items: center;

margin: 1.75rem auto;
max-width: 500px;
min-height: calc(100% - (1.75rem * 2));

transform: translate(0, 0);
```

V5 实现：`推荐使用`
```
display: flex;
align-items: center;
justify-content: center;
```

## Version

## Note

这个Demo会出现 滚动穿透的问题，解决方法请参考  scrollPenetrate这个Demo

实现代码参考：
Bootstrap: https://getbootstrap.com/docs/4.0/components/modal/
Trello: https://trello.com

## Browser Support
以上的所有实现都可以在以下主流浏览器运行

- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] IE11
- [x] Edge

## Showcase
打开Demo: [modal](https://sialvsic.github.io/css-demo/modal/index.html)
