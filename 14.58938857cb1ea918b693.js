(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"V3/c":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("zl1X"),c=u("pMnS"),a=u("+Xo0"),s=u("0G9f"),b=u("xLE1"),i=u("ZYCi"),r=u("Ip0R"),d=u("QkwE"),p=u("vAyd"),h=u("mrSG"),g=u("N+3j"),A='\n<div class="btn-group">\n    <button class="btn" (click)="leftContentPanel.toggle()">Show/Hide Left</button>\n    <button class="btn" (click)="rightContentPanel.toggle()">Show/Hide Right</button>\n</div>\n\n<clr-content-panel-container>\n    <h2>This is the page title</h2>\n    <span>This is the page content</span>\n    <clr-content-panel #leftContentPanel clrDirection="left">\n        <ng-container clr-content-panel-title>Left Content Panel</ng-container>\n        <ng-container clr-content-panel-content>Content</ng-container>\n    </clr-content-panel>\n    <clr-content-panel #rightContentPanel>\n        <ng-container clr-content-panel-title>Right Content Panel</ng-container>\n        <ng-container clr-content-panel-content>Content</ng-container>\n    </clr-content-panel>\n</clr-content-panel-container>\n',K=function(l){function n(){var n=l.call(this,"content-panel-layout")||this;return n.codeExample=A,n}return Object(h.c)(n,l),n}(g.a),f=e.qb({encapsulation:2,styles:[],data:{}});function y(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,121,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,a.b,a.a)),e.rb(1,49152,null,0,s.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.sb(2,0,null,0,119,"article",[],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The Content Panel provides additional, in most cases contextual information to the content-area. "])),(l()(),e.sb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Responsive Bahavior"])),(l()(),e.sb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The sidebar uses on mobile devices the full page width. It is displayed as modal layer above the main content on larger screens. On medium sized desktops and above, the sidebar is a column next to the content. Note that it is always possible to hide or display the panel."])),(l()(),e.sb(9,0,null,null,33,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.sb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Usage"])),(l()(),e.sb(12,0,null,null,2,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Use to display supplemental content and features"])),(l()(),e.sb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Behavior"])),(l()(),e.sb(17,0,null,null,2,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(18,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The content panel is not always visible, it appears on the right side next to the content-area and can be shown or hidden according to users needs."])),(l()(),e.sb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Responsive Behavior"])),(l()(),e.sb(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["\u22651200 px (Desktop, fullscreen)"])),(l()(),e.sb(24,0,null,null,6,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Content panel is displayed on the right-side next to the content-area"])),(l()(),e.sb(27,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The content panel remains visible while the user interacts with the primary content."])),(l()(),e.sb(29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["According to business needs the content panel can be shown automatically on resize or on user interaction, depending whether the content area or the content panel poses more important information to the user."])),(l()(),e.sb(31,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["\u2265768 px (Tablet, landscape)"])),(l()(),e.sb(33,0,null,null,4,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(34,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The content panel is displayed on the right-side overlapping the content-area and invoking a backdrop over the content-area."])),(l()(),e.sb(36,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Invoking and "])),(l()(),e.sb(38,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["default: \u2264 768px (Tablet, portrait)"])),(l()(),e.sb(40,0,null,null,2,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(41,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The content panel is shown maximized, consuming the content-area's space. "])),(l()(),e.sb(43,0,null,null,78,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.sb(44,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Code & Examples"])),(l()(),e.sb(46,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Demo"])),(l()(),e.sb(48,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e.sb(49,0,null,null,1,"clr-icon",[["shape","display"]],null,null,null,null,null)),e.rb(50,16384,null,0,b.fb,[],null,null),(l()(),e.Kb(-1,null,["\xa0 "])),(l()(),e.sb(52,0,null,null,6,"a",[["routerLink","/full-page-layouts/content-panel"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,53).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.rb(53,671744,[[2,4]],0,i.o,[i.l,i.a,r.n],{routerLink:[0,"routerLink"]},null),e.rb(54,1720320,null,2,i.n,[i.l,e.l,e.H,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Ib(603979776,1,{links:1}),e.Ib(603979776,2,{linksWithHrefs:1}),(l()(),e.sb(57,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Base Pagelayout with Content Panel"])),(l()(),e.sb(59,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" When implementing a content panel on your page, you will want to replace your default container div with a "])),(l()(),e.sb(61,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["clr-content-panel-container"])),(l()(),e.Kb(-1,null,[". Inside of it, you can place any content you want to - including one or multiple "])),(l()(),e.sb(64,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["clr-content-panel"])),(l()(),e.Kb(-1,null,[". "])),(l()(),e.sb(67,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" You can use the "])),(l()(),e.sb(69,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["@ViewChild()"])),(l()(),e.Kb(-1,null,[" annotation to get a reference of your "])),(l()(),e.sb(72,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["ClrContentPanel"])),(l()(),e.Kb(-1,null,[", which will allow you to call its methods: "])),(l()(),e.sb(75,0,null,null,16,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(76,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(77,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["open()"])),(l()(),e.Kb(-1,null,[" - opens the content panel."])),(l()(),e.sb(80,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(81,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["close()"])),(l()(),e.Kb(-1,null,[" - closes the content panel."])),(l()(),e.sb(84,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(85,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["toggle()"])),(l()(),e.Kb(-1,null,[" - convenience method, either opens or closes the content panel depending on the current state of it. "])),(l()(),e.sb(88,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(89,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["isOpen()"])),(l()(),e.Kb(-1,null,[" - returns true if the content panel is open."])),(l()(),e.sb(92,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Following inputs & outputs are available: "])),(l()(),e.sb(94,0,null,null,25,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.sb(95,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),e.sb(96,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["[clrDirection]"])),(l()(),e.Kb(-1,null,[" - determines if the content panel is shown on the left or right side. Default is "])),(l()(),e.sb(99,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["right"])),(l()(),e.Kb(-1,null,[". "])),(l()(),e.sb(102,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(103,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["(clrClosed)"])),(l()(),e.Kb(-1,null,[" is fired every time the content panel is closed. "])),(l()(),e.sb(106,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(107,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["(clrOpened)"])),(l()(),e.Kb(-1,null,[" is fired every time the content panel is opened. "])),(l()(),e.sb(110,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Adding any HTML with the attribute "])),(l()(),e.sb(112,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["clr-content-panel-title"])),(l()(),e.Kb(-1,null,[" will set the title of the content panel. "])),(l()(),e.sb(115,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Adding any HTML with the attribute "])),(l()(),e.sb(117,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["clr-content-panel-content"])),(l()(),e.Kb(-1,null,[" will set the content of the content panel. "])),(l()(),e.sb(120,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.rb(121,4243456,null,0,p.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,53,0,"/full-page-layouts/content-panel"),l(n,54,0,"active"),l(n,121,0,u.codeExample)},function(l,n){l(n,0,0,!0),l(n,52,0,e.Cb(n,53).target,e.Cb(n,53).href)})}function m(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"clr-content-panel-layout-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,y,f)),e.rb(1,49152,null,0,K,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var v=e.ob("clr-content-panel-layout-demo-docu",K,m,{},{},[]),w=u("gIcY"),C=u("XPsC"),k=u("JsA7");u.d(n,"ContentPanelLayoutDemoModuleNgFactory",function(){return x});var x=e.pb(t,[],function(l){return e.zb([e.Ab(512,e.j,e.db,[[8,[o.ab,o.a,o.b,o.d,o.e,o.f,o.g,o.h,o.c,o.bb,o.cb,o.db,o.eb,c.a,v]],[3,e.j],e.z]),e.Ab(4608,r.s,r.r,[e.w,[2,r.K]]),e.Ab(4608,w.D,w.D,[]),e.Ab(1073742336,r.c,r.c,[]),e.Ab(1073742336,b.gb,b.gb,[]),e.Ab(1073742336,b.Hc,b.Hc,[]),e.Ab(1073742336,b.Fe,b.Fe,[]),e.Ab(1073742336,b.Y,b.Y,[]),e.Ab(1073742336,b.i,b.i,[]),e.Ab(1073742336,b.ab,b.ab,[]),e.Ab(1073742336,b.u,b.u,[]),e.Ab(1073742336,b.Qc,b.Qc,[]),e.Ab(1073742336,b.s,b.s,[]),e.Ab(1073742336,b.Tc,b.Tc,[]),e.Ab(1073742336,b.O,b.O,[]),e.Ab(1073742336,w.C,w.C,[]),e.Ab(1073742336,w.k,w.k,[]),e.Ab(1073742336,b.lb,b.lb,[]),e.Ab(1073742336,b.Bb,b.Bb,[]),e.Ab(1073742336,b.Fb,b.Fb,[]),e.Ab(1073742336,b.Jb,b.Jb,[]),e.Ab(1073742336,b.dc,b.dc,[]),e.Ab(1073742336,b.db,b.db,[]),e.Ab(1073742336,b.rb,b.rb,[]),e.Ab(1073742336,b.dd,b.dd,[]),e.Ab(1073742336,b.gd,b.gd,[]),e.Ab(1073742336,b.S,b.S,[]),e.Ab(1073742336,b.H,b.H,[]),e.Ab(1073742336,b.Tb,b.Tb,[]),e.Ab(1073742336,b.jc,b.jc,[]),e.Ab(1073742336,b.y,b.y,[]),e.Ab(1073742336,b.vb,b.vb,[]),e.Ab(1073742336,b.qb,b.qb,[]),e.Ab(1073742336,b.n,b.n,[]),e.Ab(1073742336,b.o,b.o,[]),e.Ab(1073742336,b.tb,b.tb,[]),e.Ab(1073742336,b.yb,b.yb,[]),e.Ab(1073742336,b.de,b.de,[]),e.Ab(1073742336,b.ac,b.ac,[]),e.Ab(1073742336,b.oc,b.oc,[]),e.Ab(1073742336,b.ob,b.ob,[]),e.Ab(1073742336,b.Mb,b.Mb,[]),e.Ab(1073742336,b.gc,b.gc,[]),e.Ab(1073742336,b.Cb,b.Cb,[]),e.Ab(1073742336,b.sc,b.sc,[]),e.Ab(1073742336,b.se,b.se,[]),e.Ab(1073742336,b.re,b.re,[]),e.Ab(1073742336,b.a,b.a,[]),e.Ab(1073742336,C.a,C.a,[]),e.Ab(1073742336,i.p,i.p,[[2,i.u],[2,i.l]]),e.Ab(1073742336,k.a,k.a,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,i.j,function(){return[[{path:"",component:K}]]},[])])})}}]);