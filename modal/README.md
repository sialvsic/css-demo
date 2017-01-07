## What is this?
这个submodule是学习如何写一个modal

## Analysis
实现的思路就是，开始设置一个div为display为none的，当有一个事件（一般情况下为button的打开）时，设置这个div的display的状态为block，此时modal就是显示出来。

关于modal的定位：
常见的定位有4种方式
- static(默认的)
- relative(相对定位)  这里明显不适合
- absolute
- fixed

这里使用fixed定位因为要相对于viewpoint定位，且要显示在最上层

## Feature

## Version

## Note
这个Demo会出现 滚动穿透的问题，解决方法请参考  scrollPenetrate这个Demo

## Showcase

打开Demo: [modal](https://sialvsic.github.io/css-demo/modal/index.html)