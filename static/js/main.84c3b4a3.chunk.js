(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{51:function(e,t,a){e.exports=a(71)},56:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(56),a(8)),s=a.n(o),u=a(13),i=a(4),m=a(40),p=a.n(m),d=a(9),f=a(7),g="https://ingame-item-topup-api.herokuapp.com/api",E=(a(61),a(62),a(63),a(64),a(76)),b=a(79),h=a(77),v=a(80),O=a(78);function j(e){var t=e.loggedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"text-center bg-dark jumbotron-fluid mb-0 "},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-white"},"Free Fire Diamond Topup"),r.a.createElement("p",{className:"text-white"},"Resize this responsive page to see the effect!"))),r.a.createElement(b.a,{bg:"dark",text:"white",navbar:"dark",expand:"lg",className:"navbar-dark"},r.a.createElement(h.a,null,r.a.createElement(b.a.Brand,{href:"/"},"Msk Topup"),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(d.b,{to:"/"},r.a.createElement(v.a.Link,{href:"/"},"Home")),!t||r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/orderhistory"},r.a.createElement(v.a.Link,{href:"/orderhistory"},"Order History ")),r.a.createElement(d.b,{to:"/changepassword"},r.a.createElement(v.a.Link,{href:"/changepassword"},"Change Password")," "),r.a.createElement(d.b,{to:"/logout"},r.a.createElement(v.a.Link,{href:"/Logout"},"Logout"))),t||r.a.createElement(O.a,{title:"User",bg:"dark",id:"basic-nav-dropdown",className:"bg-dark"},r.a.createElement(O.a.Item,{bg:"dark",href:"/register"},r.a.createElement(d.b,{to:"/register"},"Register ")),r.a.createElement(d.b,{to:"/login"},r.a.createElement(O.a.Item,{href:"/login"},"Login"))))))))}function y(e){var t=e.name,a=e._id;return r.a.createElement("div",{className:"card",style:{width:"250px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},t),r.a.createElement(d.b,{to:"/game/"+a,className:"btn btn-primary"},"See Packages")))}var w=function(e){var t=e.games;e.setGames;return t?(console.log("games are",t),r.a.createElement("div",{className:"container card-columns"},t.map((function(e,t){return r.a.createElement(y,{key:e._id,_id:e._id,name:e.name})})))):r.a.createElement("h1",null,"loading")},k=function(e){var t=e.games,a=e.setGames;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{games:t,setGames:a}))};function S(){var e={};if(e.id=localStorage.getItem("id"),e.key=localStorage.getItem("key"),e.id&&e.key){var t=new Headers;for(var a in e)t.append(a,e[a]);return t.append("Content-Type","application/json"),t}}function x(e){localStorage.setItem("id",e.id),localStorage.setItem("key",e.key)}var N=function(e){e.setUser;var t=e.setLoggedIn,a=e.loggedIn,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],m=l[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),E=d[0],b=d[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),O=v[0],j=v[1],y=Object(n.useState)(""),w=Object(i.a)(y,2),k=w[0],S=w[1],N=Object(n.useState)(""),I=Object(i.a)(N,2),C=I[0],P=I[1],T=Object(n.useState)(""),F=Object(i.a)(T,2),L=F[0],D=F[1],q=Object(n.useState)(!1),_=Object(i.a)(q,2),G=_[0],R=_[1],U=Object(n.useState)(""),J=Object(i.a)(U,2),A=J[0],B=J[1];function H(){return(H=Object(u.a)(s.a.mark((function e(a){var n,r,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in n="".concat(g,"/auth/register"),r=new FormData,a)r.append(c,a[c]);return console.log("the fucking body is: ",JSON.stringify(a)),e.next=6,fetch(n,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});case 6:return l=e.sent,console.log("server responded:",l),e.next=10,l.json();case 10:(o=e.sent).err?(B(o.err),R(!1)):(t(!0),x(o));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(G){console.log("buttonis clicked");var e={};e.username=o,e.email=O,e.password=k,e.phone=L,e.fullName=E,function(e){H.apply(this,arguments)}(e)}}),[G]),a?r.a.createElement(f.a,{to:"/"}):r.a.createElement("form",{className:"container mt-50",style:{marginTop:"50px"}},""===A||r.a.createElement("div",{class:"alert alert-danger"},r.a.createElement("strong",null,"Error!")," ",A),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"usr"},"Username:"),r.a.createElement("input",{type:"text",class:"form-control",id:"usr",required:!0,value:o,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"usr"},"Full Name:"),r.a.createElement("input",{type:"text",class:"form-control",id:"usr",required:!0,value:E,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"usr"},"Email:"),r.a.createElement("input",{type:"email",class:"form-control",id:"usr",required:!0,value:O,onChange:function(e){j(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"usr"},"Phone Number:"),r.a.createElement("input",{type:"text",class:"form-control",id:"usr",required:!0,value:L,onChange:function(e){D(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"pwd"},"Password:"),r.a.createElement("input",{type:"password",class:"form-control",id:"pwd",required:!0,value:k,onChange:function(e){S(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"pwd"},"Confirm Password:"),r.a.createElement("input",{type:"password",class:"form-control",id:"pwd",required:!0,value:C,onChange:function(e){P(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Sign UP",class:"btn btn-primary",onClick:function(e){e.preventDefault(),R(!0)}})))},I=function(e){var t=e.match,a=e.loggedIn,c=e.games,l={};c.forEach((function(e){e._id===t.params.id&&(l=e)}));var o=Object(n.useState)([]),m=Object(i.a)(o,2),p=m[0],d=m[1],E=Object(n.useState)(""),b=Object(i.a)(E,2),h=b[0],v=b[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),y=j[0],w=j[1],k=Object(n.useState)(""),x=Object(i.a)(k,2),N=x[0],I=x[1],C=Object(n.useState)(""),P=Object(i.a)(C,2),T=P[0],F=P[1],L=Object(n.useState)("Facebook"),D=Object(i.a)(L,2),q=D[0],_=D[1],G=Object(n.useState)(""),R=Object(i.a)(G,2),U=R[0],J=R[1],A=Object(n.useState)(!1),B=Object(i.a)(A,2),H=B[0],W=B[1],M=Object(n.useState)(!1),z=Object(i.a)(M,2),$=z[0],K=z[1],Q=Object(n.useState)(!1),V=Object(i.a)(Q,2),X=V[0],Y=V[1],Z=Object(n.useState)(""),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1];function ne(){return(ne=Object(u.a)(s.a.mark((function e(t){var n,r,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:for(c in e.prev=2,n="".concat(g,"/order/place"),r=new FormData,t)r.append(c,t[c]);return e.next=8,fetch(n,{headers:S(),method:"POST",body:JSON.stringify(t)});case 8:return l=e.sent,e.next=11,l.json();case 11:if(!(o=e.sent).err){e.next=16;break}return ae(o.err),W(!1),e.abrupt("return");case 16:K(!0),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}function re(){return(re=Object(u.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(g,"/get/packages?game=").concat(t.params.id),e.next=4,fetch(a,{method:"GET"});case 4:return n=e.sent,e.next=7,n.json();case 7:return 0===(r=e.sent).length&&Y(!0),d(r),e.abrupt("return");case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}if(Object(n.useEffect)((function(){console.log("effect has run"),function(){re.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){if(H){var e={};"promo"!==l.type&&(e.accountPlatform=q,e.emailOrNumber=y,e.password=N),"promo"===l.type&&(e.playerId=h),e.bkashNumber=T,e.package=U,function(e){ne.apply(this,arguments)}(e)}}),[H]),X)return r.a.createElement("h1",null,"This page is not available yet");if(H){if(!a)return r.a.createElement(f.a,{to:"/login"});if($){if(""===te)return r.a.createElement(f.a,{to:"/orderhistory"});K(!1),W(!1)}}return 0===p.length?r.a.createElement("h1",null,"Loading"):p?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"}),r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row",style:{marginTop:"15px"}},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("p",null,"Warning \u2013 READ THE DESCRIPTION BEFORE ORDER \u2013 \u09ad\u09c1\u09b2 \u09a8\u09be\u09ae\u09cd\u09ac\u09be\u09b0/\u09aa\u09be\u09b8\u0993\u09df\u09be\u09b0\u09cd\u09a1 \u09a6\u09bf\u09df\u09c7 \u0985\u09a5\u09ac\u09be \u098f\u0995\u09be\u0989\u09a8\u09cd\u099f \u098f \u09e8 \u09b8\u09cd\u099f\u09c7\u09aa \u09a6\u09bf\u09df\u09c7 \u09b0\u09be\u0996\u09b2\u09c7 \u0986\u09aa\u09a8\u09be\u09b0 \u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u0995\u09ae\u09aa\u09cd\u09b2\u09bf\u099f \u09b9\u09a4\u09c7 \u09b2\u09c7\u0987\u099f \u09b9\u09ac\u09c7 ! \u09af\u09be\u09b0\u09be \u0985\u09a8\u09cd\u09af\u09a6\u09c7\u09b0 \u099f\u09aa\u0986\u09aa/\u098f\u09df\u09be\u09b0\u09a1\u09cd\u09b0\u09aa \u0995\u09bf\u09a8\u09c7 \u09a6\u09bf\u099a\u09cd\u099b\u09c7\u09a8 \u09a4\u09be\u09b0\u09be \u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u0995\u09b0\u09be\u09b0 \u0986\u0997\u09c7 \u09a8\u09bf\u099c\u09c7 \u09b2\u0997 \u0987\u09a8 \u0995\u09b0\u09c7 \u099a\u09cd\u09af\u09be\u0995 \u0995\u09b0\u09c1\u09a8\u0964 \u09a8\u09a4\u09c1\u09ac\u09be \u0985\u09a8\u09c1\u0997\u09cd\u09b0\u09b9 \u0995\u09b0\u09c7 \u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u0995\u09b0\u09ac\u09c7\u09a8 \u09a8\u09be\u0964 \u098f\u09df\u09be\u09b0\u09a1\u09cd\u09b0\u09aa \u098f\u09b0 \u09b8\u09ae\u09df \u09ae\u09bf\u09a8\u09bf\u09ae\u09be\u09ae \u09e7 \u0998\u09a8\u09cd\u099f\u09be \u09a5\u09be\u0995\u09a4\u09c7 \u09b9\u09ac\u09c7\u0964")),r.a.createElement("div",{className:"col"},""===te||r.a.createElement("div",{class:"alert alert-danger"},r.a.createElement("strong",null,"Error!")," ",te),r.a.createElement("form",{action:"/action_page.php",className:""},"promo"===l.type?r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Player Id:"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Player Id",id:"email",value:h,onChange:function(e){return v(e.target.value)}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"sel1"},"Account Type:"),r.a.createElement("select",{class:"form-control",id:"sel1",onChange:function(e){_(e.target.value)}},r.a.createElement("option",null,"Facebook"),r.a.createElement("option",null,"Gmail"))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Email or Phone:"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter email",id:"email",value:y,onChange:function(e){return w(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"pwd"},"Password:"),r.a.createElement("input",{type:"password",class:"form-control",placeholder:"Enter password",id:"pwd",value:N,onChange:function(e){return I(e.target.value)}}))),r.a.createElement("div",{className:"row"},p.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col"},r.a.createElement("div",{class:"custom-radio custom-control"},r.a.createElement("input",{className:"custom-control-input",type:"radio",name:"optradio",id:e._id,selectedPackage:e._id,onChange:function(e){J(e.target.getAttribute("selectedPackage"))}}),r.a.createElement("label",{class:"custom-control-label",for:e._id},e.name," for BDT ",e.price))))}))),r.a.createElement("br",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Bkash Number:"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Number",id:"email",value:T,onChange:function(e){return F(e.target.value)}})),r.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(e){e.preventDefault(),W(!0)}},"Next")))))):r.a.createElement("h1",null,"loading")},C=function(e){e.setUser;var t=e.setLoggedIn,a=e.loggedIn,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],m=l[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),b=E[0],h=E[1],v=Object(n.useState)(!1),O=Object(i.a)(v,2),j=O[0],y=O[1],w=Object(n.useState)(""),k=Object(i.a)(w,2),S=k[0],N=k[1];function I(){return(I=Object(u.a)(s.a.mark((function e(a){var n,r,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in n="".concat(g,"/auth/login"),r=new FormData,a)r.append(c,a[c]);return e.next=5,fetch(n,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a)});case 5:return l=e.sent,console.log("the header is :",l.headers),e.next=9,l.json();case 9:x(o=e.sent),o.err?(N(o.err),y(!1)):t(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(j){console.log("buttonis clicked");var e={};e.username=o,e.password=b,function(e){I.apply(this,arguments)}(e)}}),[j]),a?r.a.createElement(f.a,{to:"/"}):r.a.createElement("form",{className:"container mt-50",style:{marginTop:"50px"}},""===S||r.a.createElement("div",{class:"alert alert-danger"},r.a.createElement("strong",null,"Error!")," ",S),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"usr"},"Username:"),r.a.createElement("input",{type:"text",class:"form-control",id:"usr",required:!0,value:o,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"pwd"},"Password:"),r.a.createElement("input",{type:"password",class:"form-control",id:"pwd",required:!0,value:b,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Login",class:"btn btn-primary",onClick:function(e){e.preventDefault(),y(!0)}})),r.a.createElement("br",null),r.a.createElement("p",null,"Dont Have an account?"),r.a.createElement("div",null,r.a.createElement(d.b,{to:"/register",className:"btn btn-primary"},"Register")))},P=function(e){var t=e.setLoggedIn;localStorage.clear();var a="".concat(g,"/auth/logout");return fetch(a,{headers:S(),type:"GET"}),t(!1),r.a.createElement(f.a,{to:"/"})},T=a(81);function F(e){for(var t=e.match,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=c[0],o=c[1],m=Number(t.params.page),p=[],d=1;d<=5;d++)p.push(r.a.createElement(T.a.Item,{href:"/orderhistory/"+d,key:d,active:d===m},d));function f(){return(f=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(g,"/user/getorderhistory?page=").concat(t,"&&limit=10"),e.next=4,fetch(a,{headers:S()});case 4:return n=e.sent,e.t0=o,e.next=8,n.json();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=15;break;case 12:e.prev=12,e.t2=e.catch(0),console.log(e.t2);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){f.apply(this,arguments)}(m)}),[]),Object(n.useEffect)((function(){console.log("the orders are :",l)}),[l]),0===l.length?r.a.createElement("p",null,"Loading"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"table-responsive"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Item"),r.a.createElement("th",{scope:"col"},"Ammount"),r.a.createElement("th",{scope:"col"},"Status"))),r.a.createElement("tbody",null,l.values.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e._id),r.a.createElement("td",null,e.package?e.package.name:"Deleted"),r.a.createElement("td",null,e.package?e.package.price:"Deleted"),r.a.createElement("td",null,e.status)))})))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(T.a,null,p))))}function L(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),m=o[0],p=o[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),E=f[0],b=f[1],h=Object(n.useState)(""),v=Object(i.a)(h,2),O=v[0],j=v[1];function y(){return(y=Object(u.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g,"/auth/changepassword"),e.next=3,fetch(a,{headers:S(),method:"PATCH",body:JSON.stringify(t)});case 3:return n=e.sent,console.log("the header is :",n.headers),e.next=7,n.json();case 7:if(r=e.sent,console.log("the effing resbody is",r),!r.err){e.next=14;break}j(r.err),b(!1),e.next=16;break;case 14:return localStorage.clear(),e.abrupt("return");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(E){console.log("buttonis clicked");var e={};e.oldPassword=a,e.newPassword=m,function(e){y.apply(this,arguments)}(e)}}),[E]),r.a.createElement("form",{className:"container mt-50",style:{marginTop:"50px"}},""===O||r.a.createElement("div",{class:"alert alert-danger"},r.a.createElement("strong",null,"Error!")," ",O),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"usr"},"Old Password:"),r.a.createElement("input",{type:"password",class:"form-control",id:"usr",required:!0,value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"pwd"},"New Password:"),r.a.createElement("input",{type:"password",class:"form-control",id:"pwd",required:!0,value:m,onChange:function(e){p(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Apply",class:"btn btn-primary",onClick:function(e){e.preventDefault(),b(!0)}})))}var D=!1;S()&&(D=!0);var q=function(){var e=Object(n.useState)(D),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(i.a)(l,2),m=(o[0],o[1]),E=Object(n.useState)([]),b=Object(i.a)(E,2),h=b[0],v=b[1];function O(){return(O=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(g,"/get/games"),e.next=4,fetch(t,{method:"GET"});case 4:return a=e.sent,e.t0=v,e.next=8,a.json();case 8:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return");case 13:e.prev=13,e.t2=e.catch(0),console.log(e.t2);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(j,{loggedIn:a}),r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:function(e){return r.a.createElement(k,Object.assign({},e,{games:h,setGames:v}))}}),r.a.createElement(f.b,{path:"/register",component:function(){return r.a.createElement(N,{setLoggedIn:c,loggedIn:a,setUser:m})}}),r.a.createElement(f.b,{path:"/login",component:function(){return r.a.createElement(C,{setLoggedIn:c,loggedIn:a,setUser:m})}}),r.a.createElement(f.b,{path:"/game/:id",component:function(e){return r.a.createElement(I,Object.assign({},e,{loggedIn:a,games:h}))}}),r.a.createElement(f.b,{path:"/logout",component:function(){return r.a.createElement(P,{setLoggedIn:c})}}),r.a.createElement(f.b,{path:"/orderhistory",exact:!0,component:function(e){return r.a.createElement(f.a,{to:"/orderhistory/1"})}}),r.a.createElement(f.b,{path:"/orderhistory/:page",isExact:!1,component:function(e){return r.a.createElement(F,Object.assign({},e,{setLoggedIn:c}))}}),r.a.createElement(f.b,{path:"/changepassword",component:L}))),r.a.createElement(p.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.84c3b4a3.chunk.js.map