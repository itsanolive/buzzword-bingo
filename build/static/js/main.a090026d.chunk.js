(this["webpackJsonpbingo-app"]=this["webpackJsonpbingo-app"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i(1),n=i.n(r),d=i(8),o=i.n(d),s=(i(14),i(15),i(3)),l=i(4),c=i(2),u=i(6),v=i(5),b=function(e){Object(u.a)(i,e);var t=Object(v.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).state={active:a.initActive(a.props.id)},a.toggleActive=a.toggleActive.bind(Object(c.a)(a)),a}return Object(l.a)(i,[{key:"initActive",value:function(e){return"free"===e}},{key:"toggleActive",value:function(){if("free"!==this.props.id){var e=this.state.active;this.setState({active:!e})}}},{key:"render",value:function(){var e="BingoGridItem p-1 sm:p-2 rounded border-2 border-gray-900 dark:border-white text-center md:font-bold break-words md:break-normal text-xs md:text-base "+(this.state.active?"bg-gray-900 text-green-300 border-green-300 dark:bg-green-300 dark:text-gray-800 shadow-lg":"text-gray-900 dark:text-white");return Object(a.jsx)("div",{id:this.props.id,onClick:this.toggleActive,className:e,children:this.props.buzzword})}}]),i}(r.Component),h=i(18),p=function(e){Object(u.a)(i,e);var t=Object(v.a)(i);function i(e){var a;return Object(s.a)(this,i),(a=t.call(this,e)).renderGrid=a.renderGrid.bind(Object(c.a)(a)),a}return Object(l.a)(i,[{key:"renderGrid",value:function(){for(var e,t,i=this.props.buzzwords,r=i.length;0!==r;)t=Math.floor(Math.random()*r),e=i[r-=1],i[r]=i[t],i[t]=e;return this.props.buzzwords.splice(12,1,{value:"FREE",id:"free"}),this.props.buzzwords.map((function(e){return Object(a.jsx)(b,{id:e.id,buzzword:e.value},e.id+"-"+Object(h.a)())}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"grid grid-cols-5 gap-1 sm:gap-2 my-4",children:this.renderGrid()})}}]),i}(r.Component),f=[{value:"Ownership",id:"ownership"},{value:"Take This Offline",id:"takethisoffline"},{value:"Out Of Scope",id:"outofscope"},{value:"Sidebar",id:"sidebar"},{value:"Risk",id:"risk"},{value:"At The End Of The Day",id:"attheendoftheday"},{value:"Fast And Furious",id:"fastandfurious"},{value:"Issue Tracker",id:"issuetracker"},{value:"Next Steps",id:"nextsteps"},{value:"Work In Progress",id:"workinprogress"},{value:"Open Items",id:"openitems"},{value:"Smoke And Mirrors",id:"smokeandmirrors"},{value:"Larger Conversation",id:"largerconversation"},{value:"Lift And Shift",id:"liftandshift"},{value:"Touch Base",id:"touchbase"},{value:"Re-Invent The Wheel",id:"re-inventthewheel"},{value:"Close To Time",id:"closetotime"},{value:"Timeline",id:"timeline"},{value:"Dependencies",id:"dependencies"},{value:"Close The Loop",id:"closetheloop"},{value:"Out Of The Box",id:"outofthebox"},{value:"Agile",id:"agile"},{value:"Deliverables",id:"deliverables"},{value:"Roadmap",id:"roadmap"},{value:"Moving Parts",id:"movingparts"},{value:"Feedback",id:"feedback"},{value:"Circle Back",id:"circleback"},{value:"Pushback",id:"pushback"},{value:"Deep Dive",id:"deepdive"},{value:"Customer Journey",id:"customerjourney"},{value:"Leverage",id:"leverage"},{value:"Level Of Effort",id:"levelofeffort"},{value:"Looped In",id:"loopedin"},{value:"Heads Down",id:"headsdown"},{value:"Fast Follow",id:"fastfollow"},{value:"In My Old Life",id:"inmyoldlife"}];var g=function(){var e=f.slice(0,25);return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("main",{className:"bg-gray-50 dark:bg-gray-900",children:[Object(a.jsx)("header",{className:"Header w-full bg-green-300 dark:bg-gray-900 py-4 shadow-md border-gray-900",children:Object(a.jsx)("h1",{className:"text-center text-2xl text-gray-900 font-bold dark:text-green-300 uppercase",children:"Buzzword Bingo!"})}),Object(a.jsx)("div",{className:"w-full min-h-screen p-1 md:p-2",children:Object(a.jsxs)("section",{id:"bingo",className:"container max-w-screen-md p-1 md:p-2 mx-auto",children:[Object(a.jsx)(p,{buzzwords:e}),Object(a.jsx)("button",{className:"rounded p-4 bg-green-300 text-gray-900 font-bold disabled:opacity-50",onClick:function(){window.location.reload(!1)},children:"Reset & Shuffle"})]})})]})})},m=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,d=t.getTTFB;i(e),a(e),r(e),n(e),d(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.a090026d.chunk.js.map