(this.webpackJsonpkrypto2=this.webpackJsonpkrypto2||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(4),u=a.n(r),c=a(1);var m=function(e){var t=e.val,a=e.func,l=e.style,r=void 0===l?{}:l;return n.a.createElement("input",{type:"text",style:r,value:t,onChange:function(e){isNaN(e.target.value)?e.preventDefault():a(e.target.value)}})};var E=[["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25]];a(3);var i=function(e){var t=e.base,a=e.index,l=e.mod,r=function(e){for(var t="",a=e;a>=1;)t+=a%2===1?"1":"0",a=Math.floor(a/2);return t.split("").reverse()}(a).reverse(),u=function(e,t,a){for(var l=a,n=[],r=0;r<l.length;r++)n.push(e),e=Math.pow(e,2)%t;return n}(t,l,r),c=function(e,t,a){for(var l=t,n=[1],r=1,u=0;u<l.length;u++)1===Number(l[u])&&(r=r*a[u]%e),n.push(r);return n}(l,r,u);return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"x",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"a",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"t",n.a.createElement("sub",null,"i")))),n.a.createElement("tbody",null,c.map((function(e,t){return n.a.createElement("tr",null,n.a.createElement("td",null,e),n.a.createElement("td",null,u[t]),n.a.createElement("td",null,r[t]))})))),n.a.createElement("p",{style:{color:"#fff",padding:"15px",border:"2px solid #666"}},a||"pot\u0119ga"," = (",r.reverse(),")",n.a.createElement("sub",null,"2")))};var s=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(l.useState)(""),E=Object(c.a)(u,2),s=E[0],p=E[1],d=Object(l.useState)(""),o=Object(c.a)(d,2),b=o[0],f=o[1];return n.a.createElement("div",{className:"modulo"},n.a.createElement(m,{val:a,func:r}),n.a.createElement("sup",null,n.a.createElement(m,{val:s,func:p,style:{height:"8px",width:"30px"}})),n.a.createElement("span",null," mod"),n.a.createElement(m,{val:b,func:f}),n.a.createElement(i,{base:a,index:s,mod:b}))};var p=function(e){var t=e.base,a=e.mod,l=e.func,r=function(e,t){var a=0,l=[{lp:a,Ui:0,Uip:1,Vi:1,Vip:0,ni:t,ai:e,qi:Math.floor(t/e),ri:t%e}];if(e>0&&t>0)for(;l[a].ri>0;)a++,l.push({lp:a,Ui:l[a-1].Uip-l[a-1].qi*l[a-1].Ui,Uip:l[a-1].Ui,Vi:l[a-1].Vip-l[a-1].qi*l[a-1].Vi,Vip:l[a-1].Vi,ni:l[a-1].ai,ai:l[a-1].ri,qi:Math.floor(l[a-1].ai/l[a-1].ri),ri:l[a-1].ai%l[a-1].ri});return l}(t,a);return l(r[r.length-1].Vi),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"lp"),n.a.createElement("td",null,"U",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"U'",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"V",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"V'",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"n",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"a",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"q",n.a.createElement("sub",null,"i")),n.a.createElement("td",null,"r",n.a.createElement("sub",null,"i")))),n.a.createElement("tbody",null,r.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.lp),n.a.createElement("td",null,e.Ui),n.a.createElement("td",null,e.Uip),n.a.createElement("td",null,e.Vi),n.a.createElement("td",null,e.Vip),n.a.createElement("td",null,e.ni),n.a.createElement("td",null,e.ai),n.a.createElement("td",null,e.qi),n.a.createElement("td",null,e.ri))}))))};var d=function(){var e=Object(l.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(l.useState)(null),E=Object(c.a)(u,2),i=E[0],s=E[1],d=Object(l.useState)(null),o=Object(c.a)(d,2),b=o[0],f=o[1],v=Object(l.useState)(null),h=Object(c.a)(v,2),O=h[0],j=h[1],V=a*i,N=(a-1)*(i-1),U=O>=0?O%N:O+N;return n.a.createElement("div",{className:"rsa"},n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("span",null,"p = "),n.a.createElement(m,{val:a,func:r})),n.a.createElement("p",null,n.a.createElement("span",null,"q = "),n.a.createElement(m,{val:i,func:s})),n.a.createElement("p",null,n.a.createElement("span",null,"e = "),n.a.createElement(m,{val:b,func:f})),n.a.createElement("p",null,n.a.createElement("span",{className:"answer"},"n = p * q = ",V)),n.a.createElement("p",null,n.a.createElement("span",{className:"answer"},"\u03a6 = ( p - 1 ) * ( q - 1 ) = ",N)),n.a.createElement("p",null,n.a.createElement("span",{className:"answer"},"e = ",b)),n.a.createElement("p",null,n.a.createElement("span",{className:"answer"},"d = ",b," ",n.a.createElement("sup",null,"-1")," mod ",N)),n.a.createElement(p,{base:b,mod:N,func:j}),n.a.createElement("div",{className:"answer"},n.a.createElement("p",null,"Ostatni V",n.a.createElement("sub",null,"i")," mod n !!!"),n.a.createElement("p",null," ","d  = ",O," mod ",N," = ",U),n.a.createElement("p",null,n.a.createElement("span",null,"k",n.a.createElement("sub",null,"1")," = (e, n) = (",b+", "+V,")"," ")),n.a.createElement("p",null,n.a.createElement("span",null,"k",n.a.createElement("sub",null,"2")," = (d, n) = (",U+", "+V,")")))))};var o=function(){var e=E;return n.a.createElement("div",{className:"alfabet"},n.a.createElement("table",{className:"tab"},n.a.createElement("tr",null,e.map((function(e){return n.a.createElement("th",null,e[0])}))),e.map((function(e){return n.a.createElement("td",null,e[1])}))))};var b=function(){return n.a.createElement("div",null,n.a.createElement(s,null),n.a.createElement(d,null),n.a.createElement(o,null))};u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))},3:function(e,t,a){},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.44f46ca1.chunk.js.map