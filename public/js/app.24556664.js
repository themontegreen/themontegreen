(function(e){function t(t){for(var i,s,a=t[0],c=t[1],u=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00cd":function(e,t,n){"use strict";var i=n("7609"),r=n.n(i);r.a},"0dcd":function(e,t,n){"use strict";var i=n("be11"),r=n.n(i);r.a},"15cb":function(e,t,n){"use strict";var i=n("5d15"),r=n.n(i);r.a},"1f1f":function(e,t,n){"use strict";var i=n("c218"),r=n.n(i);r.a},2165:function(e,t,n){},"3c3b":function(e,t,n){},4179:function(e,t,n){},"569e":function(e){e.exports=JSON.parse('{"content":{"projects":[{"id":"project-0","title":"themontegreen","year":"2018-19","categories":["branding","graphic"],"subject":"personal","description":"Playing with a pun from my surname, I experimented and created my own self branding project and built a visual design system. This project was done during my last year of university studying Communication Design, both as a mean to experiment, but also to synthesize everything I learned throughout the three years spent working on my bachelor’s degree.<br/><br/>The visual and graphic choices took inspiration from graphic design trends in Europe during the 1950s and 1960s, most specifically to the graphic styles that became popular in Germany, Italy and Switzerland, with a strong focus in typography.","media":["file-1.jpg","file-2.png","file-3.png"],"cover":"copertina.png"},{"id":"project-1","title":"the truth between the lines","year":"2019","categories":["ui","ux","dev"],"subject":"Iconsulting","description":"A longform designed for the client Iconsulting. The truth between the lines analyzes the phenomenon of fake news. This subject was explored in five different chapter: the first four explain the theories and provide key examples that happened in real life. The fifth and last chapter presents a possible solution provided by the client to avoid the proliferation of fake news.<br/><br/>In this project I worked on the visual design aspects of the longform (interface, choosing the audio and visual material, interactive infographics) as well as the development and publishing of the longform.<br/><br/><a style=\'font-weight: 900; color: black;\' href=\'https://fakenews.iconsulting.biz/\' target=\'_blank\'>Visit website</a>","media":["file-1.jpg"],"cover":"copertina.jpg"}]}}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"App",components:{},beforeCreate:function(){var e;e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_LANG?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_LANG:"en",e="en",this.$ml.change(e)}},a=s,c=n("2877"),u=Object(c["a"])(a,r,o,!1,null,null,null),l=u.exports,d=n("4af9"),p=n("660e"),h=n("353c"),m=n("8cdb"),f=n("569e");i["default"].use(h["MLInstaller"]);new h["MLCreate"]({initial:"it",save:!0,languages:[new h["MLanguage"]("it").create(m),new h["MLanguage"]("en").create(f),new h["MLanguage"]("IT").create(m),new h["MLanguage"]("EN").create(f)]});var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homepage-container"},[n("div",{staticClass:"fixed-content"},[n("HeroParagraph"),n("ScrollableArea",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{projects:e.projects}}),n("MenuFooter")],1)])},v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-paragraph"},[e._v(" Milan based designer+developer focused in the design and development process of visual design systems, digital user experiences and interactive data-driven content. ")])},j=[],w={},_=w,y=(n("912e"),Object(c["a"])(_,b,j,!1,null,"6a21e816",null)),P=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scrollable-area-container"},[n("div",{staticClass:"projects"},e._l(e.projects,(function(e,t){return n("router-link",{key:t,staticClass:"project",attrs:{to:{name:"project",params:{projectId:t}}}},[n("div",{staticClass:"project-container",style:"background-image: url('/img/projects/"+e.id+"/"+e.cover+"'); background-size:cover;background-position: center;"})])})),1)])},C=[],k={props:["projects"],mounted:function(){}},E=k,q=(n("0dcd"),Object(c["a"])(E,x,C,!1,null,"5a4c71fa",null)),$=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-footer-component"},[e._m(0),e._m(1),e._m(2),n("div",{staticClass:"button email",on:{click:function(t){return e.showEmail("show")},mouseover:function(t){return e.showEmail("show")},mouseout:e.showEmail}},[n("a",{attrs:{target:"_blank",href:"mailto:daniel.demonteverde@gmail.com"}},[n("div",{staticClass:"text"},[e._v(e._s(e.emailLabel))])])])])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"button"},[n("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/daniel-demonteverde/"}},[n("div",{staticClass:"text"},[e._v("Linkedin")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"button"},[n("a",{attrs:{target:"_blank",href:"https://www.behance.net/themontegreen"}},[n("div",{staticClass:"text"},[e._v("Behance")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"button"},[n("a",{attrs:{target:"_blank",href:"https://www.instagram.com/themontegreen/"}},[n("div",{staticClass:"text"},[e._v("Instagram")])])])}],T={data:function(){return{emailLabel:"Email"}},methods:{showEmail:function(e){"lg"==this.$mq&&(this.emailLabel="show"==e?"daniel.demonteverde@gmail.com":"Email")}}},S=T,M=(n("15cb"),Object(c["a"])(S,I,O,!1,null,"02a0d2bd",null)),L=M.exports,B={data:function(){return{projects:null}},components:{HeroParagraph:P,ScrollableArea:$,MenuFooter:L},mounted:function(){this.projects=this.$ml.get("content").projects}},N=B,z=(n("cb10"),n("cf13"),Object(c["a"])(N,g,v,!1,null,"529c5648",null)),A=z.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-page"},[n("ProjectTopBar",{attrs:{title:e.$ml.get("content")["projects"][e.currentPid].title}}),n("div",{staticClass:"project-info"},[n("div",{staticClass:"container-carousel"},[n("div",{staticStyle:{width:"100%",height:"100%",border:"1px solid black"}},[n("ProjectShowcase",{attrs:{projectId:e.$ml.get("content")["projects"][e.currentPid].id,media:e.$ml.get("content")["projects"][e.currentPid].media}})],1)]),n("div",{staticClass:"project-content"},[n("div",{staticClass:"info-header"},[n("div",{staticClass:"info"},[e._v(" "+e._s(e.$ml.get("content")["projects"][e.currentPid].year)+" ")]),n("div",{staticClass:"info"},e._l(e.$ml.get("content")["projects"][e.currentPid].categories,(function(t,i){return n("span",{key:i},[e._v(" "+e._s(t)),i+1<e.$ml.get("content")["projects"][e.currentPid].categories.length?n("span",[e._v("/")]):e._e()])})),0),n("div",{staticClass:"info"},[e._v(" "+e._s(e.$ml.get("content")["projects"][e.currentPid].subject)+" ")])]),n("div",{staticClass:"container-paragraph"},[n("div",{staticClass:"paragraph",domProps:{innerHTML:e._s(e.$ml.get("content")["projects"][e.currentPid].description)}})])])]),n("ProjectBottomBar",{on:{goToPrevious:e.previousProject,goToNext:e.nextProject}})],1)},V=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-top-bar"},[n("div",{staticClass:"name-project"},[e._v(e._s(e.title))]),n("router-link",{staticClass:"close-btn",attrs:{to:{name:"home"}}},[n("img",{staticStyle:{width:"18px"},attrs:{src:"/img/x-button.png",alt:""}})])],1)},W=[],R={name:"ProjectTopBar",props:["title"]},J=R,Q=(n("1f1f"),Object(c["a"])(J,D,W,!1,null,"23acb093",null)),U=Q.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-bottom-bar"},[n("div",{staticClass:"buttons"},[n("div",{staticClass:"button",on:{click:e.previousProject}},[e._v("previous")]),n("div",{staticClass:"button",on:{click:e.nextProject}},[e._v("next")])])])},F=[],K={name:"ProjectBottomBar",methods:{previousProject:function(){this.$emit("goToPrevious","goToPrevious")},nextProject:function(){this.$emit("goToNext","goToNext")}}},X=K,Y=(n("6467"),Object(c["a"])(X,G,F,!1,null,"0b599c9a",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-showcase"},[n("div",{staticClass:"media"},[n("carousel",{staticClass:"c",attrs:{perPage:1,autoplay:!0,loop:!0,autoplayTimeout:5e3,paginationEnabled:!1,centerMode:!0}},e._l(e.media,(function(t,i){return n("slide",{key:i,staticClass:"singleSlide",style:"background-image: url('/img/projects/"+e.projectId+"/"+t+"'); background-size:cover;background-position: center;"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"/img/projects/"+e.projectId+"/"+t,alt:""}})])})),1)],1)])},te=[],ne=n("0a63"),ie={name:"ProjectShowcase",components:{Carousel:ne["Carousel"],Slide:ne["Slide"]},props:{projectId:String,media:Array}},re=ie,oe=(n("76d2"),Object(c["a"])(re,ee,te,!1,null,"1bb071ac",null)),se=oe.exports,ae={components:{ProjectTopBar:U,ProjectBottomBar:Z,ProjectShowcase:se},data:function(){return{currentPid:null,windowWidth:0,windowHeight:0}},props:["projectId"],computed:{calcHeight:function(){return this.windowWidth>=1200?this.windowHeight-40:this.windowHeight/2}},beforeMount:function(){this.currentPid=this.projectId},mounted:function(){window.addEventListener("resize",this.onResize),this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.currentPid=this.projectId},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(e){this.windowWidth=e.target.innerWidth,this.windowHeight=e.target.innerHeight},previousProject:function(){this.currentPid>0?this.currentPid-=1:0==this.currentPid&&(this.currentPid=this.$ml.get("content")["projects"].length-1)},nextProject:function(){this.currentPid<this.$ml.get("content")["projects"].length-1?this.currentPid+=1:this.currentPid==this.$ml.get("content")["projects"].length-1&&(this.currentPid=0)}}},ce=ae,ue=(n("b87b"),n("00cd"),Object(c["a"])(ce,H,V,!1,null,"0b88f22e",null)),le=ue.exports,de=n("82de");i["default"].config.productionTip=!1,i["default"].use(d["a"]),i["default"].use(de["a"]),i["default"].use(p["a"],{breakpoints:{sm:768,md:1080,lg:1/0},defaultBreakpoint:"sm"});var pe=new d["a"]({routes:[{name:"home",path:"/",component:A},{name:"project",path:"/project/:projectId",component:le,props:!0}]});new i["default"]({render:function(e){return e(l)},router:pe}).$mount("#app")},"5d15":function(e,t,n){},6467:function(e,t,n){"use strict";var i=n("4179"),r=n.n(i);r.a},7609:function(e,t,n){},"76d2":function(e,t,n){"use strict";var i=n("ec41"),r=n.n(i);r.a},"7cbe":function(e,t,n){},"8cdb":function(e){e.exports=JSON.parse('{"content":{"projects":[{"id":"project-1","title":"the truth between the lines","year":"2019","categories":["ui","ux","development"],"subject":"Iconsulting","description":"A longform designed for the client Iconsulting. The truth between the lines analyzes the phenomenon of fake news. This subject was explored in five different chapter: the first four explain the theories and provide key examples that happened in real life. The fifth and last chapter presents a possible solution provided by the client to avoid the proliferation of fake news.<br/>In this project I worked on the visual design aspects of the longform (interface, choosing the audio and visual material, interactive infographics) as well as the development and publishing of the longform."},{"id":"project-2","title":"Progetto 2","year":"2018-19","categories":["ui","ux"],"subject":"final thesis","description":"Cillum aute deserunt consectetur minim quis ad sint labore cupidatat. Qui pariatur non laborum sint ut eiusmod ullamco enim enim adipisicing. Magna aliquip aliquip eu eu veniam. Do deserunt est sint consequat et. Voluptate consequat fugiat cillum deserunt consectetur non consectetur velit. Eiusmod exercitation occaecat qui laborum. Id sint consectetur consectetur eiusmod labore nostrud reprehenderit quis esse adipisicing sint quis eu."},{"id":"project-3","title":"Progetto 3","year":"2018-19","categories":["ui","ux"],"subject":"final thesis","description":"Cillum aute deserunt consectetur minim quis ad sint labore cupidatat. Qui pariatur non laborum sint ut eiusmod ullamco enim enim adipisicing. Magna aliquip aliquip eu eu veniam. Do deserunt est sint consequat et. Voluptate consequat fugiat cillum deserunt consectetur non consectetur velit. Eiusmod exercitation occaecat qui laborum. Id sint consectetur consectetur eiusmod labore nostrud reprehenderit quis esse adipisicing sint quis eu."},{"id":"project-4","title":"Progetto 4","year":"2018-19","categories":["ui","ux"],"subject":"final thesis","description":"Cillum aute deserunt consectetur minim quis ad sint labore cupidatat. Qui pariatur non laborum sint ut eiusmod ullamco enim enim adipisicing. Magna aliquip aliquip eu eu veniam. Do deserunt est sint consequat et. Voluptate consequat fugiat cillum deserunt consectetur non consectetur velit. Eiusmod exercitation occaecat qui laborum. Id sint consectetur consectetur eiusmod labore nostrud reprehenderit quis esse adipisicing sint quis eu."},{"id":"project-5","title":"Progetto 5","year":"2018-19","categories":["ui","ux"],"subject":"final thesis","description":"Cillum aute deserunt consectetur minim quis ad sint labore cupidatat. Qui pariatur non laborum sint ut eiusmod ullamco enim enim adipisicing. Magna aliquip aliquip eu eu veniam. Do deserunt est sint consequat et. Voluptate consequat fugiat cillum deserunt consectetur non consectetur velit. Eiusmod exercitation occaecat qui laborum. Id sint consectetur consectetur eiusmod labore nostrud reprehenderit quis esse adipisicing sint quis eu."}]}}')},"912e":function(e,t,n){"use strict";var i=n("d18a"),r=n.n(i);r.a},b87b:function(e,t,n){"use strict";var i=n("3c3b"),r=n.n(i);r.a},be11:function(e,t,n){},c218:function(e,t,n){},cb10:function(e,t,n){"use strict";var i=n("7cbe"),r=n.n(i);r.a},cf13:function(e,t,n){"use strict";var i=n("2165"),r=n.n(i);r.a},d18a:function(e,t,n){},ec41:function(e,t,n){}});
//# sourceMappingURL=app.24556664.js.map