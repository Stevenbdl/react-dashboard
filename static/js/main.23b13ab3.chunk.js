(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(1),n=t.n(c),r=t(56),i=t.n(r),l=(t(63),t(4)),o=t(5),d=t(7),b=t(6),j=t(14),h=t(2),u=(t(64),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={closePanel:null},e.togglePanel=function(a){var t=document.getElementById("panel-notifi");"none"===t.style.display||""===t.style.display?(t.classList.remove("animate__bounceOut"),t.classList.add("animate__bounceIn"),t.style.display="block",e.setState({closePanel:!0})):(t.classList.remove("animate__bounceIn"),t.classList.add("animate__bounceOut"),setTimeout((function(){t.style.display="none"}),1e3))},e.clickOutSideButton=function(e){},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.clickOutSideButton)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("button",{id:"notifiToggle",type:"button",onClick:this.togglePanel,children:Object(s.jsx)("i",{className:"fas fa-bell",children:Object(s.jsx)("span",{className:"badge badge-danger",children:"3"})})}),Object(s.jsxs)("ul",{id:"panel-notifi",className:"panel-notifications animate__animated",children:[Object(s.jsx)("h1",{className:"title-notifi",children:"Notifications"}),Object(s.jsx)("li",{children:"Notification #1"}),Object(s.jsx)("li",{children:"Notification #2"}),Object(s.jsx)("li",{children:"Notification #3"})]})]})}}]),t}(c.Component)),m=(t(65),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).togglePanelMsg=function(e){var a=document.getElementById("panel-msg");"none"===a.style.display||""===a.style.display?(a.classList.remove("animate__bounceOut"),a.classList.add("animate__bounceIn"),a.style.display="block"):(a.classList.remove("animate__bounceIn"),a.classList.add("animate__bounceOut"),setTimeout((function(){a.style.display="none"}),1e3))},e.clickOutSideButton=function(e){},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.clickOutSideButton)}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("button",{id:"msgButton",type:"button",onClick:this.togglePanelMsg,children:Object(s.jsx)("i",{className:"fas fa-envelope",children:Object(s.jsx)("span",{className:"badge badge-danger",children:"3"})})}),Object(s.jsxs)("ul",{id:"panel-msg",className:"panel-messages animate__animated",children:[Object(s.jsx)("h1",{className:"title-msg",children:"Messages"}),Object(s.jsx)("li",{children:"Message #1"}),Object(s.jsx)("li",{children:"Message #2"}),Object(s.jsx)("li",{children:"Message #3"})]})]})}}]),t}(c.Component)),O=(t(66),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)("nav",{id:"navbar",className:"navbar shadow mb-5 bg-white rounded navbar-light bg-light p-4",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("form",{className:"form-inline",children:[Object(s.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search...","aria-label":"Search",style:{border:"none",background:"#011b33",color:"white"}}),Object(s.jsx)("button",{className:"btn btn-primary my-sm-0",type:"button",children:"Search"})]}),Object(s.jsxs)("div",{className:"notifications",children:[Object(s.jsx)(u,{}),Object(s.jsx)(m,{})]})]})})}}]),t}(c.Component)),g=(t(67),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={toggle:!0},e.toggleSideBar=function(a){var t=document.getElementById("side-bar"),s=document.getElementById("toggleSideBarBtn"),c=document.getElementById("navbar"),n=document.getElementById("app-content");!0===e.state.toggle?(t.style.width=0,s.style.marginLeft=0,c.style.marginLeft=0,n.style.marginLeft=0):(t.style.width="240px",s.style.marginLeft="240px",c.style.marginLeft="240px",n.style.marginLeft="255px"),e.setState({toggle:!e.state.toggle})},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("button",{id:"toggleSideBarBtn",type:"button",className:"toggle-side-bar",onClick:this.toggleSideBar,children:Object(s.jsx)("i",{className:"fas fa-chevron-right"})}),Object(s.jsxs)("div",{id:"side-bar",className:"side-bar",children:[Object(s.jsx)("h1",{className:"text-uppercase",style:{marginBottom:"120px"},children:"dashboard"}),Object(s.jsx)("li",{children:Object(s.jsxs)(j.b,{to:"/react-dashboard",children:[Object(s.jsx)("i",{className:"fas fa-home"}),"home"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(j.b,{to:"/react-dashboard/charts",children:[Object(s.jsx)("i",{className:"fas fa-chart-pie"}),"charts"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(j.b,{to:"/react-dashboard/users",children:[Object(s.jsx)("i",{className:"fas fa-users"}),"users"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)(j.b,{to:"/react-dashboard/cards",children:[Object(s.jsx)("i",{className:"fas fa-id-card"}),"cards"]})})]})]})}}]),t}(c.Component)),x=(t(72),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"home container",children:Object(s.jsxs)("div",{className:"d-flex justify-content-start flex-wrap",children:[Object(s.jsxs)("div",{className:"card services shadow mb-4",children:[Object(s.jsx)("div",{className:"card-header",children:"Services"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{children:"Web development"}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"80%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})}),Object(s.jsx)("h5",{children:"Database"}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"70%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})}),Object(s.jsx)("h5",{children:"REST API"}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar bg-warning",role:"progressbar",style:{width:"75%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"})}),Object(s.jsx)("h5",{children:"Problem Solving"}),Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:"70%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})}),Object(s.jsx)("blockquote",{className:"blockquote mb-0",children:Object(s.jsx)("footer",{className:"blockquote-footer",children:"Created by Steven Beltr\xe1n"})})]})]}),Object(s.jsxs)("div",{className:"card details",children:[Object(s.jsx)("div",{className:"card-header",children:"Details"}),Object(s.jsx)("div",{className:"card-body",children:'This project was created for get me a job was React JS web developer, and this project was maked with bootstrap 4 and Charts JS for charts, this is my first front-end "big" project and I make for improve my skills as Web Development.'})]})]})})}}]),t}(c.Component)),p=t(38),v=(t(168),{dataDoughnut:{labels:["Easy","Medium","Hard"],datasets:[{data:[100,200,20],backgroundColor:["#0D9800","#E9A13B","#B20000"],hoverBackgroundColor:["#10B600","#FFAB34","#DC0000"]}],text:"23%"},dataBar:{labels:["Lunes","Martes","Miercoles","Jueves","S\xe1bados","Domingos"],datasets:[{label:"Steven frequency coding weekly",borderWidth:1,data:[65,59,80,81,56,55,40],backgroundColor:["rgba(162,162,162,0.5)","rgba(228,0,0,0.5)","rgba(0,228,152,0.5)","rgba(0,108,228, 0.5)","rgba(163,0,228, 0.5)","rgba(67,45,57, 0.5)"],hoverBackgroundColor:["rgba(162,162,162,0.7)","rgba(228,0,0,0.7)","rgba(0,228,152,0.7)","rgba(0,108,228, 0.7)","rgba(163,0,228, 0.7)","rgba(67,45,57, 0.7)"],borderColor:["rgba(162,162,162,1)","rgba(228,0,0,1)","rgba(0,228,152,1)","rgba(0,108,228,1)","rgba(163,0,228,1)","rgba(67,45,57,1)"]}]}}),f=v,y=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"d-flex justify-content-around earnings",children:[Object(s.jsxs)("div",{className:"card earned-monthly",children:[Object(s.jsx)("h5",{className:"card-title",children:"Earned monthly"}),Object(s.jsx)("p",{children:"$40,000"})]}),Object(s.jsxs)("div",{className:"card earned-annual",children:[Object(s.jsx)("h5",{className:"card-title",children:"Earned annual"}),Object(s.jsx)("p",{children:"$55,000"})]}),Object(s.jsxs)("div",{className:"card clients",children:[Object(s.jsx)("h5",{className:"card-title",children:"Clients"}),Object(s.jsx)("p",{children:"+100"})]}),Object(s.jsxs)("div",{className:"card projects",children:[Object(s.jsx)("h5",{className:"card-title",children:"Projects"}),Object(s.jsx)("p",{children:"+300"})]})]}),Object(s.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(s.jsx)(p.Doughnut,{data:f.dataDoughnut}),Object(s.jsx)(p.Bar,{data:f.dataBar,width:40,height:20})]})]})}}]),t}(c.Component),N=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:"Users"})}}]),t}(c.Component),k=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:"Cards"})}}]),t}(c.Component),w=(t(169),function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(O,{}),Object(s.jsxs)(j.a,{children:[Object(s.jsx)(g,{}),Object(s.jsxs)("div",{id:"app-content",className:"app-content",children:[Object(s.jsx)(h.a,{exact:!0,path:["/","/react-dashboard"],component:x}),Object(s.jsx)(h.a,{path:["/charts","/react-dashboard/charts"],component:y}),Object(s.jsx)(h.a,{path:["/users","/react-dashboard/users"],component:N}),Object(s.jsx)(h.a,{path:["cards","/react-dashboard/cards"],component:k})]})]})]})}}]),t}(c.Component));i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},72:function(e,a,t){}},[[170,1,2]]]);
//# sourceMappingURL=main.23b13ab3.chunk.js.map