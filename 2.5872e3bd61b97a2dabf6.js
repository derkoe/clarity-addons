(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FqkS:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),b=function(){return function(){}}(),e=u("zl1X"),o=u("pMnS"),c=u("8KBR"),i=u("xLE1"),r=u("Ip0R"),a=u("6/Z3"),f=u("mN7P"),s=u("2HPr"),A=function(){function l(l){this.router=l,this.withCommandBar=!1,this.withContentPanel=!1}return l.prototype.ngOnInit=function(){this.withCommandBar=this.collectRouteData("withCommand")[0],this.withContentPanel=this.collectRouteData("withPanel")[0],this.id=this.collectRouteData("id")[0]},l.prototype.toggleLeftPanel=function(){this.leftContentPanel.toggle()},l.prototype.toggleRightPanel=function(){this.rightContentPanel.toggle()},l.prototype.collectRouteData=function(l){for(var n=this.router.routerState.snapshot.root,u=[];n;)n.data&&n.data[l]&&u.push(n.data[l]),n=n.firstChild;return u},l}(),g=u("ZYCi"),d=t.qb({encapsulation:2,styles:[],data:{}});function h(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Base Pagelayout"]))],null,null)}function m(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Command bar"]))],null,null)}function C(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Content Panel"]))],null,null)}function p(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"clr-button",[],null,null,null,e.G,e.j)),t.Hb(6144,null,i.Ac,null,[i.l]),t.rb(2,4243456,[[3,4]],0,i.l,[[3,i.be]],null,null),(l()(),t.Kb(-1,0,["Command1"]))],null,null)}function P(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"clr-button",[],null,null,null,e.G,e.j)),t.Hb(6144,null,i.Ac,null,[i.l]),t.rb(2,4243456,[[3,4]],0,i.l,[[3,i.be]],null,null),(l()(),t.Kb(-1,0,["Command2"]))],null,null)}function w(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"clr-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleRightPanel()&&t),t},e.G,e.j)),t.Hb(6144,null,i.Ac,null,[i.l]),t.rb(2,4243456,[[3,4]],0,i.l,[[3,i.be]],null,{_click:"click"}),(l()(),t.Kb(-1,0,["Show/Hide Right"]))],null,null)}function I(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,3,"clr-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleLeftPanel()&&t),t},e.G,e.j)),t.Hb(6144,null,i.Ac,null,[i.l]),t.rb(2,4243456,[[3,4]],0,i.l,[[3,i.be]],{inMenu:[0,"inMenu"]},{_click:"click"}),(l()(),t.Kb(-1,0,["Show/Hide Left "]))],function(l,n){l(n,2,0,!0)},null)}function M(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,15,"clr-button-group",[["class","command-bar"]],[[2,"btn-group",null]],[["document","click"]],function(l,n,u){var b=!0;return"document:click"===n&&(b=!1!==t.Cb(l,2).onMouseClick(u.target)&&b),b},e.F,e.k)),t.Hb(512,null,i.be,i.be,[]),t.rb(2,1097728,null,1,i.m,[i.be,t.l,i.v],{menuPosition:[0,"menuPosition"]},null),t.Ib(603979776,3,{buttons:1}),(l()(),t.ib(16777216,null,null,1,null,p)),t.rb(5,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,P)),t.rb(7,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,w)),t.rb(9,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,I)),t.rb(11,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(12,0,null,null,3,"clr-button",[],null,null,null,e.G,e.j)),t.Hb(6144,null,i.Ac,null,[i.l]),t.rb(14,4243456,[[3,4]],0,i.l,[[3,i.be]],{inMenu:[0,"inMenu"]},null),(l()(),t.Kb(-1,0,["Command3"]))],function(l,n){var u=n.component;l(n,2,0,"bottom-right"),l(n,5,0,!u.withContentPanel),l(n,7,0,!u.withContentPanel),l(n,9,0,u.withContentPanel),l(n,11,0,u.withContentPanel),l(n,14,0,!0)},function(l,n){l(n,0,0,!0)})}function k(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(1,null,[" for submenu ",""]))],null,function(l,n){l(n,1,0,n.component.id)})}function K(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,4,"div",[["class","content-container"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,3,"div",[["class","content-area"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" This is the page content"])),(l()(),t.ib(16777216,null,null,1,null,k)),t.rb(4,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,4,0,n.component.id)},null)}function S(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,15,"clr-content-panel-container",[],[[2,"content-container",null],[2,"content-panel-container",null]],null,null,c.H,c.g)),t.rb(1,49152,null,0,a.l,[],null,null),(l()(),t.sb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Content Area"])),(l()(),t.sb(4,0,null,2,5,"clr-content-panel",[["clrDirection","left"]],[[2,"content-panel",null],[2,"left",null]],null,null,c.I,c.f)),t.rb(5,114688,[[1,4],["leftContentPanel",4]],0,a.k,[],{direction:[0,"direction"]},null),(l()(),t.sb(6,0,null,0,1,null,null,null,null,null,null,null)),(l()(),t.Kb(-1,null,["Left Content Panel"])),(l()(),t.sb(8,0,null,1,1,null,null,null,null,null,null,null)),(l()(),t.Kb(-1,null,["Content"])),(l()(),t.sb(10,0,null,2,5,"clr-content-panel",[],[[2,"content-panel",null],[2,"left",null]],null,null,c.I,c.f)),t.rb(11,114688,[[2,4],["rightContentPanel",4]],0,a.k,[],null,null),(l()(),t.sb(12,0,null,0,1,null,null,null,null,null,null,null)),(l()(),t.Kb(-1,null,["Right Content Panel"])),(l()(),t.sb(14,0,null,1,1,null,null,null,null,null,null,null)),(l()(),t.Kb(-1,null,["Content"]))],function(l,n){l(n,5,0,"left"),l(n,11,0)},function(l,n){l(n,0,0,!0,!0),l(n,4,0,!0,"left"===t.Cb(n,5).direction),l(n,10,0,!0,"left"===t.Cb(n,11).direction)})}function q(l){return t.Mb(0,[t.Ib(671088640,1,{leftContentPanel:0}),t.Ib(671088640,2,{rightContentPanel:0}),(l()(),t.sb(2,0,null,null,20,"clr-main-container",[],[[2,"main-container",null]],null,null,null,null)),t.rb(3,212992,null,0,i.sb,[t.l,i.ce],null,null),t.rb(4,8404992,null,0,i.Bc,[],null,null),(l()(),t.sb(5,0,null,null,1,"clr-demo-menu",[],null,null,null,f.b,f.a)),t.rb(6,49152,null,0,s.a,[r.e,t.D],null,null),(l()(),t.sb(7,0,null,null,11,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),t.sb(8,0,null,null,1,"clr-back-button",[],null,null,null,c.B,c.b)),t.rb(9,49152,null,0,a.b,[r.m],null,null),(l()(),t.sb(10,0,null,null,6,"h2",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,h)),t.rb(12,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,m)),t.rb(14,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,C)),t.rb(16,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,M)),t.rb(18,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,K)),t.rb(20,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,S)),t.rb(22,16384,null,0,r.q,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0),l(n,12,0,!u.withCommandBar&&!u.withContentPanel),l(n,14,0,u.withCommandBar&&!u.withContentPanel),l(n,16,0,u.withCommandBar&&u.withContentPanel),l(n,18,0,u.withCommandBar),l(n,20,0,!u.withContentPanel),l(n,22,0,u.withContentPanel)},function(l,n){l(n,2,0,!0)})}function v(l){return t.Mb(0,[(l()(),t.sb(0,0,null,null,1,"clr-basepage-layout-demo",[],null,null,null,q,d)),t.rb(1,114688,null,0,A,[g.l],null,null)],function(l,n){l(n,1,0)},null)}var y=t.ob("clr-basepage-layout-demo",A,v,{},{},[]),H=u("gIcY"),B=u("fTK2");u.d(n,"BasepageLayoutDemoModuleNgFactory",function(){return j});var j=t.pb(b,[],function(l){return t.zb([t.Ab(512,t.j,t.db,[[8,[e.ab,e.a,e.b,e.d,e.e,e.f,e.g,e.h,e.c,e.bb,e.cb,e.db,e.eb,o.a,c.a,y]],[3,t.j],t.z]),t.Ab(4608,r.s,r.r,[t.w,[2,r.K]]),t.Ab(4608,H.D,H.D,[]),t.Ab(4608,a.f,a.f,[]),t.Ab(1073742336,r.c,r.c,[]),t.Ab(1073742336,i.gb,i.gb,[]),t.Ab(1073742336,i.Hc,i.Hc,[]),t.Ab(1073742336,i.Fe,i.Fe,[]),t.Ab(1073742336,i.Y,i.Y,[]),t.Ab(1073742336,i.i,i.i,[]),t.Ab(1073742336,i.ab,i.ab,[]),t.Ab(1073742336,i.u,i.u,[]),t.Ab(1073742336,i.Qc,i.Qc,[]),t.Ab(1073742336,i.s,i.s,[]),t.Ab(1073742336,i.Tc,i.Tc,[]),t.Ab(1073742336,i.O,i.O,[]),t.Ab(1073742336,H.C,H.C,[]),t.Ab(1073742336,H.k,H.k,[]),t.Ab(1073742336,i.lb,i.lb,[]),t.Ab(1073742336,i.Bb,i.Bb,[]),t.Ab(1073742336,i.Fb,i.Fb,[]),t.Ab(1073742336,i.Jb,i.Jb,[]),t.Ab(1073742336,i.dc,i.dc,[]),t.Ab(1073742336,i.db,i.db,[]),t.Ab(1073742336,i.rb,i.rb,[]),t.Ab(1073742336,i.dd,i.dd,[]),t.Ab(1073742336,i.gd,i.gd,[]),t.Ab(1073742336,i.S,i.S,[]),t.Ab(1073742336,i.H,i.H,[]),t.Ab(1073742336,i.Tb,i.Tb,[]),t.Ab(1073742336,i.jc,i.jc,[]),t.Ab(1073742336,i.y,i.y,[]),t.Ab(1073742336,i.vb,i.vb,[]),t.Ab(1073742336,i.qb,i.qb,[]),t.Ab(1073742336,i.n,i.n,[]),t.Ab(1073742336,i.o,i.o,[]),t.Ab(1073742336,i.tb,i.tb,[]),t.Ab(1073742336,i.yb,i.yb,[]),t.Ab(1073742336,i.de,i.de,[]),t.Ab(1073742336,i.ac,i.ac,[]),t.Ab(1073742336,i.oc,i.oc,[]),t.Ab(1073742336,i.ob,i.ob,[]),t.Ab(1073742336,i.Mb,i.Mb,[]),t.Ab(1073742336,i.gc,i.gc,[]),t.Ab(1073742336,i.Cb,i.Cb,[]),t.Ab(1073742336,i.sc,i.sc,[]),t.Ab(1073742336,i.se,i.se,[]),t.Ab(1073742336,i.re,i.re,[]),t.Ab(1073742336,i.a,i.a,[]),t.Ab(1073742336,g.p,g.p,[[2,g.u],[2,g.l]]),t.Ab(1073742336,a.cb,a.cb,[]),t.Ab(1073742336,a.M,a.M,[]),t.Ab(1073742336,a.s,a.s,[]),t.Ab(1073742336,a.K,a.K,[]),t.Ab(1073742336,a.h,a.h,[]),t.Ab(1073742336,a.e,a.e,[]),t.Ab(1073742336,a.w,a.w,[]),t.Ab(1073742336,a.o,a.o,[]),t.Ab(1073742336,a.C,a.C,[]),t.Ab(1073742336,a.u,a.u,[]),t.Ab(1073742336,a.c,a.c,[]),t.Ab(1073742336,a.F,a.F,[]),t.Ab(1073742336,a.T,a.T,[]),t.Ab(1073742336,a.Y,a.Y,[]),t.Ab(1073742336,a.O,a.O,[]),t.Ab(1073742336,a.j,a.j,[]),t.Ab(1073742336,a.q,a.q,[]),t.Ab(1073742336,a.Q,a.Q,[]),t.Ab(1073742336,a.lb,a.lb,[]),t.Ab(1073742336,a.z,a.z,[]),t.Ab(1073742336,a.a,a.a,[]),t.Ab(1073742336,B.a,B.a,[]),t.Ab(1073742336,b,b,[]),t.Ab(1024,g.j,function(){return[[{path:"",component:A,outlet:"fullpage"}]]},[])])})}}]);