(this["webpackJsonpbingo-app"]=this["webpackJsonpbingo-app"]||[]).push([[0],{14:function(e,i,t){},15:function(e,i,t){"use strict";t.r(i);var a=t(0),r=t(1),n=t.n(r),o=t(8),s=t.n(o),l=(t(14),t(3)),d=t(4),c=t(2),u=t(6),v=t(5),p=function(e){Object(u.a)(t,e);var i=Object(v.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=i.call(this,e)).state={active:a.initActive(a.props.id)},a.toggleActive=a.toggleActive.bind(Object(c.a)(a)),a}return Object(d.a)(t,[{key:"initActive",value:function(e){return"free"===e}},{key:"toggleActive",value:function(){if("free"!==this.props.id){var e=this.state.active;this.setState({active:!e})}}},{key:"render",value:function(){var e="p-3 rounded border-2 border-white text-center break-words "+(this.state.active?"bg-green-300 text-gray-800 font-bold":"text-white");return Object(a.jsx)("div",{id:this.props.id,onClick:this.toggleActive,className:e,children:this.props.buzzword})}}]),t}(r.Component),b=t(17),h=function(e){Object(u.a)(t,e);var i=Object(v.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=i.call(this,e)).renderGrid=a.renderGrid.bind(Object(c.a)(a)),a}return Object(d.a)(t,[{key:"renderGrid",value:function(){return console.log("pre-splice",this.props.buzzwords),this.props.buzzwords.splice(12,1,{value:"FREE",id:"free"}),console.log("post-splice",this.props.buzzwords),this.props.buzzwords.map((function(e){return Object(a.jsx)(p,{id:e.id,buzzword:e.value},e.id+"-"+Object(b.a)())}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"grid grid-cols-5 gap-2 my-4",children:this.renderGrid()})}}]),t}(r.Component),f=[{value:"Ownership",id:"ownership"},{value:"Take This Offline",id:"takethisoffline"},{value:"Out Of Scope",id:"outofscope"},{value:"Sidebar",id:"sidebar"},{value:"Risk",id:"risk"},{value:"At The End Of The Day",id:"attheendoftheday"},{value:"Fast And Furious",id:"fastandfurious"},{value:"Issue Tracker",id:"issuetracker"},{value:"Next Steps",id:"nextsteps"},{value:"Work In Progress",id:"workinprogress"},{value:"Open Items",id:"openitems"},{value:"Smoke And Mirrors",id:"smokeandmirrors"},{value:"Larger Conversation",id:"largerconversation"},{value:"Lift And Shift",id:"liftandshift"},{value:"Touch Base",id:"touchbase"},{value:"Re-Invent The Wheel",id:"re-inventthewheel"},{value:"Close To Time",id:"closetotime"},{value:"Development Timeline/Timeframe",id:"developmenttimeline/timeframe"},{value:"Dependencies",id:"dependencies"},{value:"Close The Loop",id:"closetheloop"},{value:"Out Of The Box",id:"outofthebox"},{value:"Agile",id:"agile"},{value:"Deliverables",id:"deliverables"},{value:"Roadmap",id:"roadmap"},{value:"Moving Parts",id:"movingparts"},{value:"Feedback",id:"feedback"},{value:"Circle Back",id:"circleback"},{value:"Pushback",id:"pushback"},{value:"Deep Dive",id:"deepdive"},{value:"Customer Journey",id:"customerjourney"},{value:"Leverage",id:"leverage"},{value:"Level Of Effort",id:"levelofeffort"},{value:"Looped In",id:"loopedin"},{value:"Heads Down",id:"headsdown"},{value:"Fast Follow",id:"fastfollow"},{value:"In My Old Life",id:"inmyoldlife"}];var g=function(){var e=f.slice(0,25);return console.log(e),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("main",{className:"bg-gray-900",children:Object(a.jsxs)("div",{className:"w-full min-h-screen text-blue-100 p-2",children:[Object(a.jsx)("h1",{className:"text-center my-4 text-2xl font-bold text-green-300 uppercase",children:"Buzzword Bingo!"}),Object(a.jsx)("section",{id:"bingo",className:"container p-2",children:Object(a.jsx)(h,{buzzwords:e})})]})})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(i){var t=i.getCLS,a=i.getFID,r=i.getFCP,n=i.getLCP,o=i.getTTFB;t(e),a(e),r(e),n(e),o(e)}))};s.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.acd86476.chunk.js.map