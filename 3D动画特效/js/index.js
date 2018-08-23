window.onload = function () {

    (function(){
        //重要变量
        var length = 5*5*5,//li总个数
            oUl = document.getElementById("list").children[0],//所有li的父级
            aLi = oUl.children;//所有li

        //初始化
        (function(){
            for (var i = 0; i < length; i++) {
                var oLi = document.createElement("li");
                oLi.index = i;
                oLi.x = i % 5;
                oLi.y = Math.floor( i%25/5 ) ;
                oLi.z = 4 - Math.floor( i/25 ) ;

                var d = flyData[i] || flyData[0];
                oLi.innerHTML = "<b class='liCover'></b>" +
                    "<p class='liTitle'>"+d.type+"</p>" +
                    "<p class='liAuthor'>"+d.author+"</p>" +
                    "<p class='liTime'>"+d.time+"</p>";

                var tX = Math.random()*6000-3000,
                    tY = Math.random()*6000-3000,
                    tZ = Math.random()*6000-3000;

                oLi.style.transform = "translate3D("+tX+"px,"+tY+"px,"+tZ+"px)";
                oUl.appendChild(oLi);
            }
            setTimeout(Grid , 200);
        })();

        //关于弹窗事件
        (function(){
            var oAlert = document.getElementById("alert"),
                oATitle = oAlert.getElementsByClassName("title")[0].getElementsByTagName("span")[0],
                oAImg = oAlert.getElementsByClassName("img")[0].getElementsByTagName("img")[0],
                oAAuthor = oAlert.getElementsByClassName("author")[0].getElementsByTagName("span")[0],
                oAInfo = oAlert.getElementsByClassName("info")[0].getElementsByTagName("span")[0];
            var oAll = document.getElementById("all");
            var oBack = document.getElementById("back");
            var oFrame = document.getElementById("frame");
            //li点击出现弹出层
            oUl.onclick = function (e) {
                var target = e.target;
                if ( /b/i.test(target.nodeName) ){
                    if ( target.goudan ){
                        target.goudan = false;
                    }else{
                        if ( oAlert.style.display==="block" ){
                            hide()
                        }else{
                            var index = target.parentNode.index;
                            var d = flyData[index] || flyData[0];
                            oAlert.index = index;
                            oATitle.innerHTML = "课题：" + d.title;
                            oAImg.src = "src/" + d.src + "/index.png";
                            oAAuthor.innerHTML = "主讲老师：" + d.author;
                            oAInfo.innerHTML = "描述：" + d.dec;
                            show();
                        }
                    }
                }
                e.cancelBubble = true;
            };
            //弹出层上点击
            oAlert.onclick = function (e) {
                var d = flyData[this.index] || flyData[0];
                oFrame.src = "src/" + d.src + "/index.html";
                oAll.className = "left";
                e.cancelBubble = true;
            };
            //弹出层消失的触发
            document.onclick = function () {
                hide();
            };
            //Back按钮的点击
            oBack.onclick = function () {
                oAll.className = "";
            };

            //弹出层的显示
            function show() {
                if ( !oAlert.timer ){
                    oAlert.timer = true;
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(2)";
                    oAlert.style.opacity = "0";
                    var time = 300,
                        sTime = new Date();
                    function m() {
                        var prop = (new Date - sTime) / time;
                        if ( prop >= 1 ){
                            prop = 1;
                            oAlert.timer = false;
                        }else{
                            requestAnimationFrame(m);
                        }
                        oAlert.style.transform = "rotateY(0deg) scale("+((1-2)*prop+2)+")";
                        oAlert.style.opacity = prop;
                    }
                    requestAnimationFrame(m);
                }
                return false;
            }
            //弹出层的隐藏
            function hide() {
                if ( oAlert.style.display === "block"&& !oAlert.timer ){
                    oAlert.timer = true;
                    oAlert.style.display = "block";
                    oAlert.style.transform = "rotateY(0deg) scale(1)";
                    oAlert.style.opacity = "1";
                    var time = 300,
                        sTime = new Date;
                    function m() {
                        var prop = (new Date - sTime) / time;
                        if ( prop >= 1 ){
                            prop = 1;
                            oAlert.timer = false;
                            oAlert.style.display = "none";
                        }else{
                            requestAnimationFrame(m);
                        }
                        oAlert.style.transform = "rotateY("+180*prop+"deg) scale("+(1-prop)+")";
                        oAlert.style.opacity = 1-prop;
                    }
                    requestAnimationFrame(m);
                }
            }
        })();

        //拖拽/滚轮事件的添加
        (function(){
            var roX = 0,
                roY = 0,
                trZ = -2000,
                timerMouse = null;

            document.onselectstart = function () {
                return false;
            };
            document.ondrag = function () {
                return false;
            };
            document.onmousedown = function (e) {
                //取消掉还没完成的惯性
                cancelAnimationFrame( timerMouse );

                var sX = e.clientX,
                    sY = e.clientY,
                    lastX = sX,//存最后一次move的坐标
                    lastY = sY,//存最后一次move的坐标
                    x_ = 0,//用来存最后两次move的距离差
                    y_ = 0,//用来存最后两次move的距离差
                    ifMove = false,//检测up之前是否有move
                    moveTime = 0,//用来解决最后一次move后很久再up还会有惯性的问题
                    ifTime = new Date;//解决短时间内误拖拽导致弹出层不出来的问题

                //解决down和up在同一个li身上触发，导致拖拽结束后还会弹窗的问题
                if ( /b/i.test(e.target.nodeName) ){
                    var thisLi = e.target;
                }

                this.onmousemove = function (e) {
                    ifMove = true;
                    x_ = e.clientX - lastX;
                    y_ = e.clientY - lastY;

                    roX -= y_*0.15;
                    roY += x_*0.15;

                    oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";

                    lastX = e.clientX;
                    lastY = e.clientY;

                    moveTime = new Date;
                };
                this.onmouseup = function (e) {
                    if ( ifMove && (e.target === thisLi) && (new Date - ifTime) > 500 ){
                        thisLi.goudan = true; //给true的话，就会阻止弹窗的发生
                    }
                    this.onmousemove = null;
                    function m() {
                        x_ *= 0.9;
                        y_ *= 0.9;
                        roX -= y_*0.15;
                        roY += x_*0.15;
                        oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";
                        if ( Math.abs(x_) < 0.1 && Math.abs(y_) < 0.1 )return;
                        timerMouse = requestAnimationFrame(m);
                    }
                    if ( new Date - moveTime < 100 ){
                        timerMouse = requestAnimationFrame(m);
                    }
                }
            };

            !function ( fn ) {
                if ( document.onmousewheel === undefined ){
                    document.addEventListener("DOMMouseScroll" , function (e) {
                        var d = -e.detail/3;
                        fn.call(this , d);
                    },false);
                }else{
                    document.onmousewheel = function (e) {
                        var d = e.wheelDelta / 120;
                        fn.call(this , d);
                    }
                }
            }(function (d) {
                trZ += d*100;
                oUl.style.transform = "translateZ("+trZ+"px) rotateX("+roX+"deg) rotateY("+roY+"deg)";
            });
        })();

        //左下btn点击
        (function(){
            var aBtn = document.getElementById("btn").getElementsByTagName("li");
            var arr = [Table , Sphere , Helix , Grid];
            for (var i = 0 , length = aBtn.length; i < length; i++) {
                (function(i){
                    aBtn[i].onclick = arr[i];
                })(i);
            }
        })();

        //Table 元素周期表布局
        function Table() {
            if ( Table.arr ){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Table.arr[i];
                }
            }else{
                Table.arr = [];
                var n = Math.ceil(length / 18) + 2;
                var midY = n / 2 - 0.5;
                var midX = 18 / 2 - 0.5;
                var disX = 170;
                var disY = 210;

                var arr = [
                    {x : 0, y : 0},
                    {x : 17, y : 0},
                    {x : 0, y : 1},
                    {x : 1, y : 1},
                    {x : 12, y : 1},
                    {x : 13, y : 1},
                    {x : 14, y : 1},
                    {x : 15, y : 1},
                    {x : 16, y : 1},
                    {x : 17, y : 1},
                    {x : 0, y : 2},
                    {x : 1, y : 2},
                    {x : 12, y : 2},
                    {x : 13, y : 2},
                    {x : 14, y : 2},
                    {x : 15, y : 2},
                    {x : 16, y : 2},
                    {x : 17, y : 2}
                ];

                for (i = 0; i < length; i++) {
                    var x,y;
                    if ( i < 18 ){
                        x = arr[i].x;
                        y = arr[i].y;
                    }else{
                        x = i%18;
                        y = Math.floor(i/18)+2;
                    }
                    var val = "translate3D("+(x-midX)*disX+"px,"+(y-midY)*disY+"px,0px)";
                    Table.arr[i] = val;
                    aLi[i].style.transform = val;
                }
            }

        }

        //Sphere 球状布局
        function Sphere() {
            if ( Sphere.arr ){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Sphere.arr[i];
                }
            }else{
                Sphere.arr = [];
                var arr = [1,3,7,9,11,14,21,16,12,10,9,7,4,1],
                    arrLength = arr.length,
                    xDeg = 180 / (arrLength-1);
                for (i = 0; i < length; i++) {

                    //求出当前 i 处于arr的第几层 第几个
                    var numC = 0 , numG = 0;
                    var arrSum = 0;
                    for (var j = 0; j < arrLength; j++) {
                        arrSum += arr[j];
                        if ( arrSum > i ){
                            numC = j;
                            numG = arr[j] - (arrSum - i);
                            break;
                        }
                    }
                    var yDeg = 360 / arr[numC];
                    var val = "rotateY("+(numG+1.3)*yDeg+"deg) rotateX("+(90-numC*xDeg)+"deg) translateZ(800px)";
                    Sphere.arr[i] = val;
                    aLi[i].style.transform = val;
                }
            }

        }

        //Helix 螺旋式布局
        function Helix() {
            if (Helix.arr){
                for (var i = 0; i < length; i++) {
                    aLi[i].style.transform = Helix.arr[i];
                }
            }else{
                Helix.arr = [];
                var h = 3.7,//环数
                    tY = 7,//每个li上下位移相差
                    num = Math.round(length/h),//每环个数
                    deg = 360 / num,//每个li Y旋转相差
                    mid = length/2 - 0.5;//找准中间点
                for (i = 0; i < length; i++) {
                    var val = "rotateY("+i*deg+"deg) translateY("+(i-mid)*tY+"px) translateZ(800px)";
                    Helix.arr[i] = val;
                    aLi[i].style.transform = val;
                }
            }

        }

        //Grid 层叠式布局
        function Grid() {
            if ( Grid.arr ){
                for (i = 0; i < length; i++) {
                    aLi[i].style.transform = Grid.arr[i];
                }
            }else{
                Grid.arr = [];
                var disX = 350;//每个li 水平（x）方向的间距
                var disY = 350;//每个li 垂直（y）方向的间距
                var disZ = 800;//每个li 纵深（z）方向的间距
                for (var i = 0; i < length; i++) {
                    var oLi = aLi[i];
                    var x = (oLi.x - 2) * disX,
                        y = (oLi.y - 2) * disY,
                        z = (oLi.z - 2) * disZ;
                    var val = "translate3D("+x+"px,"+y+"px,"+z+"px)";
                    Grid.arr[i] = val;
                    oLi.style.transform = val;
                }
            }

        }
    })();

};




/*var oDiv = document.createElement("div");
oDiv.style.cssText = "background:pink; position:absolute; width:5px; height:5px; border-radius:100%; top:"+e.clientY+"px; left:"+e.clientX+"px;";
document.body.appendChild(oDiv);*/













