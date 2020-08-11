(this["webpackJsonptransformation-company"]=this["webpackJsonptransformation-company"]||[]).push([[0],{13:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),s=(t(18),t(19),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h1",null,"Transformers: War of Cybertron"))))))}),i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",null,"Instructions"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null,"The Transformers are at war and you are in charge of settling the score! The power is in your hand to decide the future of Cybertron."),l.a.createElement("ul",null,l.a.createElement("li",null,"1) Add the name of your transformer and choose your team."),l.a.createElement("li",null,"2) Add your Transformer's skill points. The points range from 1 to 10."),l.a.createElement("li",null,"3) Click the add fighter button. You can add as many fighters as you want."),l.a.createElement("li",null,'4) Click on the "Fight" button and watch the result of that battle.'))))))},o=t(1),m=t(8),u=t(9),p=t(12),d=t(11),h=t(10),E=t(5),b=t(2),g=l.a.createContext(),v=function(e,a){switch(a.type){case"SHOWTABLE":return Object(b.a)(Object(b.a)({},e),{},{showTableFight:[a.payload]});case"ADD":return Object(b.a)(Object(b.a)({},e),{},{fighters:[a.payload].concat(Object(E.a)(e.fighters))});case"SHOWRESULT":return Object(b.a)(Object(b.a)({},e),{},{showResultBattle:[a.payload]});case"FIGHT":var t,n=[],l=[],r=Object(h.a)(a.payload);try{for(r.s();!(t=r.n()).done;){var c=t.value;"Autobots"==c.team?n.push(c):l.push(c)}}catch(s){r.e(s)}finally{r.f()}return Object(b.a)(Object(b.a)({},e),{},{autobotsTeam:[].concat(n),decepticonsTeam:[].concat(l)});default:return e}},f=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={fighters:[],autobotsTeam:[],decepticonsTeam:[],showTableFight:!1,showResultBattle:!1,dispatch:function(a){e.setState((function(e){return v(e,a)}))}},e}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(l.a.Component),N=g.Consumer,O=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),d=p[0],h=p[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),g=b[0],v=b[1],f=Object(n.useState)(""),O=Object(o.a)(f,2),y=O[0],w=O[1],j=Object(n.useState)(""),k=Object(o.a)(j,2),S=k[0],I=k[1],T=Object(n.useState)(""),C=Object(o.a)(T,2),A=C[0],F=C[1],R=Object(n.useState)(""),x=Object(o.a)(R,2),L=x[0],q=x[1],B=Object(n.useState)(""),D=Object(o.a)(B,2),W=D[0],H=D[1],M=Object(n.useState)(""),G=Object(o.a)(M,2),J=G[0],P=G[1],U=Object(n.useState)(!1),K=Object(o.a)(U,2),V=K[0],Y=K[1],$=function(e){switch(e.target.name){case"name":r(e.target.value);break;case"team":m(e.target.value);break;case"strength":h(e.target.value);break;case"endurance":v(e.target.value);break;case"firepower":w(e.target.value);break;case"intelligence":I(e.target.value);break;case"rank":F(e.target.value);break;case"skill":q(e.target.value);break;case"speed":H(e.target.value);break;case"courage":P(e.target.value)}},z=function(e,a){a.preventDefault(),e({type:"ADD",payload:{name:t,team:i,abilities:{strength:d,endurance:g,firepower:y,intelligence:S,rank:A,skill:L,speed:W,courage:J,overall:parseInt(d)+parseInt(d)+parseInt(S)+parseInt(W)+parseInt(g)+parseInt(y)}}}),r(""),h(" "),v(" "),w(" "),I(" "),q(" "),H(" "),F(" "),P(" "),m(null)};return l.a.createElement(N,null,(function(e){var a=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",null,"Add your Fighter"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("form",{onSubmit:z.bind(void 0,a)},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name of your Transformers",name:"name",value:t,onChange:$,required:!0})),l.a.createElement("div",{className:"col"},l.a.createElement("select",{className:"custom-select",name:"team",onChange:$,required:!0},l.a.createElement("option",{selected:!0,disabled:!0},"Choose your Team"),l.a.createElement("option",{value:"Autobots"},"Autobots"),l.a.createElement("option",{value:"Decepticons"},"Decepticons"))),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Abilities")),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"strength",placeholder:"Strength",onChange:$,required:!0,value:d})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"endurance",placeholder:"Endurance",onChange:$,value:g,required:!0})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"firepower",placeholder:"Firepower",onChange:$,value:y,required:!0})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"intelligence",placeholder:"Intelligence",onChange:$,value:S,required:!0})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"rank",placeholder:"Rank",value:A,onChange:$,required:!0})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"skill",placeholder:"Skill",value:L,onChange:$,required:!0})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"speed",placeholder:"Speed",onChange:$,value:W,required:!0})),l.a.createElement("div",{className:"col-3"},l.a.createElement("input",{type:"number",className:"form-control",min:"1",max:"10",name:"courage",placeholder:"Courage",onChange:$,value:J,required:!0})),l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{type:"submit",onClick:function(){!function(e){Y(!0),e({type:"SHOWTABLE",payload:V})}(a)},className:"btn btn-primary"},"Add fighter"))))))))}))},y=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement(N,null,(function(e){var a=e.fighters,n=e.showTableFight,c=e.dispatch;return a.reverse(),l.a.createElement(l.a.Fragment,null,n?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"List of fighters")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Fighter"),l.a.createElement("th",{scope:"col"},"Team"),l.a.createElement("th",{scope:"col"},"Strength"),l.a.createElement("th",{scope:"col"},"Endurance"),l.a.createElement("th",{scope:"col"},"Firepower"),l.a.createElement("th",{scope:"col"},"Intelligence"),l.a.createElement("th",{scope:"col"},"Rank"),l.a.createElement("th",{scope:"col"},"Skill"),l.a.createElement("th",{scope:"col"},"Speed"),l.a.createElement("th",{scope:"col"},"Courage"),l.a.createElement("th",{scope:"col"},"Overall Rating"))),l.a.createElement("tbody",null,Object.values(a).map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.team),l.a.createElement("td",null,e.abilities.strength),l.a.createElement("td",null,e.abilities.endurance),l.a.createElement("td",null,e.abilities.firepower),l.a.createElement("td",null,e.abilities.intelligence),l.a.createElement("td",null,e.abilities.rank),l.a.createElement("td",null,e.abilities.skill),l.a.createElement("td",null,e.abilities.speed),l.a.createElement("td",null,e.abilities.courage),l.a.createElement("td",null,e.abilities.overall))})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"submit",className:"btn btn-danger",onClick:function(){!function(e,a){e({type:"FIGHT",payload:a})}(c,a),function(e){r(!0),e({type:"SHOWRESULT",payload:t})}(c)}},"Fighter")))):" ")}))},w=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(!1),p=Object(o.a)(u,2),d=p[0],h=p[1],b=Object(n.useState)(!1),g=Object(o.a)(b,2),v=g[0],f=g[1],O=[],y=[];return l.a.createElement(N,null,(function(e){var a=e.showResultBattle;return function(e,a){for(var t,n=[],l=n[0]=Object(E.a)(e),c=n[1]=Object(E.a)(a),s=0,i=[],o=0,u=0,p=0,b=0,g=0,v=l.reduce((function(e,a){return"optimus prime"==a.name?e+1:e}),0),N=c.reduce((function(e,a){return"predaking"==a.name?e+1:e}),0),w=0;w<2;w++)n[w]=[];for(var j=0;j<n.length;j++)if(l.length>c.length){s=l.length-c.length;for(var k=0;k<s;k++)t=l.pop(),y.push(t)}else{s=c.length-l.length;for(var S=0;S<s;S++)t=c.pop(),y.push(t)}for(var I=0;I<l.length;I++)l[I].team>c[I].team?b++:g++;for(var T=0;T<l.length;T++)"optimus prime"===l[T].name.toLowerCase()&&"predaking"===c[T].name.toLowerCase()||v>1||N>1?(h(!0),p++,r(p)):b>=3?(O.push(l[T].name),i.push(c[T].name),o++,p++,r(p)):g>=3?(O.push(c[T].name),i.push(l[T].name),u++,p++,r(p)):"optimus prime"===l[T].name.toLowerCase()&&"predaking"!==c[T].name.toLowerCase()?(O.push(l[T].name),i.push(c[T].name),o++,p++,r(p)):"predaking"===c[T].name.toLowerCase()&&"optimus prime"!==l[T].name.toLowerCase()?(O.push(c[T].name),i.push(l[T].name),u++,p++,r(p)):parseInt(l[T].abilities.courage)>parseInt(c[T].abilities.courage)&&parseInt(l[T].abilities.courage)-parseInt(c[T].abilities.courage)>=4||parseInt(c[T].abilities.courage)>parseInt(l[T].abilities.courage)&&parseInt(c[T].abilities.courage)-parseInt(l[T].abilities.courage)>=4||parseInt(l[T].abilities.strength)>parseInt(c[T].abilities.strength)&&parseInt(l[T].abilities.strength)-parseInt(c[T].abilities.strength)>=4||parseInt(c[T].abilities.strength)>parseInt(l[T].abilities.strength)&&parseInt(c[T].abilities.strength)-parseInt(l[T].abilities.strength)>=4?(O.push(l[T].name),i.push(c[T].name),o++,p++,r(p)):parseInt(l[T].abilities.overall===c[T].abilities.overall)?(o=o,u=u,p++,r(p)):l[T].abilities.overall>c[T].abilities.overall?(O.push(l[T].name),i.push(c[T].name),o++,p++,r(p)):(O.push(c[T].name),i.push(l[T].name),u++,p++,r(p));1==d?m("All fighters were destroyed"):o>u?(y.some((function(e){return"Decepticons"==e.team}))&&f(!0),m("The winning team is AutoBolt")):0==o&&0==u?m("The fight ended without winners"):(y.some((function(e){return"Autobots"==e.team}))&&f(!0),m("The winning team is Decepticon"))}(e.autobotsTeam,e.decepticonsTeam),l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",null,"Battle Result"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"stage"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,t)," Battles"),l.a.createElement("li",null,i),0==d?l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",null,"The Winning Fighters are:"),O.map((function(e,a){return l.a.createElement("li",{key:a},e)})))):" ",1==v?l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",null,"The surviving fighters are:"),y.map((function(e,a){return l.a.createElement("li",{key:a},e.name)})))):" "))))):" ")}))},j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("p",null,"SOMETIMES EVEN THE WISEST OF MAN OR MACHINE CAN MAKE AN ERROR. - Optimus Prime"))))))},k=(t(20),function(){return l.a.createElement(f,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(i,null),l.a.createElement(O,null),l.a.createElement(y,null),l.a.createElement(w,null),l.a.createElement(j,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.0c89aa52.chunk.js.map