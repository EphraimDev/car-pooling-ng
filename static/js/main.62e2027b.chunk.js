(window["webpackJsonpcar-pooling-ng"]=window["webpackJsonpcar-pooling-ng"]||[]).push([[0],{43:function(e,t,n){e.exports=n(75)},48:function(e,t,n){},49:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),l=(n(48),n(49),n(11)),i=n(10),s=n(13),u=n(9),m=n(38),p=n(39),f=n(12);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={token:null,isAuthenticated:null,loading:!0,user:null},E=n(42),O=Object(u.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",a),b({},e,{token:a,isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"LOGIN_FAIL":return localStorage.removeItem("token"),b({},e,{token:null,isAuthenticated:!1,loading:!1});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ALERT":return[].concat(Object(E.a)(e),[a]);case"REMOVE_ALERT":return e.filter(function(e){return e.id!==a});default:return e}}}),v=Object(u.createStore)(O,Object(m.composeWithDevTools)(Object(u.applyMiddleware)(p.a))),y=function(){return r.a.createElement("div",null,"HomePage")},h=n(14),w=n(16),j=n.n(w),S=n(21),N=n(22),P=n.n(N),k="https://car-pooling-ng.herokuapp.com/api/v1",_=n(40),A=n.n(_),C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(a){var r=A.a.v4();a({type:"SET_ALERT",payload:{msg:e,alertType:t,id:r}}),setTimeout(function(){return a({type:"REMOVE_ALERT",payload:r})},n)}};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var D=Object(l.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{login:function(e,t){return function(){var n=Object(S.a)(j.a.mark(function n(a){var r,c,o;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=JSON.stringify({email:e,password:t}),c={headers:{"Content-Type":"application/json"}},n.next=5,P.a.post(k+"/auth/signin",r,c);case 5:o=n.sent,a({type:"LOGIN_SUCCESS",payload:o.data.data.token}),a(C("Login was successful","success")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),a({type:"LOGIN_FAIL",payload:n.t0}),a(C("Login error","danger"));case 14:case"end":return n.stop()}},n,null,[[0,10]])}));return function(e){return n.apply(this,arguments)}}()}})(function(e){var t=e.login,n=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),o=Object(h.a)(c,2),l=o[0],i=o[1],u=l.email,m=l.password,p=function(e){i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},l,Object(f.a)({},e.target.name,e.target.value)))};return n?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u,m)}},r.a.createElement("input",{onChange:function(e){return p(e)},value:u,className:"form-control no-border mt-3",type:"text",name:"email",placeholder:"Email"}),r.a.createElement("input",{onChange:function(e){return p(e)},value:m,className:"form-control no-border mt-3",type:"password",name:"password",placeholder:"Password"}),r.a.createElement("input",{className:"btn btn-primary mt-3",type:"submit",name:"submit"})))});function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var T=Object(l.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{register:function(e,t,n,a){return function(){var r=Object(S.a)(j.a.mark(function r(c){var o,l,i;return j.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=JSON.stringify({first_name:e,last_name:t,email:n,password:a}),l={headers:{"Content-Type":"application/json"}},r.next=5,P.a.post(k+"/auth/signup",o,l);case 5:i=r.sent,c({type:"REGISTER_SUCCESS",payload:i.data.data.token}),c(C("Registration was successful","success")),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),c({type:"REGISTER_FAIL",payload:r.t0}),c(C("Registration error","danger"));case 14:case"end":return r.stop()}},r,null,[[0,10]])}));return function(e){return r.apply(this,arguments)}}()}})(function(e){var t=e.register,n=e.isAuthenticated,c=Object(a.useState)({first_name:"",last_name:"",email:"",password:""}),o=Object(h.a)(c,2),l=o[0],i=o[1],u=l.first_name,m=l.last_name,p=l.email,d=l.password,b=function(e){i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},l,Object(f.a)({},e.target.name,e.target.value)))};return n?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",{className:"container"}," ",r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u,m,p,d)}},r.a.createElement("input",{onChange:function(e){return b(e)},className:"form-control no-border mt-3",type:"text",name:"first_name",value:u,placeholder:"First Name"}),r.a.createElement("input",{onChange:function(e){return b(e)},className:"form-control no-border mt-3",type:"text",name:"last_name",value:m,placeholder:"Last Name"}),r.a.createElement("input",{onChange:function(e){return b(e)},className:"form-control no-border mt-3",type:"text",name:"email",value:p,placeholder:"Email"}),r.a.createElement("input",{onChange:function(e){return b(e)},className:"form-control no-border mt-3",type:"password",name:"password",value:d,placeholder:"Password"}),r.a.createElement("input",{className:"btn btn-primary mt-3",type:"submit",name:"submit",id:""})))}),L=function(){var e=Object(a.useState)("signin"),t=Object(h.a)(e,2),n=t[0],c=t[1];return r.a.createElement("section",null,r.a.createElement("div",{id:"cnt",className:"row"},r.a.createElement("div",{id:"img",className:"col"}),r.a.createElement("div",{id:"signin",className:"col "},r.a.createElement(i.b,{to:"/"},"Go back"),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"buttn btn btn-lg",onClick:function(){c("signin")}},"Signin")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{className:"buttn btn btn-lg",onClick:function(){c("signup")}},"Signup"))),r.a.createElement("div",{className:""}," ","signin"===n?r.a.createElement(a.Fragment,null,r.a.createElement(D,null),r.a.createElement("br",null),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:"#"},"Register"))):r.a.createElement(a.Fragment,null,r.a.createElement(T,null),r.a.createElement("br",null),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(i.b,{to:"#"},"Sign In")))))))},x=Object(l.b)(function(e){return{alerts:e.alert}})(function(e){var t=e.alerts;return r.a.createElement("div",{className:"container"},null!==t&&t.length>0&&t.map(function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))});var G=function(){return r.a.createElement(l.a,{store:v},r.a.createElement(i.a,{basename:"/"},r.a.createElement(x,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:y}),r.a.createElement(s.b,{exact:!0,path:"/signin_up",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.62e2027b.chunk.js.map