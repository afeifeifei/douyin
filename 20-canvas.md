## canvas

### 1.简介

​		canvas（画布）是HTML5标准引入的一个新标签，该标签结合js可以实现各种图形的绘制，这给web带来了无限可能。

#### 1.1.效果展示

**炫酷的特效** - 这些特效*追梦老师*在往期的H5课程中都讲过，原理上很类似，大家学完canvas之后，再加上自己的一点点思考，就可以完成这些特效。当然，实际的工作中并不需要这样炫酷的特效，所以大家可以作为兴趣了解学习。

* [粒子时钟](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/1-%E4%B8%89%E7%BB%B4%E6%95%B0%E7%BB%84%E6%95%B0%E5%AD%97%E6%97%B6%E9%92%9F/1-%E6%97%B6%E9%92%9F.html)
* [猫头鹰时钟](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/2-%E7%8C%AB%E5%A4%B4%E9%B9%B0%E6%97%B6%E9%92%9F/index.html)
* [蜘蛛网](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/3-%E8%9C%98%E8%9B%9B%E7%BD%91/2-%E8%9C%98%E8%9B%9B%E7%BD%91.html)
* [俄罗斯方块](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/4-%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97%E6%B8%B8%E6%88%8F%E5%BC%80%E5%8F%91/)
* [雷达扫描](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/6-%E9%9B%B7%E8%BE%BE%E6%89%AB%E6%8F%8F/1-%E9%9B%B7%E8%BE%BE%E6%89%AB%E6%8F%8F.html)
* [星空](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/7-%E6%A2%A6%E5%B9%BB%E6%98%9F%E7%A9%BA/1-%E6%98%9F%E7%A9%BA.html)
* [雨滴](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/5-%E9%9B%A8%E6%BB%B4+%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD%E6%B5%8F%E8%A7%88%E9%9B%A8/1-%E9%9B%A8%E6%BB%B4.html)
* [字母雨](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/5-%E9%9B%A8%E6%BB%B4+%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD%E6%B5%8F%E8%A7%88%E9%9B%A8/2-%E9%BB%91%E5%AE%A2%E5%85%A5%E4%BE%B5.html)
* [闪电暴风雨](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/10-canvas%E7%89%B9%E6%95%88-%E9%97%AA%E7%94%B5%E6%9A%B4%E9%A3%8E%E9%9B%A8/1-%E9%97%AA%E7%94%B5%E6%9A%B4%E9%A3%8E%E9%9B%A8.html)
* [小球连线](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/8-%E9%B8%9F%E5%B7%A2%E6%9E%84%E5%BB%BA-%E7%B2%92%E5%AD%90%E7%89%B9%E6%95%88/1-%E7%B2%92%E5%AD%90%E8%BF%9E%E7%BA%BF.html)
* [鸟巢](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/8-%E9%B8%9F%E5%B7%A2%E6%9E%84%E5%BB%BA-%E7%B2%92%E5%AD%90%E7%89%B9%E6%95%88/2-%E9%B8%9F%E5%B7%A2.html)
* [字母喷泉](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/11-%E5%96%B7%E6%B3%89-%E9%9F%B3%E9%A2%91%E5%9B%BE/1-%E5%96%B7%E6%B3%89.html)
* [射线](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/12-%E7%A7%BB%E5%8A%A8%E5%9F%8E%E5%B8%82-%E5%B0%84%E7%BA%BF-%E7%83%9F%E8%8A%B1/2-%E5%B0%84%E7%BA%BF.html)
* [烟花](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/12-%E7%A7%BB%E5%8A%A8%E5%9F%8E%E5%B8%82-%E5%B0%84%E7%BA%BF-%E7%83%9F%E8%8A%B1/3-%E7%83%9F%E8%8A%B1%E7%BB%BD%E6%94%BE.html)
* [烟花2](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/12-%E7%A7%BB%E5%8A%A8%E5%9F%8E%E5%B8%82-%E5%B0%84%E7%BA%BF-%E7%83%9F%E8%8A%B1/4-%E5%9C%A3%E8%AF%9E%E8%8A%82%E5%BF%AB%E4%B9%90.html)
* [花卉光环](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/13-%E8%8A%B1%E5%8D%89%E7%BB%BD%E6%94%BE-%E5%85%89%E7%BA%BF%E7%88%86%E7%82%B8/1-%E8%8A%B1%E5%8D%89%E5%85%89%E7%8E%AF.html)
* [花卉射线](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/13-%E8%8A%B1%E5%8D%89%E7%BB%BD%E6%94%BE-%E5%85%89%E7%BA%BF%E7%88%86%E7%82%B8/2-%E8%8A%B1%E5%8D%89%E7%89%B9%E6%95%88.html)
* [刮刮乐](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/14-%E5%88%AE%E5%88%AE%E4%B9%90-%E6%97%A5%E5%87%BA%E6%97%A5%E8%90%BD/1-%E5%88%AE%E5%88%AE%E4%B9%90.html)
* [日出日落](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/14-%E5%88%AE%E5%88%AE%E4%B9%90-%E6%97%A5%E5%87%BA%E6%97%A5%E8%90%BD/2-%E6%97%A5%E5%87%BA%E6%97%A5%E8%90%BD.html)
* [粒子跟随](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/15-%E7%B2%92%E5%AD%90%E8%B7%9F%E9%9A%8F/canvas%E7%B2%92%E5%AD%90%E8%B7%9F%E9%9A%8F%E7%A7%BB%E5%8A%A84.html)

**实用的图表** - canvas并非只能做炫酷的效果，基于canvas有一些很实用的图表插件，比如[echarts](https://echarts.baidu.com/)，[highcharts](https://www.highcharts.com.cn/)。

- [天气变化曲线](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/9-highcharts%E5%9B%BE%E8%A1%A8%E6%8F%92%E4%BB%B6/1-%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5.html)
- [动态数据渲染](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/9-highcharts%E5%9B%BE%E8%A1%A8%E6%8F%92%E4%BB%B6/2-%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E6%95%B0%E6%8D%AE.html)
- [浏览器市场占用率饼状图](https://afeifeifei.github.io/class-demo/js-demo/2-canvas/9-highcharts%E5%9B%BE%E8%A1%A8%E6%8F%92%E4%BB%B6/3-3d%E5%9C%86%E5%BD%A2%E5%9B%BE.html)

**结合WebGL** - 在浏览器端开启硬件加速，实现3D场景的绘制。利用webGL技术可以在浏览器端做出非常棒的3D效果和游戏。并且随着5G时代的到来，移动端网页游戏发展前端可观。这是一门单独且很硬核的学习方向，感兴趣或者想从事web游戏开发的同学可以报名我们后期逐步推出的webGL课程。

- [飞船](http://hexgl.bkcore.com/play/)
- [像素方块游戏](http://www.jq22.com/code2128)
- [飞机模型](https://www.html5tricks.com/demo/webgl-svg-3d-plain/index.html)

### 2.开始绘图

#### 2.1.绘制前的准备

```html
<canvas id="bg"></canvas>
<script>
    let bg = document.getElementById("bg");
    let ctx = bg.getContext("2d");

</script>
```

​		首先需要通过canvas节点的*getContext*方法获取ctx对象，所有的绘制都是在ctx对象上进行操作的。*getContext*方法的参数目前只支持` "2d"`，在未来的发展中会逐渐支持`"3d"`。 当前，目前常用的参数还有`"webgl"`与`"webgl2"`，可以结合webGL来绘制图形。

#### 2.2.绘制线段

```js
//规定线段的各个起止点
ctx.moveTo(20,20);
ctx.lineTo(100,50);
ctx.lineTo(100,70);

//画线绘制
ctx.stroke();
```

​		线段的绘制，需要使用*moveTo*方法规定线段的起点，*lineTo*方法规定线段的各个中间点，这些点的坐标都是相对于canvas标签的左上角(0,0)的。最后使用*stroke*方法绘制出线段。

​		绘制方法有两种，一种为stroke（绘制线段）还可以使用*fill*方法将线段围成的区域绘制出来：

```js
//规定线段的各个起止点
ctx.moveTo(20,20);
ctx.lineTo(100,50);
ctx.lineTo(100,70);

//填充绘制
ctx.fill();
```

#### 2.3.canvas的大小设置

​		如果你初始给canvas加过背景或者边框，你会发现canvas标签的默认大小为300*150，当绘制区域大小不够的时候，我们可以将canvas画布增大一些。

​		增大canvas绘图区域不能在css样式里面设置，因为那样只会缩放canvas绘制的图像，并不会使绘制的实际区域增大。我们需要在canvas标签中设置类似`width="500" height="500"`这样的标签属性，才能真正的改变绘图区域的大小。

​		如果你想让你的canvas和显示区一样大的话，可以使用js来操作：

```js
//将canvas画布大小调整到与显示区大小一致
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

#### 2.4.绘制颜色设置

​		默认的线段或者填充是黑色的，我们可以在绘制之前设置颜色：

```js
ctx.moveTo(20,20);
ctx.lineTo(100,50);
ctx.lineTo(100,70);

//设置填充颜色。
ctx.fillStyle = "rgba(255,0,0,.9)";
ctx.fill();

/*
//设置线段颜色
ctx.strokeStyle = "red";
ctx.stroke();
*/
```

​		颜色值支持 *单词*、*#*、*rgb*、*rgba*，还支持渐变色，我们在后面介绍。

#### 2.5.样式覆盖问题

```js
//1
ctx.moveTo(20,20);
ctx.lineTo(100,50);
ctx.lineTo(100,70);
ctx.strokeStyle = "red";
ctx.stroke();

//2
ctx.moveTo(400,20);
ctx.lineTo(300,200);
ctx.lineTo(300,250);
ctx.fillStyle = "green";
ctx.fill();
```

​		上述代码并不能实现一段线段和一块填充，而是1部分有线段和填充，2部分只有填充。也就是说2部分的填充对1部分也会生效。如果我们想要让两块内容不相互影响的话，需要使用 *beginPath* 方法，规定每个部分的绘画起始。


















