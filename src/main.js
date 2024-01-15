let html = document.querySelector('#html');
let style = document.querySelector('#style')
let n = 0 ;
let num = 1 ;
let string2 = '';
let string = `/*你好，看我如何画出一个太极图吧。
首先，画出一个圆：*/

#div1{
    position:fixed;
    top:0;
    right:0;
    width:300px;
    height:300px;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}

/*太极生两仪：*/

#div1::before {
    position:absolute;
    width:150px;
    height:150px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background-color:black;
    border-radius:50%;
}
#div1::after {
    position:absolute;
    width:150px;
    height:150px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background-color:white;
    border-radius:50%;
}

/*阴阳在其中：*/

#div1::before {background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%);}
#div1::after {background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);}

/*阴阳流转，生生不息*/  有待实现；

`;


// string = string.replace(/\n/g,'<br>');    //正则表达式  //有bug，<
//如果是回车，就替换掉；如果不是回车，就照搬

let word_down = () => {
    if (string[n] === '\n'){
        string2 += '<br>';
    } else if (string[n] === ' '){
        string2 += '&nbsp';
    } else if (string[n] === '/' || string[n] === '*'){
        string2 += '';
    } else {
        string2 += string[n];
    }
    html.innerHTML = string2;  
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0,99999);
    html.scrollTo(0,99999);
    n += 1 ;
    n < string.length ? step() : null ;  //?问号冒号表达式后面什么也不做用什么语法？
}

// 控制输出速度
let step = () => {
    if(string[n].charCodeAt() > 255 ){
        setTimeout(()=>{
            word_down();
        }  
    ,200)
    } else {
        setTimeout(()=>{
            word_down();
        },20)
    }
}


step() ;
