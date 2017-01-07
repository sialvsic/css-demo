## What is this?
scrollPenetrate - 滑动穿透

这个submodule是在modal的基础上解决滑动穿透的问题

## Analysis

在一个页面上打开新的窗口时发现如果这个新的窗口中的内容是可以滑动的时候,会影响到底层（背景层）的滚动，根据业务的需要，有时这种事情是可以接受的，那么没有问题；但是如果要解决，怎么办？

思路：在新的窗口打开时，给Body上加上以下的样式：

```
{
  positon: fixed;
  width: 100%;
}

```

但是要使用js处理一下原先页面的定位问题

## Feature

## Version

## Note

## Showcase

打开Demo: [scrollPenetrate](https://sialvsic.github.io/css-demo/scrollPenetrate/index.html)