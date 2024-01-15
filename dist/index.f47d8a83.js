let u=document.querySelector("#html"),r=document.querySelector("#style"),e=0,a="",o=`/*
\u{4F60}\u{597D}\u{FF0C}\u{770B}\u{6211}\u{5982}\u{4F55}\u{753B}\u{51FA}\u{4E00}\u{4E2A}\u{592A}\u{6781}\u{56FE}\u{5427}\u{3002}
\u{9996}\u{5148}\u{FF0C}\u{753B}\u{51FA}\u{4E00}\u{4E2A}\u{5706}:**/

#div1 {
    width:300px;
    height:300px;
    border:none;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}

/*\u{592A}\u{6781}\u{751F}\u{4E24}\u{4EEA}\u{FF1A}*/

@media (max-width: 500px) {
    #wrap{
        border-top:1px solid rgba(127,127,127,0.5);
    }
}

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

/*\u{9634}\u{9633}\u{5728}\u{5176}\u{4E2D}\u{FF1A}*/

#div1::before {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%);
}
#div1::after {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

/*\u{9634}\u{9633}\u{6D41}\u{8F6C}\u{FF0C}\u{751F}\u{751F}\u{4E0D}\u{606F}*/  \u{6709}\u{5F85}\u{5B9E}\u{73B0}\u{FF1B}

`,t=()=>{"\n"===o[e]?a+="<br>":" "===o[e]?a+="&nbsp":"/"===o[e]||"*"===o[e]?a+="":a+=o[e],u.innerHTML=a,r.innerHTML=o.substring(0,e),window.scrollTo(0,99999),u.scrollTo(0,99999),(e+=1)<o.length&&i()},i=()=>{o[e].charCodeAt()>255?setTimeout(()=>{t()},200):setTimeout(()=>{t()},20)};i();
//# sourceMappingURL=index.f47d8a83.js.map
