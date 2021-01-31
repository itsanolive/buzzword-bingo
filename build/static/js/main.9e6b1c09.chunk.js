(this["webpackJsonpbingo-app"]=this["webpackJsonpbingo-app"]||[]).push([[0],{23:function(e,t,r){},24:function(e,t,r){},29:function(e,t,r){var n={"./github.svg":[31,3],"./nodejs.svg":[32,4],"./npm.svg":[33,5],"./react.svg":[34,6],"./tailwindcss.svg":[35,7]};function i(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return r.e(t[1]).then((function(){return r(i)}))}i.keys=function(){return Object.keys(n)},i.id=29,e.exports=i},30:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(2),a=r.n(i),s=r(10),c=r.n(s),o=(r(23),r(24),[{value:"Ownership",id:"ownership"},{value:"Take This Offline",id:"takethisoffline"},{value:"Out Of Scope",id:"outofscope"},{value:"Sidebar",id:"sidebar"},{value:"Risk",id:"risk"},{value:"At The End Of The Day",id:"attheendoftheday"},{value:"Fast And Furious",id:"fastandfurious"},{value:"Issue Tracker",id:"issuetracker"},{value:"Next Steps",id:"nextsteps"},{value:"Work In Progress",id:"workinprogress"},{value:"Open Items",id:"openitems"},{value:"Smoke And Mirrors",id:"smokeandmirrors"},{value:"Larger Conversation",id:"largerconversation"},{value:"Lift And Shift",id:"liftandshift"},{value:"Touch Base",id:"touchbase"},{value:"Re-Invent The Wheel",id:"re-inventthewheel"},{value:"Close To Time",id:"closetotime"},{value:"Timeline",id:"timeline"},{value:"Dependencies",id:"dependencies"},{value:"Close The Loop",id:"closetheloop"},{value:"Out Of The Box",id:"outofthebox"},{value:"Agile",id:"agile"},{value:"Deliverables",id:"deliverables"},{value:"Roadmap",id:"roadmap"},{value:"Moving Parts",id:"movingparts"},{value:"Feedback",id:"feedback"},{value:"Circle Back",id:"circleback"},{value:"Pushback",id:"pushback"},{value:"Deep Dive",id:"deepdive"},{value:"Customer Journey",id:"customerjourney"},{value:"Leverage",id:"leverage"},{value:"Level Of Effort",id:"levelofeffort"},{value:"Looped In",id:"loopedin"},{value:"Heads Down",id:"headsdown"},{value:"Fast Follow",id:"fastfollow"},{value:"In My Old Life",id:"inmyoldlife"}]),l=r(11),d=r(5),u=r(6),b=r(3),h=r(8),v=r(7),f=function(e){Object(h.a)(r,e);var t=Object(v.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).state={active:n.initActive(n.props.id)},n.toggleActive=n.toggleActive.bind(Object(b.a)(n)),n}return Object(u.a)(r,[{key:"initActive",value:function(e){return"free"===e}},{key:"toggleActive",value:function(){if("free"!==this.props.id){var e=this.state.active;this.setState({active:!e})}}},{key:"render",value:function(){var e="BingoGridItem p-1 sm:p-2 rounded border-2 border-gray-900 dark:border-white text-center md:font-bold break-normal text-xs md:text-lg "+(this.state.active?"bg-gray-900 text-green-300 border-green-300 dark:bg-green-300 dark:text-gray-800 shadow-lg":"text-gray-900 dark:text-white");return Object(n.jsx)("div",{id:this.props.id,onClick:this.toggleActive,className:e,children:this.props.buzzword})}}]),r}(i.Component),j=r(37),p=function(e){Object(h.a)(r,e);var t=Object(v.a)(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).renderGrid=n.renderGrid.bind(Object(b.a)(n)),n}return Object(u.a)(r,[{key:"renderGrid",value:function(){for(var e,t,r=this.props.buzzwords,i=r.length;0!==i;)t=Math.floor(Math.random()*i),e=r[i-=1],r[i]=r[t],r[t]=e;return this.props.buzzwords.splice(12,1,{value:"FREE",id:"free"}),this.props.buzzwords.map((function(e){return Object(n.jsx)(f,{id:e.id,buzzword:e.value},e.id+"-"+Object(j.a)())}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"grid grid-cols-5 gap-1 sm:gap-2 my-4",children:this.renderGrid()})}}]),r}(i.Component),g=r(16),m=r(9),x=r.n(m),O=r(14),w=r(15),k=r(17),y=function(e){var t=e.name,a=Object(k.a)(e,["name"]),s=Object(i.useRef)(null),c=Object(i.useState)(!1),o=Object(w.a)(c,2),l=o[0],d=o[1];if(Object(i.useEffect)((function(){d(!0),function(){var e=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(29)("./".concat(t,".svg"));case 3:s.current=e.sent.default,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),!l&&s.current){var u=s.current;return Object(n.jsx)(u,Object(g.a)({},a))}return null},N=function(e){return Object(n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.href,"aria-label":e.label,className:"flex",children:e.icon?Object(n.jsx)(y,{name:e.icon,className:e.iconClassName}):e.children?e.children:null})};var z=function(){var e=o.slice(0,25),t=(new Date).getFullYear();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)("meta",{charSet:"utf-8"}),Object(n.jsx)("title",{children:"Buzzword Bingo"}),Object(n.jsx)("meta",{name:"description",content:"Track business buzzwords and win back some sanity during meetings"})]}),Object(n.jsxs)("main",{className:"bg-gray-50 dark:bg-gray-900",children:[Object(n.jsx)("header",{className:"Header flex w-full bg-green-300 py-4 px-2 shadow-md border-gray-900",children:Object(n.jsxs)("div",{className:"container flex mx-auto",children:[Object(n.jsx)("div",{className:"w-1/4"}),Object(n.jsx)("div",{className:"w-1/2",children:Object(n.jsx)("h1",{className:"text-center text-3xl text-gray-900 font-bold uppercase",children:"Buzzword Bingo!"})}),Object(n.jsx)("div",{className:"w-1/4 Nav__right",children:Object(n.jsx)(N,{label:"Github",icon:"github",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/itsanolive/buzzword-bingo",className:"text-gray-900 text-lg rounded p-1 hover:text-green-300 hover:bg-gray-900"})})]})}),Object(n.jsx)("div",{className:"w-full min-h-screen p-1 md:p-2",children:Object(n.jsxs)("section",{id:"bingo",className:"container max-w-screen-md p-1 md:p-2 mx-auto",children:[Object(n.jsx)(p,{buzzwords:e}),Object(n.jsx)("button",{className:"rounded p-4 bg-green-300 text-gray-900 text-lg font-bold disabled:opacity-50",onClick:function(){window.location.reload(!1)},children:"Reset & Shuffle"})]})}),Object(n.jsx)("footer",{className:"bg-gray-900 text-green-300",children:Object(n.jsxs)("div",{className:"container flex flex-col py-4 mx-auto text-center",children:[Object(n.jsxs)("div",{className:"Footer__BuiltWith sm:w-1/2 mx-auto my-6",children:[Object(n.jsx)("p",{className:"pb-4",children:"Built with"}),Object(n.jsxs)("div",{className:"Footer__BuiltWith--IconContainer grid grid-cols-4 gap-2 text-2xl",children:[Object(n.jsx)(N,{label:"ReactJS",iconClassName:"Footer__BuiltWith--Icon pr-2",icon:"react",href:"https://reactjs.org/"}),Object(n.jsx)(N,{label:"TailwindCSS",iconClassName:"Footer__BuiltWith--Icon pr-2",icon:"tailwindcss",href:"https://tailwindcss.com/"}),Object(n.jsx)(N,{label:"NodeJS",iconClassName:"Footer__BuiltWith--Icon pr-2",icon:"nodejs",href:"https://nodejs.org/en/"}),Object(n.jsx)(N,{label:"NPM",iconClassName:"Footer__BuiltWith--Icon pr-2",icon:"npm",href:"https://www.npmjs.com/"})]})]}),Object(n.jsxs)("p",{children:["\xa9 Olivia Beaty, ",t," "]})]})})]})]})},C=function(e){e&&e instanceof Function&&r.e(8).then(r.bind(null,38)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),i(e),a(e),s(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),C()}},[[30,1,2]]]);
//# sourceMappingURL=main.9e6b1c09.chunk.js.map