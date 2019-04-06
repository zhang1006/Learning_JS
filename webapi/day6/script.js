function my$(id) {
    return document.getElementById(id);
};  


//设置任意的标签中间的文本内容

function setInnerText(element,text) {
    //判断浏览器是否支持这个属性
    if(typeof element.textContent == "undefined"){//不支持
    element.innerText=text;
    }else{//支持
    element.textContent=text;
    }
}
//获取任意标签中间的文本内容

function getInnerText(element){
    if(typeof element.textContent == "undefined"){//不支持
    return element.innerText;
    }else{//支持
    return element.textContent; 
    }
}

//获取任意一个父级元素的第一个子级元素
function getFirstElmentChild(element){
    if(element.firstElementChild){//true
        return element.firstElementChild;
    }else{
        var node=element.firstChild; //第一个子节点
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
//获取任意一个父级元素的最后一个子级元素
function getLastElmentChild(element){
    if(element.lastElementChild){//true
        return element.lastElementChild;
    }else{
        var node=element.lastChild; //最后一个子节点
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
//获取任意一个元素的前一个兄弟元素
function getPreviousElementSibling(element){
    if(element.previousElementSibling){//true
        return element.previousElementSibling;
    }else{
        var node=element.previousSibling; //任意一个元素的前一个兄弟节点
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
//获取任意一个元素的后一个兄弟元素
function getNextElementSibling(element){
    if(element.nextElementSibling){//true
        return element.nextElementSibling;
    }else{
        var node=element.nextsSibling; //获取任意一个元素的后一个兄弟节点
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
    
//为任意元素.绑定任意的事件,任意的元素,事件的类型,事件处理函数
function addEventListener(element,type,fn){
    //判断浏览器是否支持这个方法
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//解绑事件的兼容
function removeEventListener(element, type, fnName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}


//封装左右移动动画函数
function animation(element, target) {
    //问题: 连续点击，会创建多个定时器，也就会创建多个变量，但只能清理一次
    //解决: 清理定时器(只产生一个定时器)
    //先清理定时器
    clearInterval(element.timeId);
    //
    element.timeId = setInterval(function () {
        //获取div的当前位置
        var current = element.offsetLeft;//数字类型,没有px
        //div每次移动多少像素---步数
        var step = 9;
        //判断当前距离是否大于目标位置,如果大于,那么将每次移动距离变成 -step，如果小于,那么每次移动距离不变
        step = current < target ? step : -step;
        //每次移动后的距离
        current += step;
        //判断当前移动后的位置是否达到目标位置
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 20);
}