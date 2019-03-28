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