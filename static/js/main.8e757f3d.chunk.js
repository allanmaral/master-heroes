(this["webpackJsonpmaster-heroes"]=this["webpackJsonpmaster-heroes"]||[]).push([[0],{67:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(30),c=t.n(i),l=t(10),o=t(5),u=t(8),s=t(1),m=t(2);function f(){var n=Object(s.a)(["\n  text-align: center;\n  width: 100%;\n"]);return f=function(){return n},n}function d(){var n=Object(s.a)(["\n  border-radius: 0 8px 8px 0;\n"]);return d=function(){return n},n}function g(){var n=Object(s.a)(["\n  border-radius: 8px 0 0 8px;\n  margin-right: 1px;\n"]);return g=function(){return n},n}function b(){var n=Object(s.a)(["\n  border-radius: 8px;\n"]);return b=function(){return n},n}function p(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 35px;\n  width: 75px;\n  padding: 10px;\n  background: hsla(0, 0%, 100%, 0.15);\n\n  span {\n    margin-left: 10px;\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(s.a)(["\n  height: 59px;\n  width: 100%;\n  background: #000;\n  color: #fff;\n\n  ul {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    li {\n      width: 33%;\n      display: flex;\n      justify-content: center;\n      margin: 0 20px;\n    }\n  }\n"]);return x=function(){return n},n}var h=m.b.nav(x()),v=m.b.div(p()),E=Object(m.b)(v)(b()),j=Object(m.b)(v)(g()),O=Object(m.b)(v)(d()),y=m.b.h1(f());function w(n){var e=n.title,t=n.inGame,r=n.score,i=n.timeRemaining,c=n.cardIndex,l=n.totalCardNumber;return a.a.createElement(h,null,a.a.createElement("ul",null,a.a.createElement("li",null,t&&a.a.createElement(E,null,c,"/",l)),a.a.createElement("li",null,a.a.createElement(y,null,e)),a.a.createElement("li",null,t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null,a.a.createElement(u.b,null),a.a.createElement("span",null,r)),a.a.createElement(O,null,a.a.createElement(u.a,null),a.a.createElement("span",null,i))))))}w.defaultProps={inGame:!1,score:0,timeRemaining:0,cardIndex:1,totalCardNumber:5};var k=w;function C(){var n=Object(s.a)(["\n  width: 200px;\n  height: 60px;\n  margin-top: 15px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-shadow: 0px 0px 13px 0px rgba(224, 224, 224, 1);\n\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  text-decoration: none;\n\n  img,\n  svg {\n    margin-right: 10px;\n  }\n"]);return C=function(){return n},n}function R(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n\n  margin: 10px;\n  border-radius: 10px;\n  background: rgba(9, 12, 47, 1);\n  background: linear-gradient(\n    135deg,\n    rgba(9, 12, 47, 1) 0%,\n    rgba(3, 54, 54, 1) 100%\n  );\n\n  h1 {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 15px;\n  }\n\n  p {\n    margin-bottom: 15px;\n    width: 100%;\n    max-width: 600px;\n    font-size: 20px;\n    text-align: center;\n  }\n"]);return R=function(){return n},n}var S=m.b.div(R()),N=Object(m.b)(l.b)(C()),z=15,A=60;function I(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{title:"Master Heroes"}),a.a.createElement(S,null,a.a.createElement("h1",null,"Welcome to Master Heroes"),a.a.createElement("p",null,"This is a simple guess game, for each image you have three name options, select the name of the hero in the image and score."),a.a.createElement("p",null,"You have ",A," seconds to guess the name of"," ",z," heroes, after answering all the heros, the remaining time will be converted in points."),a.a.createElement("p",null,"Can you guess all the heroes?"),a.a.createElement(N,{to:"game"},a.a.createElement(u.c,{size:20}),"Start Game!")))}var M=t(35),F=t.n(M);function G(){var n=Object(s.a)(["\n  flex: 1;\n  margin: 5px;\n  width: 100%;\n  max-width: 300px;\n  height: 100px;\n  background: ",";\n  color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  box-shadow: 0px 0px 13px 0px rgba(22, 22, 30, 1);\n\n  &:hover {\n    background: ",";\n  }\n"]);return G=function(){return n},n}function H(){var n=Object(s.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 50%;\n  padding: 0 30px;\n"]);return H=function(){return n},n}function L(){var n=Object(s.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 75%;\n  height: 50%;\n\n  img {\n    border-radius: 8px;\n    height: 75%;\n  }\n"]);return L=function(){return n},n}function J(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return J=function(){return n},n}var P=m.b.div(J()),T=m.b.div(L()),Y=m.b.div(H()),B=m.b.button(G(),(function(n){return n.color}),(function(n){return F()(n.color).brighten(.5)}));var U=function(n){var e=n.hero,t=n.handleSelectName,r=n.selectedCard,i=n.rightAnwser,c=e.image,l=e.options,o=function(n){if(r){if(n===i)return"#2fea56";if(n===r)return"#ea2f2f"}return"#2f6dae"};return a.a.createElement(P,null,a.a.createElement(T,null,a.a.createElement("img",{src:c,alt:"Hero"})),a.a.createElement(Y,null,l.map((function(n){return a.a.createElement(B,{key:n,type:"button",color:o(n),onClick:function(){t(n)},disabled:""!==r},n)}))))},W=t(7),q=function(n){return function(e){var t=e.timeRemaining,i=e.heroesList,c=Object(r.useState)(0),l=Object(W.a)(c,2),u=l[0],s=l[1],m=Object(r.useState)(0),f=Object(W.a)(m,2),d=f[0],g=f[1],b=Object(r.useState)(0),p=Object(W.a)(b,2),x=p[0],h=p[1],v=Object(r.useState)(""),E=Object(W.a)(v,2),j=E[0],O=E[1],y=Object(o.f)();Object(r.useEffect)((function(){(u===z||t<=0)&&y.push("/results",{score:d,correctAnswers:x,timeRemaining:t})}),[u,t,d,x,y]);return i.length>0&&u<z&&a.a.createElement(n,Object.assign({},e,{handleSelectName:function(n){n===i[u].name&&(g(d+20),h(x+1)),O(n),setTimeout((function(){s(u+1),O("")}),1500)},currentCard:i[u],cardIndex:u+1,totalCardNumber:z,selectedCard:j,score:d}))}},D=t(19),K=t.n(D),Q=t(36),V=t(37),X=t.n(V).a.create({baseURL:"https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/"}),Z=t(38);var $=function(n){for(var e=Object(Z.a)(n),t=e.length;0!==t;){var r=Math.floor(Math.random()*t),a=e[t-=1];e[t]=e[r],e[r]=a}return e},_=function(n){return function(e){var t=Object(r.useState)(!1),i=Object(W.a)(t,2),c=i[0],l=i[1],o=Object(r.useState)([]),u=Object(W.a)(o,2),s=u[0],m=u[1],f=function(n){var e=function e(t,r){for(;n[t].id===r;)return e(Math.floor(Math.random()*n.length),r);return n[t].name};return n.slice(0,z).map((function(n,t){var r,a=e(t,n.id);do{r=e(t,n.id)}while(r===a);return{id:n.id,name:n.name,options:$([n.name,a,r]),image:n.images.sm}}))};return Object(r.useEffect)((function(){(function(){var n=Object(Q.a)(K.a.mark((function n(){var e,t,r;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.prev=1,n.next=4,X.get("/all.json");case 4:e=n.sent,t=e.data,r=f($(t)),m(r),l(!1),n.next=16;break;case 11:n.prev=11,n.t0=n.catch(1),l(!1),m([]),console.error(n.t0);case 16:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}})()()}),[]),a.a.createElement(n,Object.assign({},e,{loading:c,heroesList:s}))}},nn=function(n){return function(e){var t=Object(r.useState)(A),i=Object(W.a)(t,2),c=i[0],l=i[1];return Object(r.useEffect)((function(){var n=setInterval((function(){l(c-1)}),1e3);return function(){return clearInterval(n)}}),[c]),a.a.createElement(n,Object.assign({},e,{timeRemaining:c}))}},en=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return function(){return n(e.apply(void 0,arguments))}}))};function tn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n\n  margin: 10px;\n  border-radius: 10px;\n  background: rgba(9, 12, 47, 1);\n  background: linear-gradient(\n    135deg,\n    rgba(9, 12, 47, 1) 0%,\n    rgba(3, 54, 54, 1) 100%\n  );\n"]);return rn=function(){return n},n}var an=m.b.div(rn()),cn=m.b.div(tn());var ln=en(nn,_,q)((function(n){var e=n.loading,t=n.timeRemaining,r=n.score,i=n.currentCard,c=n.handleSelectName,l=n.cardIndex,o=n.totalCardNumber,u=n.selectedCard;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{title:"Master Heroes",inGame:!0,cardIndex:l,totalCardNumber:o,score:r,timeRemaining:t}),a.a.createElement(an,null,e&&a.a.createElement(cn,null,a.a.createElement("h1",null,"Loading...")),!e&&a.a.createElement(U,{hero:i,handleSelectName:c,selectedCard:u,rightAnwser:i.name})))}));function on(){var n=Object(s.a)(["\n  width: 200px;\n  height: 60px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-shadow: 0px 0px 13px 0px rgba(224, 224, 224, 1);\n  margin-top: 30px;\n\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  text-decoration: none;\n\n  img,\n  svg {\n    margin-right: 10px;\n  }\n"]);return on=function(){return n},n}function un(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 170px;\n  height: 70px;\n  margin: 10px;\n  padding: 10px;\n  background: #223;\n  border-radius: 8px;\n  box-shadow: 0px 0px 13px 0px rgba(22, 22, 30, 1);\n\n  img,\n  svg {\n    margin: 0 5px;\n  }\n\n  & > div {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n\n    span {\n      text-align: center;\n    }\n\n    strong {\n      text-align: center;\n    }\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return sn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n\n  margin: 10px;\n  border-radius: 10px;\n  background: rgba(9, 12, 47, 1);\n  background: linear-gradient(\n    135deg,\n    rgba(9, 12, 47, 1) 0%,\n    rgba(3, 54, 54, 1) 100%\n  );\n\n  h1 {\n    margin-bottom: 20px;\n  }\n\n  h2 {\n    margin-bottom: 20px;\n    text-align: center;\n  }\n"]);return mn=function(){return n},n}var fn=m.b.div(mn()),dn=m.b.div(sn()),gn=m.b.div(un()),bn=Object(m.b)(l.b)(on());var pn=en((function(n){return function(e){var t=Object(o.g)().state,r=t.score,i=t.correctAnswers,c=t.timeRemaining,l=Math.round(Number(r)+Number(c)*(i/z));return a.a.createElement(n,Object.assign({},e,{totalScore:l,timeRemaining:c,correctAnswers:i,maximumNumberOfCards:z}))}}))((function(n){var e=n.totalScore,t=n.timeRemaining,r=n.correctAnswers,i=n.maximumNumberOfCards;return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{title:"Results"}),a.a.createElement(fn,null,a.a.createElement("h1",null,"Congratulations!"),a.a.createElement("h2",null,"You got ",r," out of ",i," heroes right."),a.a.createElement(dn,null,a.a.createElement(gn,null,a.a.createElement(u.b,{size:32}),a.a.createElement("div",null,a.a.createElement("span",null,e),a.a.createElement("strong",null,"Points"))),a.a.createElement(gn,null,a.a.createElement(u.a,{size:32}),a.a.createElement("div",null,a.a.createElement("span",null,t," ",a.a.createElement("strong",null,"s")),a.a.createElement("strong",null,"Remaining")))),a.a.createElement(bn,{to:"game"},a.a.createElement(u.d,{size:20}),"Restart Game!")))}));var xn=function(){return a.a.createElement(l.a,{basename:"/master-heroes"},a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"/",exact:!0,component:I}),a.a.createElement(o.a,{path:"/game",component:ln}),a.a.createElement(o.a,{path:"/results",component:pn})))};function hn(){var n=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    width: 100%;\n    height: 100%;\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    color: #fff;\n  }\n\n  #root {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    background: rgba(9,12,47,1);\n    background: linear-gradient(135deg, rgba(9,12,47,1) 0%, rgba(3,54,54,1) 100%);\n  }\n"]);return hn=function(){return n},n}var vn=Object(m.a)(hn());var En=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(vn,null),a.a.createElement(xn,null))};c.a.render(a.a.createElement(En,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8e757f3d.chunk.js.map