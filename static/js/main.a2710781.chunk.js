(this["webpackJsonprandom-game"]=this["webpackJsonprandom-game"]||[]).push([[0],{39:function(n,e,t){n.exports=t(50)},40:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);t(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=t(21),r=t(9),c=t(67),o=t(68),l=t(0),i=t.n(l),u=t(35),s=t.n(u),m=t(65),f=t(66),v=t(64),d=t(4),p=t.n(d),E="16px",b="32px",h="40px",g=t(10);function O(){var n=Object(r.a)(["\n  width: 100%;\n  padding: "," 0;\n  margin-top: ",";\n  background-color: ",";\n\n  .content {\n    color: ",";\n    font-style: italic;\n    font-weight: 400;\n  }\n"]);return O=function(){return n},n}var j={classNmae:p.a.string,content:p.a.string},w=Object(g.a)((function(n){return i.a.createElement("div",{className:n.className},i.a.createElement(v.a,{className:"content",align:"center",variant:"h1"},n.content))}))(O(),E,b,"#e5737e","#FAF0F4");w.propTypes=j,w.defaultProps={className:"",content:""};var N=w,x=["\u773c\u775b","\u9f3b\u5b50","\u5634\u5df4","\u8033\u6735","\u982d\u9aee","\u624b"],y=["\u6881\u7950\u8aa0","\u66fe\u9081\u8431","\u845b\u90c1\u6587","\u845b\u90c1\u82b3","\u8cf4\u8b19\u5982","\u6881\u7950\u9298","\u8521\u97cb\u96ef","\u6f58\u5609\u6587","\u9678\u8339\u654f","\u6c88\u5fd7\u5091","\u674e\u4ee5\u7fd4","\u4f59\u535a\u715c","\u6797\u6069\u7f8e","\u6797\u6069\u67d4","\u8b1d\u739f\u82af","\u8b1d\u5146\u5143","\u90b1\u5049\u8208","\u8207\u6069","\u5b8b\u5049\u9234","\u5b8b\u5343\u6c5d","\u5b8b\u975c\u5b9c","\u7c21\u6137\u9824","\u5468\u5b97\u51e1","\u5065\u660e","\u5468\u5b97\u8056","\u6f58\u7389\u5b98","\u6797\u6fec\u5100","\u6c88\u798f\u9054","\u856d\u8a69\u5100","\u8a31\u5fd7\u83ef","\u674e\u5b9b\u606c"],k=function(n){var e=Object(l.useState)(n),t=Object(a.a)(e,2),r=t[0],c=t[1],o=Object(l.useState)(null),i=Object(a.a)(o,2),u=i[0],s=i[1],m=null===u,f=Object(l.useCallback)((function(){return c(n)}),[n]);return Object(l.useEffect)((function(){r.length<1&&f()}),[r,f]),{isInit:m,item:m?null:r[u],currentList:r,pop:function(){m||c((function(n){return n.filter((function(n,e){return e!==u}))}));var n,e=(n=r.length-1,Math.floor(Math.random()*n));s(e)},reset:f}};function C(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  flex-flow: column nowrap;\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column nowrap;\n\n    > button {\n      margin: "," 0;\n    }\n  }\n"]);return C=function(){return n},n}var I=function(n){var e=n.className,t=n.title,a=k(y),r=a.isInit,c=a.item,o=a.pop,l=k(x),u=l.item,s=l.pop;return i.a.createElement("div",{className:e},i.a.createElement(N,{content:t}),i.a.createElement(m.a,{className:"container",maxWidth:"md"},r?i.a.createElement(f.a,{variant:"outlined",onClick:function(){return o()}},"\u958b\u59cb"):i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){return o()}},"\u4e0b\u4e00\u4f4d"),i.a.createElement(v.a,{gutterBottom:!0},"\u6311\u6230\u8005"),i.a.createElement(v.a,{variant:"h3"},c)),i.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){return s()}},"\u62bd\u90e8\u4f4d"),i.a.createElement(v.a,{variant:"h3"},u)))};I.defaultProps={className:""};var S=Object(g.a)(I)(C(),h),M=["\u5abd\u5abd\u6700\u559c\u6b61\u5403\u7684\u6c34\u679c\uff1f","\u5abd\u5abd\u559c\u6b61\u4ec0\u9ebc\u984f\u8272\uff1f","\u5abd\u5abd\u6700\u559c\u6b61\u7684\u98f2\u6599\uff1f","\u5abd\u5abd\u7684\u978b\u865f\uff1f","\u5abd\u5abd\u6700\u559c\u6b61\u5403\u7684\u4e00\u9053\u83dc\uff1f","\u5abd\u5abd\u559c\u6b61\u7684\u4e00\u9996\u6b4c\uff1f","\u5abd\u5abd\u6700\u60f3\u5ff5\u7684\u4e00\u500b\u4eba\uff1f","\u5abd\u5abd\u662f\u5ff5\u7684\u53e3\u982d\u7e8f\uff1f","\u5abd\u5abd\u6700\u4e0d\u559c\u6b61\u5b69\u5b50\u505a\u7684\u4e00\u4ef6\u4e8b\uff1f","\u70ba\u5abd\u5abd\u505a\u904e\u6700\u611f\u52d5\u7684\u4e8b\uff0c\u662f\u4ec0\u9ebc\u4e8b\uff1f","\u5abd\u5abd\u5e7e\u5e74\u51fa\u751f\u7684\uff1f\u5c6c\u4ec0\u9ebc\uff1f","\u5abd\u5abd\u6700\u5e38\u505a\u4ec0\u9ebc\u52d5\u4f5c\uff1f","\u5abd\u5abd\u6700\u611b\u6211\u54ea\u88e1\uff1f","\u5abd\u5abd\u662f\u7b2c\u5e7e\u4ee3\u57fa\u7763\u5f92\uff1f","\u5abd\u5abd\u6709\u5e7e\u500b\u5144\u5f1f\u59d0\u59b9\uff1f","\u5abd\u5abd\u5e7e\u6b72\u751f\u4f60\u7684\uff1f","\u5abd\u5abd\u7684\u8077\u696d\u662f\uff1f","\u5abd\u5abd\u7684\u8eab\u9ad8\u591a\u5c11\uff1f","\u5abd\u5abd\u662f\u55ae\u773c\u76ae\u9084\u662f\u96d9\u773c\u76ae\uff1f","\u5abd\u5abd\u7684\u5abd\u5abd\u5728\u5bb6\u88e1\u6392\u884c\u7b2c\u5e7e\u4f4d\uff1f","\u4f60\u90fd\u600e\u9ebc\u53eb\u4f60\u5abd\u5abd\uff1f","\u5abd\u5abd\u5728\u5bb6\u88e1\u90fd\u600e\u9ebc\u53eb\u4f60\uff1f","\u5abd\u5abd\u7684\u5c08\u9577\u662f\uff1f","\u5abd\u5abd\u7684\u8208\u8da3\u662f\uff1f","\u5abd\u5abd\u7684\u62ff\u624b\u83dc\u662f\uff1f","\u5abd\u5abd\u6700\u559c\u6b61\u5531\u7684\u6b4c\uff1f","\u5abd\u5abd\u559c\u6b61\u559d\u7684\u98f2\u6599\uff1f","\u5abd\u5abd\u4ec0\u9ebc\u661f\u5ea7\uff1f","\u5abd\u5abd\u4ee5\u524d\u7559\u904e\u9577\u9aee\u5230\u54ea\u88e1\uff1f","\u5abd\u5abd\u7684\u8840\u578b\uff1f\uff1f","\u5abd\u5abd\u7684\u8863\u670d\u7684\u5c3a\u5bf8\uff1f","\u5abd\u5abd\u662f\u5e7e\u5e74\u7d50\u5a5a\u7684\uff1f","\u5abd\u5abd\u6709\u6234\u8033\u74b0\u561b\uff1f","\u5abd\u5abd\u6700\u559c\u6b61\u7684\u6307\u7532\u6cb9\u984f\u8272\u662f\uff1f","\u5abd\u5abd\u6709\u67d3\u904e\u982d\u9aee\u561b\uff1f\u4ec0\u9ebc\u984f\u8272\uff1f","\u7b2c\u4e00\u6b21\u6200\u611b\u5e7e\u6b72\uff1f","\u7d50\u5a5a\u6642\u5e7e\u6b72\uff1f","\u505a\u4ec0\u9ebc\u4e8b\u80fd\u8b93\u5abd\u5abd\u958b\u5fc3\uff1f","\u7238\u7238\u5abd\u5abd\u600e\u9ebc\u8a8d\u8b58\u7684\uff1f","\u66fe\u7d93\u770b\u4ec0\u9ebc\u7bc0\u76ee\u54ed\u55ce\uff1f","\u5abd\u5abd\u6700\u788e\u5538\u7684\u662f\u4ec0\u9ebc\uff1f","\u5982\u679c\u7528\u4e00\u6735\u82b1\u5f62\u5bb9\u5abd\u5abd\uff0c\u4f60\u7684\u5abd\u5abd\u6700\u50cf\u4ec0\u9ebc\u82b1\uff1f","\u5abd\u5abd\u6709\u6c92\u6709\u6700\u559c\u6b61\u7684\u4e00\u53e5\u8056\u7d93\u7684\u8a71\uff1f","\u8b1b\u4e00\u500b\u5abd\u5abd\u8ddf\u7238\u7238\u4ee5\u524d\u7684\u7d04\u6703\u5730\u9ede","\u5abd\u5abd\u505a\u5728\u4f60\u8eab\u4e0a\u4e00\u4ef6\u6700\u611f\u52d5\u7684\u4e8b\uff1f","\u7238\u7238\u90fd\u53eb\u5abd\u5abd\u4ec0\u9ebc\uff1f\u540d\u5b57\u6216\u7dbd\u865f\uff1f","\u5abd\u5abd\u7684\u540d\u5b57\u6709\u6c92\u6709\u610f\u601d\uff1f\u662f\u4ec0\u9ebc\u610f\u7fa9\u5462\uff1f","\u5abd\u5abd\u978b\u5b50\u6709\u5e7e\u96d9\uff1f\u5927\u7d04\u6578\u4e5f\u53ef\u3002","\u5abd\u5abd\u7684\u88d9\u5b50\u591a\u9084\u662f\u8932\u5b50\u591a\uff1f","\u5abd\u5abd\u6562\u4e0d\u6562\u6349\u8001\u9f20\u6253\u87d1\u8782\uff1f","\u5abd\u5abd\u6700\u8fd1\u5728\u8ffd\u54ea\u4e00\u9f63\u5287\uff1f","\u5abd\u5abd\u6709\u88dc\u5145\u7dad\u4ed6\u547d\u7684\u7fd2\u6163\u55ce\uff1f"];function A(){var n=Object(r.a)([""]);return A=function(){return n},n}function F(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  flex-flow: column nowrap;\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column nowrap;\n\n    > button {\n      margin: "," 0;\n    }\n  }\n"]);return F=function(){return n},n}var T=function(n){var e=n.className,t=n.title,a=k(M),r=a.isInit,c=a.item,o=a.pop;return i.a.createElement("div",{className:e},i.a.createElement(N,{content:t}),i.a.createElement(m.a,{className:"container",maxWidth:"md"},r?i.a.createElement(f.a,{variant:"outlined",onClick:function(){return o()}},"\u958b\u59cb"):i.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){return o()}},"\u4e0b\u4e00\u984c"),c&&i.a.createElement(v.a,{variant:"h5"},c)))};T.defaultProps={className:""};var W=Object(g.a)(T)(F(),h),B=Object(g.a)(W)(A()),P=t(34),Q=t.n(P);function U(){var n=Object(r.a)(["\n  height: 100vh;\n  background-color: ",";\n"]);return U=function(){return n},n}function J(){var n=Object(r.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n"]);return J=function(){return n},n}var L=Object(g.a)(c.a)(J()),$=g.a.div(U(),"#f5e2ea"),q={NAME:{component:S,title:"\u6211\u7684\u5abd\u5abd\u6700\u7f8e\u9e97"},QUESTION:{component:B,title:"\u5feb\u554f\u5feb\u7b54"}},z="NAME",D="QUESTION";var G=function(){var n=Object(l.useState)(z),e=Object(a.a)(n,2),t=e[0],r=e[1],c=q[t].component;return i.a.createElement($,null,i.a.createElement(c,{title:q[t].title}),i.a.createElement(L,{value:t,onChange:function(n,e){return r(e)},showLabels:!0},i.a.createElement(o.a,{value:z,label:q.NAME.title,icon:i.a.createElement(Q.a,null)}),i.a.createElement(o.a,{value:D,label:q.QUESTION.title,icon:i.a.createElement(s.a,null)})))},H=t(13);t.n(H).a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a2710781.chunk.js.map